import { 
  Zap, 
  BarChart3, 
  Target, 
  Shield, 
  Phone, 
  MapPin, 
  Globe, 
  Clock,
  DollarSign
} from 'lucide-react';

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      subtitle: "동남아 진출용",
      price: "월 100만원",
      originalPrice: "월 300만원",
      discount: "67% 할인",
      features: [
        "3개국 모니터링 (태국, 베트남, 인도네시아)",
        "월 10명 인플루언서 검증",
        "기본 트렌드 알림",
        "주간 리포트",
        "이메일 지원"
      ],
      highlight: false,
      target: "중소 K-뷰티 브랜드"
    },
    {
      name: "Professional",
      subtitle: "미국/유럽 진출용",
      price: "월 500만원", 
      originalPrice: "월 1,500만원",
      discount: "베스트",
      features: [
        "10개국 모니터링 (미국, 영국, 독일, 프랑스 등)",
        "월 50명 인플루언서 검증",
        "실시간 트렌드 알림",
        "AI 콘텐츠 제안",
        "일일 리포트",
        "전화 지원",
        "ROI 추적 대시보드"
      ],
      highlight: true,
      target: "성장하는 K-브랜드"
    },
    {
      name: "Enterprise",
      subtitle: "글로벌 진출용",
      price: "월 2,000만원",
      originalPrice: "월 5,000만원",
      discount: "60% 할인",
      features: [
        "전 세계 50개국 모니터링",
        "무제한 인플루언서 검증",
        "24/7 실시간 모니터링",
        "전담 매니저 배정",
        "커스텀 리포트",
        "위기 대응 서비스",
        "API 액세스",
        "화이트라벨 솔루션"
      ],
      highlight: false,
      target: "대기업 및 글로벌 브랜드"
    }
  ];

  return (
    <div className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6 tracking-tight">
            가격 정책
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light">
            성과 기반 pricing으로 ROI를 보장합니다
          </p>
          <div className="bg-gray-900/80 border border-gray-800 text-white rounded-full px-8 py-3 inline-block">
            <span className="font-light">런칭 기념 특가: 6개월 50% 할인</span>
          </div>
        </div>

        {/* 가격 카드 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-900/60 border border-gray-800 rounded-2xl p-8 ${
                plan.highlight ? 'ring-2 ring-gray-700 scale-105' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-light">
                    가장 인기
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4 font-light">{plan.subtitle}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500 line-through mt-1">
                      {plan.originalPrice}
                    </div>
                  )}
                </div>

                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  plan.highlight 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {plan.discount}
                </div>

                <div className="mt-4 text-sm text-gray-400 font-medium">
                  {plan.target}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-semibold transition ${
                plan.highlight
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}>
                무료 체험 시작
              </button>
            </div>
          ))}
        </div>

        {/* 성과 수수료 모델 */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4 flex items-center justify-center text-white">
              <DollarSign className="w-6 h-6 text-green-400 mr-3" />
              성과 수수료 모델
            </h3>
            <p className="text-lg mb-6 font-light text-gray-300">성공해야 우리도 성공합니다</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold mb-2">가짜 인플루언서 차단 수수료</h4>
                <div className="text-2xl font-bold text-yellow-300 mb-2">절감액의 20%</div>
                <p className="text-sm">₩5천만 절약 시 → ₩1천만 수수료</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold mb-2">위기 예방 수수료</h4>
                <div className="text-2xl font-bold text-yellow-300 mb-2">손실 방지액의 10%</div>
                <p className="text-sm">₩10억 손실 방지 시 → ₩1억 수수료</p>
              </div>
            </div>

            <div className="mt-6 text-lg font-light text-yellow-300">
              실패하면 기본료만, 성공하면 함께 나눕니다
            </div>
          </div>
        </div>

        {/* 보장 서비스 */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-light text-center mb-8 flex items-center justify-center">
            <Shield className="w-6 h-6 text-green-400 mr-3" />
            TrueVoice 보장
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Zap className="w-10 h-10 text-yellow-400" />
              </div>
              <h4 className="font-light text-white mb-2">24시간 대응</h4>
              <p className="text-gray-400 text-sm font-light">
                긴급 트렌드나 위기 상황에<br />
                24시간 내 대응
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="font-light text-white mb-2">ROI 보장</h4>
              <p className="text-gray-400 text-sm font-light">
                3개월 내 ROI 개선 없으면<br />
                50% 환불
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Target className="w-10 h-10 text-green-400" />
              </div>
              <h4 className="font-light text-white mb-2">정확도 99%</h4>
              <p className="text-gray-400 text-sm font-light">
                인플루언서 검증 정확도<br />
                99% 보장
              </p>
            </div>
          </div>
        </div>

        {/* 연락처 및 CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 mr-3" />
              지금 시작하세요!
            </h3>
            <p className="text-xl mb-8">
              3일 무료 진단으로 현재 마케팅의 문제점을 확인해보세요
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  즉시 상담
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    contact@truevoice.ai
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    053-123-4567
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    카카오톡: @truevoice
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  회사 정보
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    대구광역시 중구 동성로 123
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    www.truevoice.ai
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    24/7 지원
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition mr-4">
                무료 진단 신청
              </button>
              <button className="border-2 border-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                데모 예약하기
              </button>
            </div>

            <div className="mt-8 text-lg font-light">
              "가짜 100만 팔로워보다 진짜 1만 구매자"
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="mt-16 text-center text-gray-500">
          <p className="mb-4">
            2025 신용보증기금 대구·경북 Campus 창업경진대회 출품작
          </p>
          <p className="text-sm">
            © 2025 TrueVoice. All rights reserved. | 
            Made with ❤️ for K-Brands going global
          </p>
        </div>
      </div>
    </div>
  );
}