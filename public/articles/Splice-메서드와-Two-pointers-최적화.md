---
title: '[알고리즘] 당신이 쓰는 splice가 생각보다 무거운 이유'
date: '2026-01-23'
updatedDate: ''
image: ''
excerpt: ''
tag: '알고리즘'
notionPageId: '2f12cfde-da7f-8046-9957-c3e2a22718a3'
---

링크:

https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

## 문제

```markdown
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
```

## 나의 풀이

```typescript
function moveZeroes(nums: number[]): void {
    let write = 0;

    for(let read = 0; read < nums.length; read++) {
        if(nums[read] !== 0){
            let temp = nums[write];
            nums[write] = nums[read];
            nums[read] = temp;
            write++;
        }
    }
};
```

아주 기초적인 투 포인터 문제.

처음 시도는 아무 생각 없이 splice 와 push 를 사용한 직관적인 접근이었다.

```typescript
function moveZeroes(nums: number[]): void {
    let cur = nums.length - 1;
    let end = 0;

    while(cur >= end) {
        if(nums[cur] === 0) {
            nums.splice(cur, 1);
            nums.push(0);
        }
        cur--;
    }
};
```

다만 배열을 앞에서 부터 읽으면, 처음부터 연속적인 0 값이 왔을 때 처리를 못하는 문제가 있어서 (splice 로 해당 배열을 앞으로 당기고 뒤로 이동하기 때문에.) 뒤에서 부터 읽도록 처리했다.

![](/images/notion/2f12cfde-da7f-80ca-a49a-fe72ae519be9.png)

근데 이렇게 하니까 당연하게도? 런타임에서 개선의 여지가 있어보였다.


## 왜 splice 는 무거울까.

`Array.prototype.splice()` 의 정의를 보면, 이 메소드의 본질은 > 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가해 (원본) 배열의 내용을 변경함 < 이다. 이 과정에서 발생하는 내부 동작이 이 메소드의 실행을 비싸게 만든다. 


MDN 에 따르면, splice 는 원본 배열을 직접 수정한다. 배열의 요소를 직접 수정한다는건,

- 배열의 중간 요소를 제거하면, 그 뒤에 있는 요소는 빈 자리를 채우기 위해 앞으로 한 칸씩 이동해야함.
- 반대로 요소를 중간에 추가하면, 그 뒤의 요소들을 뒤로 한 칸씩 밀어내야 함.
- 이 과정에서 자바스크립트 엔진은 변경된 모든 요소의 인덱스를 새로 계산하고, 메모리 위치를 조정하는 연산을 수행하게 됨.

이 글을 쓰다보니 실제로 이렇게 동작 할지? 가 궁금해서 간단한 테스트를 진행해봤다.

- Case A : 맨 앞을 제거. `splice(0,1)` 을 호출해서, 가장 앞에 있는 요소를 제거한다. 그러면 그 뒤의 모든 요소들이 한 칸씩 앞으로 당겨지게 될 것이다.
- Case B : 맨 뒤를 제거. `splice(lengt - 1, 1)` 을 호출해서 요소 이동 없이 제거만 수행한다.
Case A 의 경우에는 배열의 길이가 늘어나면 늘어날수록, 이동 해야 할 요소들이 많기 때문에 그 연산 시간도 기하급수적으로 늘어날 것이다. 아래와 같이 간단한 코드로 로그를 찍어 테스트 해볼 수 있다.

```typescript
const testSplicePerformance = (arraySize) => {
  const arr = Array.from({ length: arraySize }, (_, i) => i);

  // 1. 배열의 맨 앞(index 0)에서 splice (최악의 경우: 모든 요소 이동)
  const frontArr = [...arr];
  const startFront = performance.now();
  for (let i = 0; i < 1000; i++) {
    frontArr.splice(0, 1); // 맨 앞 요소 제거
  }
  const endFront = performance.now();

  // 2. 배열의 맨 뒤에서 splice (최선의 경우: 이동 없음)
  const backArr = [...arr];
  const startBack = performance.now();
  for (let i = 0; i < 1000; i++) {
    backArr.splice(backArr.length - 1, 1); // 맨 뒤 요소 제거
  }
  const endBack = performance.now();

  console.log(`[배열 크기: ${arraySize}]`);
  console.log(`맨 앞 splice(이동 발생): ${(endFront - startFront).toFixed(4)}ms`);
  console.log(`맨 뒤 splice(이동 없음): ${(endBack - startBack).toFixed(4)}ms`);
};

testSplicePerformance(10000);
testSplicePerformance(100000);
```


결과는 아래와 같았다.

![](/images/notion/2f12cfde-da7f-8093-932b-f2653c285497.png)

CaseA 에 대해서 배열 크기가 1만에서 10만으로 10배 증가하니, 시간도 1.3ms 에서 11.6ms 로 동일하게 약 10배 정도 증가했다. 

## Two pointers 와 swap 으로 최적화.

방금 위에서 살펴본 내용에 따라, `splice` 메서드의 시간 복잡도는 O(n) 이라고 볼 수 있다. 따라서 내가 최초에 해당 문제를 풀기 위해 접근했던 방식은 시간 복잡도가 O(n^2) 이고 그렇기에 실행 시간이 길었던 것이다.


투 포인터를 사용하면, 두 개의 포인터를 이용해 한 번의 순회만으로 원본 배열 내부에서 값의 위치를 변경할 수 있기 때문에 시간 복잡도는 O(n) 이 된다. 


이 문제의 핵심 요구사항은 0을 배열의 맨 뒤로 보내면서도 0이 아닌 숫자들의 상대적인 순서를 유지하는 것이다. read 포인터로 배열을 순차 탐색 하다가, 0이 아닌 숫자를 발견하는 순간, 0에 해당하는 위치를 가리키는 write 포인터와 값을 교환한다. 이 과정을 반복하면, write 포인터는 항상 다음에 숫자가 들어올 0의 자리를 확보하게 되고, read 포인터가 전진하며 그 자리를 차례대로 채우게 된다.


## 실무에서는..?

오늘날 하드웨어 성능은 비약적으로 발전했기에, 모든 상황에서 극적인 최적화를 할 필요는 없을지도 모른다. 하지만 대용량 데이터를 다루며 순서를 조정하거나, 실시간 데이터를 오버헤드 없이 빠르게 정제해야 할 때, 혹은 가상 리스트에서 렌더링할 구간의 인덱스를 정교하게 계산해야 하는 상황 등 극한의 성능 최적화가 요구되는 순간에는 투 포인터와 같은 알고리즘이 분명 강력한 무기가 될 것이다.


사실 지금까지 프론트엔드 개발을 하면서 대용량 데이터를 다룰 일이 드물었고, 성능 최적화라고 하면 주로 브라우저 렌더링이나 프레임워크 활용법에 집중해왔다. 또 웬만한 코드는 무리 없이 돌아가다 보니, 알고리즘 최적화보다는 가독성과 유지보수성에 더 큰 우선순위를 두었던 것이 사실이다.


하지만 오늘 `splice` 메서드의 동작 원리를 파고들며, 내가 관성적으로 사용하던 도구들에 대해 무지했음을 느꼈다. 단순히 주어진 태스크를 쳐내는 것에 그치지 않고, 익숙한 방식에 변주를 주며 최적화의 방향성을 고민하는 과정 자체가 개발자로서 더 나은 개선안을 제시하는 힘이 될 것이라는 확신이 들었다.
