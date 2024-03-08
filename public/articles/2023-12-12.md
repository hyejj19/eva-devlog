---
title: '[TIL] cra -> vite 변경기'
date: '2023-12-12'
updatedDate: ''
image: ''
excerpt: 'vite 를 도입해 DX를 개선하자!'
tag: '개발일지'
readTime: '3 min'
---

### **배경**

CRA 기반으로 세팅된 사내 프로젝트 중 하나를 Vite 로 마이그레이션을 진행하게 되었다.

CRA 는 최신 번들러에 비해 크기가 크고 속도가 느린 편이고, 현재 리액트에서 공식적으로 deprecated 된 상태라 변경이 필요했다. 공식적으로는 Next.js, Remix, Gatsby 등으로 새 프로젝트를 시작하라고 하는데, 그러면 전체 구조가 바뀌어야 하니까 가장 현실적이고 사례가 많은 Vite 를 도입하기로 함.

### **성과**

빌드 타임과 로컬 컴파일 타임이 무진장진장 거의 3배 정도 줄어들었다.

CRA : **빌드 타임 58.68s.**

Vite : **빌드 타임 19.61s.**

기존에는 빌드를 하고 앱을 시작하기 까지 한 세월이 걸렸는데, 거의 시간이 거의 3배 정도 단축되어 DX 가 무척 향상되었다.

번들 사이즈는 아래와 같이 변화했다.

chrome dev tools 의 Coverage 탭에서 확인해본 메인 페이지의 자바스크립트 번들 사이즈,

좌측이 CRA(webpack 기반), 우측이 Vite 도입 후.

기존에는 webpack 옵션이 거의 없다시피해서 chunk로 분할도 되지 않았는데, Vite로 변경 후 청크로 분리되어 로드되는 부분을 확인할 수 있다. 또 unused JavaScript 의 비율도 거의 50% 정도 줄어든 것을 확인할 수 있다.

### **모듈 번들러란?**

그에 앞서서 모듈 시스템과 번들러에 대한 이해도가 부족한 것 같아 개인적으로 간단히 정리해보았다.

자바스크립트에 모듈 시스템이 존재하는 이유는 크게 아래와 같다.

- 스크립트를 따로 불러올 수는 있는데, 전역으로 관리되어서 변수끼리 충돌이 발생해 모듈 시스템의 필요성이 등장하게 되었다.
- 서버사이드, 비동기 상황에서도 모듈 시스템을 활용할 수 있도록 다양한 방식이 등장하게 되었다. (CommonJS, AMD 등..)
- 다양한 방식을 통합해... 자바스크립트 언어 차원에서 모듈 시스템을 지원할 수 있는 ES6가 탄생하게 되었다. (import, export 문법)

그러면 모듈을 하나씩 불러오면 되는데, 여기에 번들러는 왜 필요한 것이냐?

- 모든 브라우저가 모듈 시스템에 대한 호환성을 지니지 않을 가능성이 있음 (트랜스파일러의 역할)
- 번들링 단계를 거치면서 중복된 코드의 제거 등 최적화도 함께 수행하는 역할을 한다.

