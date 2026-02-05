# 디자인 시스템 구축 계획

## 개요

Evalog 블로그의 일관된 UI를 위한 Tailwind 기반 디자인 시스템 구축

**범위**: 전체 리팩토링 포함 (디자인 토큰 정의 + 컴포넌트 적용)
**Spacing**: 4px 기반 스케일
**Color**: 시맨틱 컬러 추가

---

## Phase 1: 디자인 토큰 정의

### 1.1 Spacing System (4px 기반)

| 토큰 | 값 | Tailwind | 용도 |
|------|-----|----------|------|
| `space-1` | 4px | `1` | 아이콘-텍스트 간격 |
| `space-2` | 8px | `2` | 요소 내부 간격 |
| `space-3` | 12px | `3` | 관련 요소 간격 |
| `space-4` | 16px | `4` | 컴포넌트 내 표준 간격 |
| `space-6` | 24px | `6` | 컴포넌트 간 간격 |
| `space-8` | 32px | `8` | 섹션 내 간격 |
| `space-12` | 48px | `12` | 섹션 간 간격 |
| `space-16` | 64px | `16` | 대형 섹션 간격 |
| `space-24` | 96px | `24` | 히어로/랜딩 간격 |

### 1.2 Typography Scale

| 토큰 | 크기 | Weight | Line Height | 용도 |
|------|------|--------|-------------|------|
| `text-display` | 36px/48px | 800 | 1.1 | 히어로 타이틀 |
| `text-h1` | 30px/36px | 700 | 1.2 | 페이지 타이틀 |
| `text-h2` | 24px/30px | 700 | 1.3 | 섹션 타이틀 |
| `text-h3` | 20px/24px | 600 | 1.4 | 서브섹션 |
| `text-body-lg` | 18px | 400 | 1.6 | 강조 본문 |
| `text-body` | 16px | 400 | 1.6 | 기본 본문 |
| `text-body-sm` | 14px | 400 | 1.5 | 보조 텍스트 |
| `text-caption` | 12px | 500 | 1.4 | 메타 정보 |

### 1.3 Color System

**브랜드 컬러**
```
primary: main-orange (#EB6440) + light/dark 변형
secondary: main-teal (#497174) + light/dark 변형
```

**배경 컬러**
```
bg-surface: white / deep-gray (다크)
bg-surface-elevated: light-teal / gray-800 (다크)
bg-surface-overlay: white/90 / deep-gray/90 (다크)
```

**텍스트 컬러**
```
text-primary: gray-900 / gray-50 (다크)
text-secondary: gray-600 / gray-300 (다크)
text-muted: gray-500 / gray-400 (다크)
text-inverse: white / gray-900 (다크)
```

**시맨틱 컬러**
```
success: #10B981 (green-500)
warning: #F59E0B (amber-500)
error: #EF4444 (red-500)
info: #3B82F6 (blue-500)
```

**Border 컬러**
```
border-default: gray-200 / gray-700 (다크)
border-strong: gray-300 / gray-600 (다크)
```

---

## Phase 2: Tailwind 설정 업데이트

### 2.1 tailwind.config.js 수정

- [ ] 시맨틱 컬러 추가
- [ ] 텍스트 컬러 팔레트 추가
- [ ] spacing 커스텀 값 확장 (필요시)
- [ ] fontSize 커스텀 스케일 추가

### 2.2 globals.css 유틸리티 클래스

- [ ] 타이포그래피 컴포넌트 클래스 추가
  - `.text-display`, `.text-h1`, `.text-h2`, `.text-h3`
  - `.text-body-lg`, `.text-body`, `.text-body-sm`, `.text-caption`
- [ ] 시맨틱 텍스트 컬러 클래스
  - `.text-primary`, `.text-secondary`, `.text-muted`
- [ ] Spacing 유틸리티 클래스
  - `.section-gap` (섹션 간 표준 간격)
  - `.component-gap` (컴포넌트 간 표준 간격)
  - `.element-gap` (요소 간 표준 간격)
- [ ] 기존 클래스 정리/업데이트
  - `.subtitle`, `.title`, `.small-text` 마이그레이션

---

## Phase 3: 컴포넌트 리팩토링

### 3.1 Layout 컴포넌트
- [ ] `layout.tsx` - spacing 토큰 적용
- [ ] `ContentLayout.tsx` - gap 표준화

### 3.2 Header/Navigation
- [ ] `Header.tsx` - spacing, typography 적용
- [ ] 텍스트 컬러 시맨틱 클래스로 교체

### 3.3 Home 컴포넌트
- [ ] `Intro.tsx` - spacing 표준화, typography 적용

### 3.4 Post 컴포넌트
- [ ] `PostList.tsx` - spacing 토큰 적용
- [ ] `PostListItem.tsx` - spacing, typography 적용
- [ ] `TagList.tsx` - spacing 표준화
- [ ] `TableOfContents.tsx` - typography 적용
- [ ] `Article/index.tsx` - typography 클래스 활용

### 3.5 Common 컴포넌트
- [ ] `DarkmodeToggle.tsx` - 컬러 시맨틱 적용
- [ ] `ScrollToTopButton.tsx` - 컬러 통일

---

## Phase 4: 검증 및 문서화

### 4.1 빌드 검증
- [ ] TypeScript 에러 확인
- [ ] Lint/Prettier 통과
- [ ] 빌드 성공

### 4.2 시각적 검증
- [ ] 라이트 모드 확인
- [ ] 다크 모드 확인
- [ ] 반응형 확인 (모바일, 태블릿, 데스크톱)

---

## 파일 변경 목록

| 파일 | 변경 내용 |
|------|----------|
| `tailwind.config.js` | 시맨틱 컬러, 텍스트 컬러, spacing 확장 |
| `globals.css` | 타이포그래피 클래스, 시맨틱 유틸리티 추가 |
| `layout.tsx` | spacing 토큰 적용 |
| `Header.tsx` | spacing, typography, 컬러 적용 |
| `Intro.tsx` | spacing, typography 적용 |
| `PostList.tsx` | spacing 토큰 적용 |
| `PostListItem.tsx` | spacing, typography 적용 |
| `TagList.tsx` | spacing 표준화 |
| `ContentLayout.tsx` | gap 표준화 |
| `TableOfContents.tsx` | typography 적용 |
| `Article/index.tsx` | typography 적용 |
| `DarkmodeToggle.tsx` | 컬러 시맨틱 적용 |
| `ScrollToTopButton.tsx` | 컬러 통일 |

---

## 예상 작업량

- **Phase 1**: 설계 완료 (이 문서)
- **Phase 2**: tailwind.config.js + globals.css (~30분)
- **Phase 3**: 컴포넌트 리팩토링 (~1시간)
- **Phase 4**: 검증 (~15분)

**총 예상**: ~2시간

---

## 마이그레이션 전략

1. **Breaking Change 최소화**: 기존 클래스 유지하면서 새 클래스 추가
2. **점진적 적용**: 한 컴포넌트씩 순차 적용
3. **다크모드 동시 검증**: 변경 시 양쪽 모드 확인
