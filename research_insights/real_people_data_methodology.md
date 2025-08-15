# 진짜 사람들의 데이터 수집 및 시각화 방법론

**작성일**: 2025-01-14
**목적**: 뉴스가 아닌 실제 사람들이 활동하는 공간의 데이터 수집/분석/시각화 전략
**핵심 철학**: "언론이 만드는 여론 vs 사람들이 만드는 진짜 여론"

---

## 🎯 핵심 인사이트: 데이터 소스의 재정의

### 기존 접근법의 한계
```
❌ 기존 PRD 문제점:
- 뉴스 중심 사고 (언론사 → 대중)
- 수동적 정보 소비자 관점
- 상향식(Bottom-up) 여론 형성 과정 무시
- 진짜 사람들의 목소리 간과

❌ 언론 중심 분석의 맹점:
- 언론 → 사람: 하향식 정보 전달
- 편집된 정보, 필터링된 관점
- 기사 댓글 ≠ 사람들의 진짜 생각
- 뉴스 사이클 ≠ 실제 관심사 사이클
```

### 새로운 접근법: 사람 중심 데이터 수집
```
✅ 진짜 여론 형성 과정:
1. 사람들의 일상 → 커뮤니티 토론
2. 커뮤니티 → 소셜미디어 확산
3. 소셜미디어 → 유튜브 콘텐츠화
4. 유튜브 → 언론 보도
5. 언론 보도 → 다시 커뮤니티 반응

핵심: 1→2→3 단계가 진짜 여론의 온도
```

---

## 🏗 데이터 수집 아키텍처 재설계

### Tier 1: 원시 여론 데이터 (최우선)
**사람들이 진짜 생각을 표현하는 공간**

#### 1.1 익명 커뮤니티 (가장 솔직한 의견)
```python
타겟 커뮤니티:
- 디시인사이드: 익명성, 직설적 표현
- 루리웹: 게임/문화 특화
- 일베/여시: 극단적 관점 (모니터링용)
- Reddit 한국 서브레딧: 해외거주 한국인

수집 방식:
- 실시간 RSS 피드 (가능한 곳)
- API 활용 (Reddit)
- 선별적 크롤링 (10분 간격)

오픈소스 도구:
- PRAW (Reddit API wrapper)
- scrapy-splash (JavaScript 렌더링)
- fake-useragent (봇 감지 우회)
```

#### 1.2 실명/반실명 커뮤니티 (신뢰도 높은 의견)
```python
타겟 커뮤니티:
- 클리앙: 중산층, 합리적 토론
- 오늘의유머: 정치적 성향 뚜렷
- 82cook: 주부층 여론
- 네이트판: 젊은층 감성

수집 방식:
- 모바일 API 역분석
- RSS 피드 (일부 제공)
- 정중한 크롤링 (Rate limiting 엄격)

오픈소스 도구:
- mitmproxy (API 분석)
- requests-html (동적 콘텐츠)
- selenium-stealth (감지 우회)
```

### Tier 2: 소셜미디어 확산 데이터
**커뮤니티 → 대중 확산 단계**

#### 2.1 유튜브 (영상 + 댓글 생태계)
```python
접근 전략:
- YouTube Data API v3 (기본)
- YouTube RSS 피드 (채널별)
- yt-dlp (메타데이터 보완)
- youtube-comment-scraper (댓글 보완)

특화 분석:
- 정치 유튜버 생태계 매핑
- 댓글 vs 좋아요 비율 분석
- 채널 간 상호 참조 네트워크
- 밈 확산 패턴 추적

오픈소스 도구:
- google-api-python-client
- yt-dlp (강력한 메타데이터 추출)
- networkx (채널 관계 분석)
```

#### 2.2 인스타그램 (시각적 여론, 젊은층)
```python
접근 전략:
- Instagram Basic Display API (제한적)
- 공개 해시태그 크롤링
- 스토리 vs 피드 분석
- 인플루언서 네트워크 분석

기술적 도전:
- 매우 강한 봇 차단
- 로그인 필요한 콘텐츠 많음
- API 제한 심함

오픈소스 도구:
- instaloader (가장 안정적)
- instagram-scraper (백업용)
- selenium + undetected-chromedriver
```