[내가 참고한 글](https://yozm.wishket.com/magazine/detail/1261/)에서 가장 유명한 번들러 3대장에 대해서도 소개를 하고 있다. 정리가 참 잘 되어있는 좋은 글인 것 같음.

여기서 웹팩과 Vite 의 기반이 되는 Rollup 을 간단하게 비교해보자.

**\[웹팩\]**

- 뛰어난 안정성, 넓은 생태계
- 이미지 에셋을 JS 로 변환하고 이를 분석해서 번들링이 되기 때문에, 다른 번들러에 비해서 복잡성이 증가한다.
- 예시로 추가적인 loader, plugin 이 필요함...

**\[롤업\]**

- ES6 형식으로 빌드 결과물을 출력할 수 있고, 그래서 라이브러리/ 패키지 개발에 활용이 가능하다.
- 코드스플리팅, 중복 제거에 강점이 있어서, 여러개의 진입점이 있을 때 중복 번들링 되는 부분을 찾아내고 독립 모듈로의 분리가 가능하다고 함.

추가적인 궁금증이, 번들러와 빌드 도구의 차이점이었음. 두 개의 용어가 약간 혼용되어서 사용되는 것 같아 이 또한 간단히 정리해봄.

- 번들러 : 애셋의 효율적인 로드와 그에 따른 성능 최적화에 초점이 맞춰짐
- 빌드 도구 : 전체 개발 프로세스의 자동화, 최적화에 초점 => 컴파일, 테스트, 배포 등...

그래서 결론은 빌드 도구 ≥ 번들러의 개념인 것 같다.

### **Vite?**

Vite 가 CRA 의 대안으로 나오는 것은 뚜렷한 장점이 있기 때문이겠지. 이들의 [공식 문서](https://ko.vitejs.dev/guide/why.html)를 참고해 내용을 정리하면 아래와 같다. (공식 문서 번역도 매우 친절하고 뛰어나다!)

- ESM 을 기반으로 빠른 서버 실행 속도 (esbuild)
  - 모듈을 <종속성>, <소스코드> 두 부분으로 나눈다.
  - 종속성에 해당하는 번들링 일부를 사전에 수행시키고, 소스코드의 경우는 필요한 경우에만 변환이 된다.
  - 일반적인 방식에서는 전체 앱을 미리 분석하고 빌드하기 때문에 오랜 시간이 걸림
  - 그러니깐 일반 번들러를 사용하면 빌드된 번들을 기준으로 서버를 실행하기 때문에 오래걸리는데,
  - Vite 를 사용하면 필요할 때에만 번들링이 되기 때문에 빠르다는 의미로 이해했다.
- 빠른 HMR
- 다양한 기능/빌드 지원(TS..)
- Rollup 기반 빌드 최적화

빌드 최적화를 위해서 어떻게 돌아가는지 또한 간단하게 알아보자. ([이 또한 공식문서에 자세하고 친절하게 소개되었다.](https://ko.vitejs.dev/guide/features.html))

- 추가적인 config 없이 기본 빌드 프로세스에 최적화가 적용된다.
- CSS 코드가 분리된다.
  - 비동기 로딩되는 청크 내에 CSS 가 포함된 경우 이를 자동으로 분리하는 기능이 있다.
  - 분리한 후에 CSS 를 계산하고 렌더를 거치니까, CSS 로딩 전에 렌더되어서 화면이 깜빡거리는 현상 (FOUC)를 방지할 수 있다고 함.
  - 비동기 청크 로딩 최적화
    - 여러 모듈에서 공통적으로 어떤 모듈을 필요로 한다면, 이를 병렬적으로 가져올 수 있도록 공통 청크를 생성해 불필요한 네트워크 왕복을 줄일 수 있다.

### **변경 과정**

CRA 기반에서 마이그레이션을 진행하는 것이다 보니, 기존 코드와 호환될 수 있도록 여러 플러그인을 추가하여 진행했다.

**1\. vite 의존성을 추가한다.**

```
# vite 를 설치한다.
yarn add -D vite @vitejs/plugin-react

# vite와 호환되는 플러그인을 추가한다.
yarn add -D
vite-plugin-eslint vite-tsconfig-paths vite-plugin-svgr vite-plugin-env-compatible vite-plugin-environment
```

각 플러그인에 대한 설명은 아래와 같다.

- vite-plugin-eslint : eslint 관련 오류 알려줌
- vite-tsconfig-paths: tsconfig 정의된 paths 매핑 사용
- vite-plugin-svgr : svg 를 리액트 컴포넌트처럼 쓰기
- vite-plugin-env-compatible : 환경변수를 import.meta 대신 process.env 로 접근 허용
- [vite-plugin-environment](https://www.npmjs.com/package/vite-plugin-environment) : 환경변수를 VITE\_ 대신 REACT_APP 로 접근 허용  
  (환경 변수에 대한 플러그인은 추후 테스트 환경에서도 이에 따른 에러를 방지하는 목적을 포함한다.)

아, 의존성 추가 후 index.html 파일을 root 레벨로 이동하고, 진입점을 설정해주어야 한다.

```
 <script type="module" src="/src/index.tsx"></script>
```

공식 문서에 따르면, 추가적인 번들링 과정 없이 index.html 파일을 진입점으로 설정하기 위함이라고 함.

**2\. config 파일을 작성한다.**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';
import EnvironmentPlugin from 'vite-plugin-environment';

// ...

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'REACT_APP_', // 이 prefix 옵션으로 환경변수에서 VTIE_ 대신 기존 접두사를 그대로 사용한다.
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    envCompatible(),
    EnvironmentPlugin('all'),
  ],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          ...renderChunks(includeVendors), // manual chunking 대상을 별도로 추려서 전달
        },
      },
    },
    target: ['es2015', 'chrome70'], // 빌드 아웃풋의 target 을 설정할 수 있다.
  },
});
```

**3\. jest, react testing libary 에 대한 설정**

```
yarn add -D
jest @types/jest ts-node ts-jest @testing-library/react identity-obj-proxy jest-environment-jsdom @testing-library/jest-dom jest-svg-transformer
```

각 라이브러리에 대한 설명은 아래와 같다.

- @types/jest : jest 의 type 정의를 포함한다.
- ts-node : jest가 ts config 읽어오는데에 필요
- ts-jest : jest 에서 ts 작성된 파일 실행에 필요
- @testing-library/react : React Dom 테스팅을 위한 라이브러리
- identity-obj-proxy : jest 에서 css 모듈 테스팅
- jest-svg-transformer : svg 테스팅
- jest-environment-jsdom : Node 상에서 DOM 을 테스트하기 위한 가상 환경
- @testing-library/jest-dom : DOM 테스팅에 필요한 matcher 제공

그리고 config 파일을 작성해준다.

```
// jest.config.ts
/** @type {import('jest').Config} */
import { type JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true, // ESM에 대한 호환 옵션
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFiles: [
    './src/__test__/mocks/browserMocks.ts',
    './src/__test__/env/testEnv.ts',
  ],
};

export default config;
```

- vite 는 ESM 을 기반, jest 는 CommonJS 기반이라 이에 대한 호환이 필요하다. [문서](https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/)
- 이 외에 다른 예시로는 babel 을 사용해 CommonJS 로 컴파일을 하거나
- esBuild, SWC 등의 도구를 활용할 수 있다.

**4\. cypress 설정**

나의 경우는 기존 프로젝트 설정에서 크게 변경될 부분이 없었고, scripts 만 변경했다. ([참고 링크](https://medium.com/@nelfayran/cypress-react-and-vite-collaboration-bed6761808fc))

```
"test:e2e": "BROWSER=none start-server-and-test start http-get://localhost:3000 cy:open-e2e",
"cy:open-e2e": "cypress open --e2e --browser chrome",
"cy:open-unit": "cypress open --component --browser chrome",
"cy:run-e2e": "cypress run --e2e",
"cy:run-unit": "cypress run --component",
```

**5\. storybook 설정**

이 또한 vite 에 의해서라기 보다는 v7로 거의 새로 세팅함

```
npx storybook@latest init
```

그리고 공식 문서를 참고해 vite 에 맞도록 아래와 같이 설정 파일을 추가해주었다.

```
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/*.mdx',
    '../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
```
