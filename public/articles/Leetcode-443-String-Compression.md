---
title: '[알고리즘] Leetcode 443. String Compression'
date: '2026-01-21'
updatedDate: ''
image: ''
excerpt: ''
tag: '알고리즘'
notionPageId: '2ee2cfde-da7f-8065-9617-f1cc09a9db48'
---

링크:

https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75

## 문제

```markdown
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

Note: The characters in the array beyond the returned length do not matter and should be ignored.
```

## 나의 풀이

```typescript
function compress(chars: string[]): number {
    let write = 0; // 기록할 위치
    let read = 0; // 읽기 시작할 위치

    while (read < chars.length){
        let curReadIndex = read;

        // 현재 문자와 같은 문자가 어디까지 이어지는지 count를 전진시켜 확인
        while(curReadIndex < chars.length && chars[curReadIndex] === chars[read]){
            curReadIndex++;
        }
        
        // count 는 읽어온 위치에서 기존 위치를 뺀 만큼이 됨.
        let count = curReadIndex - read;

        // 기록할 위치에 문자열을 기록하고, 포인터를 하나 옮김.
        chars[write++] = chars[read];

        // count 가 2 이상이어서, 숫자를 기록해야 하는 경우
        if(count > 1) {
            for (let digit of String(count)){
                chars[write++] = digit;
            }
        }

        // readCount 를 새로운 문자의 시작점으로 옮긴다.
        read = curReadIndex;
    }

    return write;
};
```


### 문제의 핵심

- 문자 배열 chars 를 연속된 문자 위주로 압축하는 것
- 예: `['a', 'a', 'b', 'c', 'c', 'c']` -> `['a', '2', 'b', 'c', '3']`
- **제약**: 새로운 배열 생성 금지, 무조건 기존 배열 수정(In-place), 공간 복잡도 O(1).

### 삽질

처음엔 `for` 루프 하나로 돌면서 `prevChar`랑 `curChar`를 비교하는 방식을 짰다.

**막혔던 지점**:

- 루프가 끝날 때 마지막 문자 그룹 처리가 누락됨.
- 숫자가 10이 넘어가면 배열 칸을 어떻게 늘려서 끼워 넣을지 고민함 (`splice`를 생각했지만 성능과 제약 조건 때문에 포기).
- 예외 케이스를 막으려고 `if-else`를 덕지덕지 붙이다 보니 코드가 누더기가 됨.

### 해결

하나씩 비교하는 것이 아니라 투 포인터와 while 문으로 구간 점프 하는 방식으로 해결. 

무의식적으로 이중 반복문을 회피하려고 하다보니 오히려 로직이 꼬였다. 그런데 이 방식으로 포인터를 미리 전진시켜 놓으면 결과적으로는 O(n) 이 될 수 있다는걸 알게됨. 

그리고 문자열 순회할때도 String(카운트) 를 for..of 로 꺼내서 write 포인터 하나씩 전진시켜서 박아두니까 깔끔해져서 마음에 듦.