#### 2.3 트위터/X (실시간 반응)
```python
접근 전략:
- Twitter API v2 (비싸지만 공식)
- snscrape (무료 대안)
- 실시간 스트리밍
- 해시태그 트렌드 분석

오픈소스 도구:
- tweepy (Twitter API wrapper)
- snscrape (API 없이 수집)
- twitterscraper (백업)
```

### Tier 3: 전통 미디어 (참고용)
**여론 → 언론 → 여론 피드백 루프 분석**

#### 3.1 뉴스 RSS (실시간 기준선)
```python
목적: 언론의 관점 vs 사람들의 반응 비교
- 주요 언론사 RSS 피드
- 정치적 성향별 분류
- 실시간 모니터링

오픈소스 도구:
- feedparser (파이썬 RSS 파서)
- newspaper3k (기사 본문 추출)
- python-readability (가독성 개선)
```

---

## 🔬 오픈소스 기반 기술 스택

### 데이터 수집 레이어
```python
실시간 수집:
- Apache Kafka (이벤트 스트리밍)
- Celery + Redis (비동기 작업)
- APScheduler (크론 스케줄링)

크롤링 프레임워크:
- Scrapy (분산 크롤링)
- Selenium + undetected-chromedriver
- requests-html (중간 복잡도)
- httpx (고성능 HTTP 클라이언트)

봇 감지 우회:
- fake-useragent (User-Agent 로테이션)
- rotating-proxies (프록시 로테이션)
- selenium-stealth (WebDriver 감지 우회)
```

### 데이터 처리 레이어
```python
한국어 NLP:
- KoNLPy (형태소 분석)
- soynlp (비지도 학습)
- sentence-transformers (의미 임베딩)
- transformers (BERT 계열 모델)

감성 분석:
- KoELECTRA (한국어 특화)
- 상용 LLM API (GPT-4, Claude) - 복잡한 맥락
- VADER (소셜미디어 특화)

토픽 모델링:
- BERTopic (BERT 기반)
- LDA (Latent Dirichlet Allocation)
- Top2Vec (의미 기반)
```

### 데이터 저장 레이어
```python
시계열 데이터:
- InfluxDB (시계열 전문)
- TimescaleDB (PostgreSQL 확장)

검색 엔진:
- ElasticSearch (한국어 nori 분석기)
- Solr (대안)

그래프 데이터:
- Neo4j (관계 분석)
- NetworkX (파이썬 그래프 분석)

캐싱:
- Redis (고속 캐시)
- Memcached (대안)
```

### 실시간 처리 레이어
```python
스트림 처리:
- Apache Kafka + KafkaStreams
- Apache Flink (복잡한 이벤트 처리)
- Redis Streams (경량)

메시지 큐:
- RabbitMQ (안정성)
- Apache Pulsar (확장성)
```

---

## 📊 혁신적 시각화 전략

### 1. 다층 여론 지형도 (Multi-Layer Opinion Landscape)
```javascript
기술 스택:
- D3.js (복잡한 커스텀 시각화)
- Three.js (3D 시각화)
- Observable Plot (빠른 프로토타이핑)

시각화 아이디어:
- 3D 지형도: 높이 = 언급량, 색상 = 감성
- 시간축 추가: 4D 시각화
- 줌 레벨별 다른 정보 (구글맵 스타일)
```

### 2. 실시간 여론 흐름도 (Real-time Opinion Flow)
```javascript
Sankey 다이어그램:
- 커뮤니티 → 유튜브 → 뉴스 흐름
- 두께 = 영향력, 색상 = 감성 변화
- 시간대별 애니메이션

기술:
- D3-sankey
- Plotly.js
- Cytoscape.js (네트워크)
```

### 3. 감성 진화 애니메이션
```javascript
시간 흐름에 따른 감성 변화:
- Lottie 애니메이션
- GSAP (고성능 애니메이션)
- Chart.js 애니메이션

표현 방식:
- 색상 변화 애니메이션
- 파티클 시스템
- 물결 효과
```

