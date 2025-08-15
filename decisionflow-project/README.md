# DecisionFlow - AI 코딩 시대의 의사결정 OS

## 🎯 핵심 문제

### 현재 AI 코딩의 문제점
- **52%** 시니어 개발자가 컨텍스트 손실로 고통
- **19%** AI 사용시 오히려 생산성 감소
- **15-20번** 대화 후 AI도 맥락 잃음
- **67%** 개발자가 AI 생성 코드 디버깅에 더 많은 시간 소비

### 우리가 해결하는 문제
> "Linear가 이슈 트래킹을 혁신했듯이, 우리는 의사결정 트래킹을 혁신한다"

## 💡 제품 개요

**DecisionFlow**는 AI와 함께 코딩할 때 모든 의사결정과 맥락을 자동으로 기록하고, 언제든 복원할 수 있게 해주는 도구입니다.

### 핵심 가치
1. **자동 의사결정 캡처** - AI 대화에서 의사결정 포인트 자동 감지
2. **컨텍스트 타임라인** - 시간순 의사결정 히스토리
3. **AI 메모리 브릿지** - 새 세션에서도 이전 맥락 유지
4. **팀 지식 베이스** - 팀의 모든 의사결정 검색 가능

## 🚀 주요 기능

### 1. Decision Points (의사결정 포인트)
```yaml
자동 감지:
- "A vs B" 패턴
- "should I..." 질문
- 아키텍처 선택
- 라이브러리 선택

기록 내용:
- 선택지들
- 선택한 것
- 선택 이유
- 거부한 이유
```

### 2. Context Timeline (컨텍스트 타임라인)
```
10:00 AM - 프로젝트 시작
10:15 AM - [결정] React 선택 (팀 경험)
10:30 AM - [결정] Tailwind CSS (빠른 프로토타이핑)
11:00 AM - [결정] Zustand (Redux보다 간단)
```

### 3. Team Knowledge Base
- 팀의 모든 의사결정 검색 가능
- "우리가 왜 MongoDB 대신 PostgreSQL 썼더라?"
- 베스트 프랙티스 자동 추출

### 4. AI Coach Mode
주니어 개발자에게 이전 의사결정 컨텍스트 제공

## 🏗️ 기술 스택

### Frontend
- React + Vite (극도의 속도)
- TanStack Query (실시간 동기화)
- Lexical (리치 텍스트 편집)

### Backend
- Rust (Tauri) - 로컬 우선, 보안
- SQLite + LibSQL (로컬/클라우드 동기화)
- CRDT (충돌 없는 협업)

### Extensions
- VS Code Extension API
- Language Server Protocol
- Chrome DevTools Protocol

### AI Integration
- OpenAI/Anthropic API 래퍼
- 자체 프롬프트 체인
- Vector DB (의사결정 유사도)

## 📈 비즈니스 모델

### Pricing (Linear 스타일)
- **Individual**: 무료 (개인 프로젝트, 로컬 저장)
- **Team**: $10/user/월 (팀 동기화, 의사결정 검색, AI 코칭)
- **Enterprise**: $25/user/월 (SSO/SAML, 감사 로그, 온프레미스)

## 🎖️ 경쟁 우위

### vs Pieces.app
- 스니펫이 아닌 의사결정 중심

### vs Cursor
- 코드 생성이 아닌 이해 중심

### vs ADR 도구
- 자동화 + AI 통합

### vs LangSmith/LangGraph
- (분석 예정)

## 🚦 3개월 MVP 로드맵

### Month 1: Core Engine
- [ ] VS Code Extension 기본
- [ ] 의사결정 감지 알고리즘
- [ ] 로컬 SQLite 저장
- [ ] 기본 UI (Webview)

### Month 2: Intelligence
- [ ] AI 대화 분석
- [ ] 의사결정 그래프
- [ ] 컨텍스트 복원
- [ ] 검색 기능

### Month 3: Collaboration
- [ ] 팀 동기화 (CRDT)
- [ ] 웹 대시보드
- [ ] AI 코칭 모드
- [ ] 클로즈드 베타

## 📚 참고 자료

- [상세 분석 문서](./analysis.md)
- [경쟁사 비교](./competitors.md)
- [기술 아키텍처](./architecture.md)