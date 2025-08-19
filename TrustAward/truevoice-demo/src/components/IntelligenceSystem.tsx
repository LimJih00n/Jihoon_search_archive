import { Search, Radar, TrendingUp, MessageSquare, Globe } from 'lucide-react';

export default function IntelligenceSystem() {
  const layers = [
    {
      title: "Layer 1: 인플루언서 진정성 검증",
      description: "100만 팔로워 → 실제 미국인 12만명 감지",
      icon: Search,
      features: ["팔로워 지역 분석", "봇/클릭팜 패턴 감지", "과거 캠페인 ROI 추적"]
    },
    {
      title: "Layer 2: 실시간 트렌드 레이더",
      description: "48시간 내 대응 필요한 트렌드 감지",
      icon: Radar,
      features: ["트렌드 성장률 추적", "K-뷰티 적합도 분석", "진입 타이밍 알림"]
    },
    {
      title: "Layer 3: 밈 생명주기 추적",
      description: "밈의 생성-확산-소멸 예측",
      icon: TrendingUp,
      features: ["밈 단계 분류", "잔여 수명 예측", "바이럴 확률 계산"]
    },
    {
      title: "Layer 4: 심층 댓글 분석",
      description: "표면 vs 진짜 의도 구분",
      icon: MessageSquare,
      features: ["3단계 감성 분석", "구매 신호 감지", "숨은 부정성 탐지"]
    },
    {
      title: "Layer 5: 문화 민감도 스캐너",
      description: "문화적 실수 사전 방지",
      icon: Globe,
      features: ["할랄 인증 체크", "규제 준수 검토", "현지 관습 분석"]
    }
  ];

  return (
    <div className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6 tracking-tight">
            5-Layer Intelligence System
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            AI가 분석하는 다차원 마케팅 인텔리전스로 K-Brand의 글로벌 성공을 보장합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {layers.map((layer, index) => {
            const IconComponent = layer.icon;
            return (
              <div key={index} className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/60 transition-all duration-300">
                <div className="mb-6">
                  <IconComponent className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  {layer.title}
                </h3>
                <p className="text-gray-400 mb-6 font-light">
                  {layer.description}
                </p>
                <ul className="space-y-3">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-white mb-8">통합 분석 결과</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-4xl font-light text-red-400 mb-3">기존 방식</div>
                <div className="text-xl text-gray-300 mb-2">ROI: -57%</div>
                <div className="text-sm text-gray-500">가짜 인플루언서, 트렌드 실패</div>
              </div>
              <div>
                <div className="text-4xl font-light text-green-400 mb-3">TrueVoice</div>
                <div className="text-xl text-gray-300 mb-2">ROI: +298%</div>
                <div className="text-sm text-gray-500">검증된 전략, 완벽한 타이밍</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}