### 4. 인터랙티브 네트워크 그래프
```javascript
사용자-콘텐츠-반응 관계 시각화:
- Sigma.js (대규모 그래프)
- vis.js (인터랙티브)
- Gephi.js (웹 포팅)

기능:
- 드래그 앤 드롭
- 실시간 필터링
- 클러스터링 시각화
```

---

## 🚀 실시간성 확보 전략

### 1. 하이브리드 수집 아키텍처
```python
실시간 스트림 (1-5분):
- RSS 피드 (뉴스)
- WebSocket (일부 커뮤니티)
- API 스트리밍 (Twitter, Reddit)

준실시간 배치 (10-30분):
- 주요 커뮤니티 크롤링
- 유튜브 댓글 수집
- 인스타그램 해시태그

보완 수집 (1-6시간):
- 딥크롤링 (상세 데이터)
- 히스토리컬 데이터
- 품질 검증
```

### 2. 이벤트 기반 트리거
```python
급발 이슈 감지시:
- 모든 수집기 가속화
- 관련 키워드 확장 수집
- 실시간 알림 발송

구현:
- Apache Kafka 이벤트
- WebSocket 브로드캐스트
- 푸시 알림 (FCM)
```

---

## 🔍 진짜 사람들의 데이터 품질 보장

### 1. 봇/어뷰징 감지
```python
패턴 분석:
- 시간대별 활동 패턴
- 언어 사용 패턴
- 반복 행동 감지
- IP 클러스터링 (익명화)

ML 모델:
- Isolation Forest (이상치 감지)
- DBSCAN (클러스터링)
- LSTM (시계열 패턴)

오픈소스:
- scikit-learn
- pandas profiling
- pyod (이상치 감지)
```

### 2. 감성 분석 신뢰도
```python
다중 검증:
- 룰 기반 + ML 모델 + LLM
- 한국어 은어/신조어 사전
- 문맥 분석 (이전/이후 댓글)

오픈소스:
- konlpy + soynlp
- sentence-transformers
- transformers (KoELECTRA)
```

---

## 📋 구현 우선순위 (실제 사람 중심)

### Phase 1: 커뮤니티 기반 구축 (2-3개월)
```
1. 디시인사이드 + 클리앙 크롤러
2. Reddit 한국 서브레딧 API
3. 기본 감성 분석
4. 실시간 대시보드 (간단한 버전)
```

### Phase 2: 소셜미디어 확장 (2-3개월)
```
1. 유튜브 댓글 대량 수집
2. 인스타그램 해시태그 분석
3. 크로스 플랫폼 확산 추적
4. 고도화된 시각화
```

### Phase 3: 통합 분석 (1-2개월)
```
1. 전체 데이터 통합 분석
2. 예측 모델 구축
3. 실시간 알림 시스템
4. API 서비스 오픈
```

---

## 💡 혁신적 분석 관점

### 1. 시간차 분석 (Time-lag Analysis)
```
커뮤니티 → 소셜미디어 → 뉴스 시간차 측정
- 어떤 이슈가 얼마나 빨리 확산되는가?
- 플랫폼별 확산 속도 차이
- 감성 변화의 시간차
```

### 2. 영향력 네트워크 (Influence Network)
```
진짜 오피니언 리더 발굴:
- 팔로워 수 ≠ 실제 영향력
- 댓글 반응 품질 분석
- 후속 콘텐츠 생성 유발도
```

### 3. 침묵의 나선 감지 (Spiral of Silence Detection)
```
목소리 큰 소수 vs 조용한 다수:
- 댓글 수 vs 조회수 비율
- 극단적 의견 vs 온건한 의견
- 플랫폼별 침묵 정도 차이
```

---

## 🎯 최종 목표: 진정한 여론 온도계

### 사람들의 진짜 목소리 시각화
```
기존: "언론이 말하는 여론"
신규: "사람들이 만드는 여론"

핵심 가치:
- 언론 프레임 vs 사람들의 실제 관심사
- 조작된 여론 vs 자연스러운 여론
- 시끄러운 소수 vs 조용한 다수
- 상향식 여론 형성 과정 추적
```

**이것이 진정한 "이슈 스코프"입니다.**

---

*"뉴스는 무엇이 일어났는지 알려주지만, 사람들의 데이터는 무엇이 일어나고 있는지 보여준다."*