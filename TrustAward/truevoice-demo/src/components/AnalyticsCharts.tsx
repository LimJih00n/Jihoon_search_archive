'use client';

import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  MessageCircle, 
  DollarSign,
  Smartphone,
  Camera,
  Play,
  AlertTriangle
} from 'lucide-react';

export default function AnalyticsCharts() {
  const [activeChart, setActiveChart] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    kbrandSuccess: 0,
    fakeInfluencers: 0,
    roiImprovement: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        kbrandSuccess: 85,
        fakeInfluencers: 68,
        roiImprovement: 298
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const chartTabs = [
    { id: 0, title: "K-브랜드 현황", icon: BarChart3 },
    { id: 1, title: "인플루언서 분석", icon: Users },
    { id: 2, title: "트렌드 분석", icon: TrendingUp },
    { id: 3, title: "감정 분석", icon: MessageCircle },
    { id: 4, title: "성장률 분석", icon: AlertTriangle },
    { id: 5, title: "ROI 최적화", icon: DollarSign }
  ];

  const kbrandData = [
    { region: "미국", success: 45, failure: 55, market: "$8.2B" },
    { region: "유럽", success: 38, failure: 62, market: "$5.1B" },
    { region: "동남아", success: 62, failure: 38, market: "$3.4B" },
    { region: "중국", success: 28, failure: 72, market: "$12.8B" },
    { region: "일본", success: 71, failure: 29, market: "$6.9B" }
  ];

  const influencerData = [
    { platform: "Instagram", fake: 68, real: 32, avgCost: "₩15M" },
    { platform: "TikTok", fake: 45, real: 55, avgCost: "₩8M" },
    { platform: "YouTube", fake: 32, real: 68, avgCost: "₩25M" },
    { platform: "Twitter", fake: 78, real: 22, avgCost: "₩3M" }
  ];

  const trendData = [
    { trend: "Glass Skin", stage: "decline", weeks: 2, potential: 15 },
    { trend: "Strawberry Girl", stage: "growth", weeks: 8, potential: 89 },
    { trend: "Clean Girl", stage: "mature", weeks: 4, potential: 45 },
    { trend: "Douyin Makeup", stage: "emerging", weeks: 12, potential: 92 }
  ];

  const sentimentData = [
    { language: "English", surface: 78, real: 34, hidden: 12 },
    { language: "Spanish", surface: 65, real: 41, hidden: 18 },
    { language: "Thai", surface: 82, real: 28, hidden: 8 },
    { language: "Japanese", surface: 71, real: 52, hidden: 15 }
  ];

  const growthData = [
    { month: "1월", kbeauty: 12, kfood: 8, traditional: 3 },
    { month: "2월", kbeauty: 18, kfood: 15, traditional: 4 },
    { month: "3월", kbeauty: 25, kfood: 22, traditional: 5 },
    { month: "4월", kbeauty: 34, kfood: 28, traditional: 6 },
    { month: "5월", kbeauty: 45, kfood: 38, traditional: 7 },
    { month: "6월", kbeauty: 62, kfood: 51, traditional: 8 },
  ];

  const marketShareData = [
    { brand: "전통 마케팅", share: 23, growth: -12 },
    { brand: "소셜 미디어", share: 35, growth: 8 },
    { brand: "인플루언서", share: 28, growth: 15 },
    { brand: "TrueVoice AI", share: 14, growth: 89 }
  ];

  const roiData = [
    { company: "A뷰티", before: -45, after: 234, improvement: 279 },
    { company: "B푸드", before: -23, after: 156, improvement: 179 },
    { company: "C코스메틱", before: -67, after: 298, improvement: 365 },
    { company: "D브랜드", before: -12, after: 89, improvement: 101 }
  ];

  return (
    <div className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6 tracking-tight">
            데이터 인사이트
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            AI가 분석한 K-브랜드 마케팅 데이터의 실시간 시각화
          </p>
        </div>

        {/* 탭 메뉴 */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {chartTabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveChart(tab.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center ${
                  activeChart === tab.id
                    ? 'bg-white text-black'
                    : 'bg-gray-900/60 border border-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {tab.title}
              </button>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto">
          {/* K-브랜드 현황 차트 */}
          {activeChart === 0 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-white text-center mb-12">
                K-브랜드 해외 진출 성공률 분석
              </h3>
              
              {/* 성공률 막대 차트 */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">시장별 성공률</h4>
                <div className="space-y-6">
                  {kbrandData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-light">{item.region}</span>
                        <div className="text-right">
                          <span className="text-green-400">{item.success}%</span>
                          <span className="text-gray-500 ml-2">({item.market})</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3">
                        <div 
                          className="bg-green-400 h-3 rounded-full transition-all duration-2000 ease-out"
                          style={{ width: `${item.success}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 실패 원인 분석 */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                  <h4 className="text-xl font-light text-white mb-6">주요 실패 원인</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">문화적 오해</span>
                      <span className="text-red-400">40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">가짜 인플루언서</span>
                      <span className="text-orange-400">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">트렌드 타이밍</span>
                      <span className="text-yellow-400">25%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                  <h4 className="text-xl font-light text-white mb-6">TrueVoice 개선 효과</h4>
                  <div className="text-center">
                    <div className="text-5xl font-light text-green-400 mb-2">
                      {animatedValues.kbrandSuccess}%
                    </div>
                    <p className="text-gray-400">성공률 향상</p>
                    <div className="mt-4 text-sm text-gray-500">
                      기존 30% → TrueVoice 85%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 인플루언서 분석 차트 */}
          {activeChart === 1 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-white text-center mb-12">
                인플루언서 신뢰도 분석
              </h3>
              
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">플랫폼별 가짜 팔로워 비율</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  {influencerData.map((item, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-light">{item.platform}</span>
                        <span className="text-gray-500">{item.avgCost}</span>
                      </div>
                      
                      {/* 도넛 차트 시뮬레이션 */}
                      <div className="relative w-32 h-32 mx-auto">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#374151"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="3"
                            strokeDasharray={`${item.fake}, ${100 - item.fake}`}
                            className="transition-all duration-2000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-red-400 font-light">{item.fake}%</div>
                            <div className="text-xs text-gray-500">가짜</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 검증 결과 대시보드 */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">실시간 인플루언서 검증 결과</h4>
                
                {/* 검증 통계 */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-red-800/30">
                    <div className="text-2xl font-light text-red-400 mb-1">68%</div>
                    <div className="text-sm text-gray-400">가짜 팔로워</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-orange-800/30">
                    <div className="text-2xl font-light text-orange-400 mb-1">23%</div>
                    <div className="text-sm text-gray-400">의심 계정</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-green-800/30">
                    <div className="text-2xl font-light text-green-400 mb-1">9%</div>
                    <div className="text-sm text-gray-400">실제 팔로워</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-yellow-800/30">
                    <div className="text-2xl font-light text-yellow-400 mb-1">₩45M</div>
                    <div className="text-sm text-gray-400">절약 예상액</div>
                  </div>
                </div>

                {/* 지역별 팔로워 분포 히트맵 개선 */}
                <div className="mb-8">
                  <h5 className="text-lg font-light text-white mb-4">지역별 팔로워 분포 분석</h5>
                  <div className="bg-gray-900/50 rounded-xl p-6">
                    <div className="grid grid-cols-8 gap-2 mb-4">
                      {Array.from({ length: 32 }, (_, i) => {
                        const intensity = Math.random();
                        return (
                          <div
                            key={i}
                            className={`aspect-square rounded transition-all duration-300 hover:scale-110 cursor-pointer ${
                              intensity > 0.8 ? 'bg-red-500 shadow-red-500/30 shadow-lg' :
                              intensity > 0.6 ? 'bg-orange-400 shadow-orange-400/20 shadow-md' :
                              intensity > 0.4 ? 'bg-yellow-400 shadow-yellow-400/20 shadow-sm' : 
                              intensity > 0.2 ? 'bg-blue-500 opacity-60' : 'bg-gray-700 opacity-40'
                            }`}
                            title={`${(intensity * 100).toFixed(1)}% 의심도`}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <div className="text-gray-400">타겟 시장</div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                          <span className="text-gray-400">정상</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                          <span className="text-gray-400">주의</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-1"></div>
                          <span className="text-gray-400">위험</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                          <span className="text-gray-400">봇 농장</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TrueVoice 검증 효과 */}
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-5 h-5 text-green-400" />
                    </div>
                    <h5 className="text-lg font-light text-white tracking-tight">TrueVoice 검증 효과</h5>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-light text-green-300 mb-2">99.2%</div>
                      <div className="text-sm text-gray-400">가짜 감지 정확도</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-blue-300 mb-2">2.3초</div>
                      <div className="text-sm text-gray-400">평균 검증 시간</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-yellow-300 mb-2">₹87M</div>
                      <div className="text-sm text-gray-400">월 평균 절약액</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 트렌드 분석 차트 */}
          {activeChart === 2 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-white text-center mb-12">
                실시간 트렌드 분석
              </h3>
              
              {/* 트렌드 생명주기 */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">트렌드 생명주기</h4>
                <div className="space-y-6">
                  {trendData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-light">#{item.trend}</span>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            item.stage === 'growth' ? 'bg-green-900 text-green-300' :
                            item.stage === 'emerging' ? 'bg-blue-900 text-blue-300' :
                            item.stage === 'mature' ? 'bg-yellow-900 text-yellow-300' :
                            'bg-red-900 text-red-300'
                          }`}>
                            {item.stage}
                          </span>
                          <span className="text-gray-500 ml-2">{item.weeks}주</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-2000 ease-out ${
                            item.stage === 'growth' ? 'bg-green-400' :
                            item.stage === 'emerging' ? 'bg-blue-400' :
                            item.stage === 'mature' ? 'bg-yellow-400' :
                            'bg-red-400'
                          }`}
                          style={{ width: `${item.potential}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-500">
                        K-뷰티 적합도: {item.potential}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 플랫폼별 성장률 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Smartphone className="w-8 h-8 text-pink-400" />
                  </div>
                  <h5 className="text-lg font-light text-white mb-2">TikTok</h5>
                  <div className="text-3xl font-light text-green-400 mb-1">+2,847%</div>
                  <div className="text-sm text-gray-500">strawberry_girl</div>
                </div>
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Camera className="w-8 h-8 text-purple-400" />
                  </div>
                  <h5 className="text-lg font-light text-white mb-2">Instagram</h5>
                  <div className="text-3xl font-light text-blue-400 mb-1">+567%</div>
                  <div className="text-sm text-gray-500">morning_shed</div>
                </div>
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Play className="w-8 h-8 text-red-400" />
                  </div>
                  <h5 className="text-lg font-light text-white mb-2">YouTube</h5>
                  <div className="text-3xl font-light text-yellow-400 mb-1">+234%</div>
                  <div className="text-sm text-gray-500">korean_skincare</div>
                </div>
              </div>

              {/* 실시간 트렌드 버블 차트 */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">트렌드 관심도 버블 차트</h4>
                <div className="relative h-64 bg-gray-900/50 rounded-lg p-6 overflow-hidden">
                  {/* 배경 그리드 */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-10 grid-rows-8 h-full w-full">
                      {Array.from({ length: 80 }, (_, i) => (
                        <div key={i} className="border border-gray-700 border-opacity-30"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 트렌드 버블들 */}
                  <div className="absolute inset-0">
                    {/* strawberry_girl - 대형 버블 (폭발적 성장) */}
                    <div className="absolute w-20 h-20 rounded-full animate-pulse cursor-pointer transform hover:scale-110 transition-transform duration-300" 
                         style={{ left: '15%', top: '20%' }}>
                      <div className="w-full h-full bg-green-400 rounded-full shadow-lg shadow-green-400/40 flex items-center justify-center">
                        <div className="text-xs font-semibold text-gray-900">strawberry</div>
                      </div>
                      {/* 외부 링 효과 */}
                      <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping opacity-30"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-green-400 font-light">+2,847%</div>
                    </div>
                    
                    {/* morning_shed - 중형 버블 (상승 트렌드) */}
                    <div className="absolute w-14 h-14 rounded-full animate-pulse cursor-pointer transform hover:scale-110 transition-transform duration-300" 
                         style={{ left: '45%', top: '35%', animationDelay: '0.5s' }}>
                      <div className="w-full h-full bg-blue-400 rounded-full shadow-lg shadow-blue-400/30 flex items-center justify-center">
                        <div className="text-xs font-semibold text-gray-900">morning</div>
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-400 font-light">+567%</div>
                    </div>
                    
                    {/* glass_skin - 소형 버블 (하락 트렌드) */}
                    <div className="absolute w-8 h-8 rounded-full cursor-pointer transform hover:scale-110 transition-transform duration-300" 
                         style={{ left: '70%', top: '60%' }}>
                      <div className="w-full h-full bg-red-400 rounded-full shadow-md shadow-red-400/20 flex items-center justify-center opacity-60">
                        <div className="text-xs font-semibold text-gray-900">glass</div>
                      </div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs text-red-400 font-light">-34%</div>
                    </div>
                    
                    {/* clean_girl - 중형 버블 (안정 트렌드) */}
                    <div className="absolute w-12 h-12 rounded-full animate-pulse cursor-pointer transform hover:scale-110 transition-transform duration-300" 
                         style={{ left: '25%', top: '65%', animationDelay: '1s' }}>
                      <div className="w-full h-full bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/25 flex items-center justify-center">
                        <div className="text-xs font-semibold text-gray-900">clean</div>
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-yellow-300 animate-ping opacity-25" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-yellow-400 font-light">+89%</div>
                    </div>
                    
                    {/* korean_skincare - 대형 버블 (급성장) */}
                    <div className="absolute w-16 h-16 rounded-full animate-pulse cursor-pointer transform hover:scale-110 transition-transform duration-300" 
                         style={{ left: '60%', top: '25%', animationDelay: '1.5s' }}>
                      <div className="w-full h-full bg-purple-400 rounded-full shadow-lg shadow-purple-400/35 flex items-center justify-center">
                        <div className="text-xs font-semibold text-gray-900">k-skincare</div>
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-purple-300 animate-ping opacity-30" style={{ animationDelay: '1.5s' }}></div>
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-xs text-purple-400 font-light">+1,234%</div>
                    </div>
                    
                    {/* douyin_makeup - 신규 트렌드 */}
                    <div className="absolute w-10 h-10 rounded-full animate-pulse cursor-pointer transform hover:scale-110 transition-transform duration-300" 
                         style={{ left: '80%', top: '40%', animationDelay: '2s' }}>
                      <div className="w-full h-full bg-pink-400 rounded-full shadow-lg shadow-pink-400/30 flex items-center justify-center">
                        <div className="text-xs font-semibold text-gray-900">douyin</div>
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-pink-300 animate-ping opacity-40" style={{ animationDelay: '2s' }}></div>
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-pink-400 font-light">신규</div>
                    </div>
                    
                    {/* 이동하는 커넥션 라인들 */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      <path
                        d="M 80 60 Q 200 100 240 80"
                        stroke="#10b981"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;-10"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </path>
                      <path
                        d="M 120 160 Q 180 120 280 100"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="3,7"
                        className="animate-pulse"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;-10"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  </div>
                  
                  {/* 축 라벨 */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                    관심도 →
                  </div>
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-500">
                    ↑ 바이럴 점수
                  </div>
                </div>
                
                {/* 버블 차트 범례 */}
                <div className="flex justify-center space-x-6 mt-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-400 rounded-full mr-2 opacity-70"></div>
                    <span className="text-gray-400">폭발적 성장</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-400 rounded-full mr-2 opacity-60"></div>
                    <span className="text-gray-400">상승 트렌드</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2 opacity-40"></div>
                    <span className="text-gray-400">하락 트렌드</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 감정 분석 차트 */}
          {activeChart === 3 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-white text-center mb-12">
                다국어 감정 분석
              </h3>
              
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">표면 vs 실제 감정 분석</h4>
                <div className="space-y-8">
                  {sentimentData.map((item, index) => (
                    <div key={index} className="space-y-4">
                      <h5 className="text-lg font-light text-gray-300">{item.language}</h5>
                      
                      {/* 3단계 감정 분석 */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">표면 긍정</span>
                          <span className="text-green-400">{item.surface}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full transition-all duration-2000"
                            style={{ width: `${item.surface}%` }}
                          ></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">실제 긍정</span>
                          <span className="text-blue-400">{item.real}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div 
                            className="bg-blue-400 h-2 rounded-full transition-all duration-2000"
                            style={{ width: `${item.real}%` }}
                          ></div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">숨은 부정</span>
                          <span className="text-red-400">{item.hidden}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div 
                            className="bg-red-400 h-2 rounded-full transition-all duration-2000"
                            style={{ width: `${item.hidden}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 감정 변화 타임라인 */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">24시간 실시간 감정 변화</h4>
                <div className="relative h-40 bg-gray-900/30 rounded-xl p-4">
                  {/* 배경 그리드 */}
                  <div className="absolute inset-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="absolute w-full border-t border-gray-700 opacity-20"
                        style={{ top: `${i * 25}%` }}
                      ></div>
                    ))}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={`v-${i}`}
                        className="absolute h-full border-l border-gray-700 opacity-20"
                        style={{ left: `${i * 25}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* 감정 곡선 시뮬레이션 */}
                  <svg className="w-full h-full" viewBox="0 0 400 120">
                    <defs>
                      {/* 그라디언트 */}
                      <linearGradient id="positiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="realGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="negativeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
                      </linearGradient>
                    </defs>

                    {/* 영역 채우기 */}
                    <path
                      d="M 0 70 Q 50 25 100 35 Q 150 20 200 50 Q 250 30 300 45 Q 350 25 400 40 L 400 120 L 0 120 Z"
                      fill="url(#positiveGradient)"
                    />
                    <path
                      d="M 0 80 Q 50 55 100 60 Q 150 45 200 65 Q 250 50 300 60 Q 350 45 400 55 L 400 120 L 0 120 Z"
                      fill="url(#realGradient)"
                    />
                    <path
                      d="M 0 90 Q 50 80 100 85 Q 150 75 200 80 Q 250 70 300 75 Q 350 65 400 70 L 400 120 L 0 120 Z"
                      fill="url(#negativeGradient)"
                    />
                    
                    {/* 표면 긍정 곡선 */}
                    <path
                      d="M 0 70 Q 50 25 100 35 Q 150 20 200 50 Q 250 30 300 45 Q 350 25 400 40"
                      stroke="#10b981"
                      strokeWidth="3"
                      fill="none"
                      className="drop-shadow-lg"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,1000;1000,0"
                        dur="4s"
                        begin="0s"
                        fill="freeze"
                      />
                    </path>
                    
                    {/* 실제 긍정 곡선 */}
                    <path
                      d="M 0 80 Q 50 55 100 60 Q 150 45 200 65 Q 250 50 300 60 Q 350 45 400 55"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="none"
                      className="drop-shadow-lg"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,1000;1000,0"
                        dur="4s"
                        begin="1s"
                        fill="freeze"
                      />
                    </path>
                    
                    {/* 숨은 부정 곡선 */}
                    <path
                      d="M 0 90 Q 50 80 100 85 Q 150 75 200 80 Q 250 70 300 75 Q 350 65 400 70"
                      stroke="#ef4444"
                      strokeWidth="2"
                      fill="none"
                      className="drop-shadow-lg opacity-70"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,1000;1000,0"
                        dur="4s"
                        begin="2s"
                        fill="freeze"
                      />
                    </path>
                    
                    {/* 실시간 데이터 포인트들 */}
                    <g className="animate-pulse">
                      <circle cx="100" cy="35" r="4" fill="#10b981" className="drop-shadow-lg" />
                      <circle cx="200" cy="50" r="4" fill="#10b981" className="drop-shadow-lg" />
                      <circle cx="300" cy="45" r="4" fill="#10b981" className="drop-shadow-lg" />
                      
                      <circle cx="100" cy="60" r="3" fill="#3b82f6" className="drop-shadow-lg" />
                      <circle cx="200" cy="65" r="3" fill="#3b82f6" className="drop-shadow-lg" />
                      <circle cx="300" cy="60" r="3" fill="#3b82f6" className="drop-shadow-lg" />
                      
                      <circle cx="100" cy="85" r="2" fill="#ef4444" className="drop-shadow-lg" />
                      <circle cx="200" cy="80" r="2" fill="#ef4444" className="drop-shadow-lg" />
                      <circle cx="300" cy="75" r="2" fill="#ef4444" className="drop-shadow-lg" />
                    </g>
                  </svg>
                  
                  {/* 시간 축 */}
                  <div className="absolute -bottom-6 left-4 right-4 flex justify-between text-xs text-gray-500">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>24:00</span>
                  </div>
                  
                  {/* 현재 시간 표시 */}
                  <div className="absolute top-4 right-4 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                    <span className="text-xs text-green-400 font-light">실시간</span>
                  </div>
                </div>
                
                {/* 범례 및 실시간 데이터 */}
                <div className="flex justify-between items-center mt-6">
                  <div className="flex space-x-6 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-gray-300 font-light">표면 긍정</span>
                      <span className="text-green-400 ml-2">78%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-gray-300 font-light">실제 긍정</span>
                      <span className="text-blue-400 ml-2">42%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-gray-300 font-light">숨은 부정</span>
                      <span className="text-red-400 ml-2">15%</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    마지막 업데이트: 방금 전
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 성장률 분석 차트 */}
          {activeChart === 4 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-white text-center mb-12">
                마케팅 성장률 분석
              </h3>
              
              {/* 월별 성장률 라인 차트 */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">월별 브랜드 성장률</h4>
                <div className="relative h-64 bg-gray-900/50 rounded-lg p-6">
                  {/* Y축 라벨 */}
                  <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-xs text-gray-500">
                    <span>70%</span>
                    <span>50%</span>
                    <span>30%</span>
                    <span>10%</span>
                    <span>0%</span>
                  </div>
                  
                  {/* 그래프 영역 */}
                  <div className="ml-8 h-full relative">
                    {/* 배경 그리드 */}
                    <div className="absolute inset-0">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="absolute w-full border-t border-gray-700 opacity-30"
                          style={{ top: `${i * 25}%` }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* 라인 차트 시뮬레이션 */}
                    <svg className="w-full h-full" viewBox="0 0 300 200">
                      <defs>
                        {/* 그라디언트 정의 */}
                        <linearGradient id="kbeautyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="kfoodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                        </linearGradient>
                        {/* 글로우 효과 */}
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* 영역 채우기 (Area Chart) */}
                      <path
                        d="M 20 170 L 70 155 L 120 135 L 170 110 L 220 85 L 270 55 L 270 200 L 20 200 Z"
                        fill="url(#kbeautyGradient)"
                        className="opacity-40"
                      />
                      <path
                        d="M 20 180 L 70 165 L 120 145 L 170 125 L 220 100 L 270 75 L 270 200 L 20 200 Z"
                        fill="url(#kfoodGradient)"
                        className="opacity-30"
                      />
                      
                      {/* K-뷰티 라인 (초록색) */}
                      <path
                        d="M 20 170 L 70 155 L 120 135 L 170 110 L 220 85 L 270 55"
                        stroke="#10b981"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#glow)"
                        className="animate-pulse"
                        style={{ animationDuration: '3s' }}
                      />
                      {/* K-푸드 라인 (파란색) */}
                      <path
                        d="M 20 180 L 70 165 L 120 145 L 170 125 L 220 100 L 270 75"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#glow)"
                        className="animate-pulse"
                        style={{ animationDuration: '4s' }}
                      />
                      {/* 전통 마케팅 라인 (회색) */}
                      <path
                        d="M 20 185 L 70 182 L 120 179 L 170 176 L 220 173 L 270 170"
                        stroke="#6b7280"
                        strokeWidth="2"
                        fill="none"
                        className="opacity-60"
                      />
                      
                      {/* 데이터 포인트 (향상된) */}
                      {growthData.map((_, index) => (
                        <g key={index}>
                          {/* K-뷰티 포인트 */}
                          <circle 
                            cx={20 + index * 50} 
                            cy={170 - growthData[index].kbeauty * 2.5} 
                            r="6" 
                            fill="#10b981" 
                            className="animate-pulse"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          />
                          <circle 
                            cx={20 + index * 50} 
                            cy={170 - growthData[index].kbeauty * 2.5} 
                            r="3" 
                            fill="#ffffff" 
                            className="animate-pulse"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          />
                          
                          {/* K-푸드 포인트 */}
                          <circle 
                            cx={20 + index * 50} 
                            cy={180 - growthData[index].kfood * 2.5} 
                            r="6" 
                            fill="#3b82f6" 
                            className="animate-pulse"
                            style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                          />
                          <circle 
                            cx={20 + index * 50} 
                            cy={180 - growthData[index].kfood * 2.5} 
                            r="3" 
                            fill="#ffffff" 
                            className="animate-pulse"
                            style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                          />
                          
                          {/* 전통 마케팅 포인트 */}
                          <circle cx={20 + index * 50} cy={185 - growthData[index].traditional * 2.5} r="4" fill="#6b7280" opacity="0.6" />
                          <circle cx={20 + index * 50} cy={185 - growthData[index].traditional * 2.5} r="2" fill="#ffffff" opacity="0.8" />
                        </g>
                      ))}
                    </svg>
                    
                    {/* X축 라벨 */}
                    <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-gray-500">
                      {growthData.map((data) => (
                        <span key={data.month}>{data.month}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 범례 */}
                <div className="flex justify-center space-x-8 mt-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-green-400 mr-2"></div>
                    <span className="text-gray-400">K-뷰티 (+62%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-blue-400 mr-2"></div>
                    <span className="text-gray-400">K-푸드 (+51%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-0.5 bg-gray-400 mr-2"></div>
                    <span className="text-gray-400">전통 마케팅 (+8%)</span>
                  </div>
                </div>
              </div>

              {/* 시장 점유율 및 성장률 */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                  <h4 className="text-xl font-light text-white mb-6">마케팅 방식별 시장 점유율</h4>
                  <div className="space-y-6">
                    {marketShareData.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-light">{item.brand}</span>
                          <div className="text-right">
                            <span className="text-white">{item.share}%</span>
                            <span className={`ml-2 text-sm ${item.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              ({item.growth > 0 ? '+' : ''}{item.growth}%)
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all duration-2000 ${
                              index === 0 ? 'bg-gray-500' :
                              index === 1 ? 'bg-blue-500' :
                              index === 2 ? 'bg-purple-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${item.share}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                  <h4 className="text-xl font-light text-white mb-6">성장률 비교 (6개월)</h4>
                  <div className="space-y-8">
                    {marketShareData.map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-light text-gray-300 mb-2">{item.brand}</div>
                        <div className={`text-4xl font-light mb-2 ${
                          item.growth > 50 ? 'text-green-400' :
                          item.growth > 10 ? 'text-blue-400' :
                          item.growth > 0 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {item.growth > 0 ? '+' : ''}{item.growth}%
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-2000 ${
                              item.growth > 50 ? 'bg-green-400' :
                              item.growth > 10 ? 'bg-blue-400' :
                              item.growth > 0 ? 'bg-yellow-400' : 'bg-red-400'
                            }`}
                            style={{ width: `${Math.abs(item.growth)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 트렌드 예측 */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">AI 기반 성장률 예측 (다음 6개월)</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-b from-green-900/30 to-green-800/10 rounded-xl border border-green-800/30">
                    <h5 className="text-lg font-light text-white mb-2">K-뷰티</h5>
                    <div className="text-3xl font-light text-green-400 mb-2">+127%</div>
                    <div className="text-sm text-gray-400">예상 성장률</div>
                    <div className="mt-4 text-xs text-green-300">
                      • 바이럴 트렌드 급증<br/>
                      • 해외 수요 폭발<br/>
                      • 인플루언서 마케팅 성과
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-blue-900/30 to-blue-800/10 rounded-xl border border-blue-800/30">
                    <h5 className="text-lg font-light text-white mb-2">K-푸드</h5>
                    <div className="text-3xl font-light text-blue-400 mb-2">+89%</div>
                    <div className="text-sm text-gray-400">예상 성장률</div>
                    <div className="mt-4 text-xs text-blue-300">
                      • 할랄 시장 확장<br/>
                      • 건강식품 트렌드<br/>
                      • 현지화 전략 성공
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-purple-800/10 rounded-xl border border-purple-800/30">
                    <h5 className="text-lg font-light text-white mb-2">TrueVoice 클라이언트</h5>
                    <div className="text-3xl font-light text-purple-400 mb-2">+245%</div>
                    <div className="text-sm text-gray-400">예상 성장률</div>
                    <div className="mt-4 text-xs text-purple-300">
                      • AI 마케팅 우위<br/>
                      • 정확한 트렌드 예측<br/>
                      • 높은 ROI 달성
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ROI 최적화 차트 */}
          {activeChart === 5 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-white text-center mb-12">
                ROI 최적화 성과
              </h3>
              
              {/* 기업별 ROI 개선 */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-light text-white mb-6">기업별 ROI 개선 성과</h4>
                <div className="space-y-8">
                  {roiData.map((item, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-light">{item.company}</span>
                        <span className="text-green-400">+{item.improvement}%</span>
                      </div>
                      
                      {/* Before vs After 비교 */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2">도입 전</div>
                          <div className="text-3xl font-light text-red-400">{item.before}%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2">도입 후</div>
                          <div className="text-3xl font-light text-green-400">+{item.after}%</div>
                        </div>
                      </div>
                      
                      {/* 개선도 막대 */}
                      <div className="w-full bg-gray-800 rounded-full h-4">
                        <div 
                          className="bg-gradient-to-r from-red-500 to-green-400 h-4 rounded-full transition-all duration-2000"
                          style={{ width: `${Math.min(item.improvement / 4, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 누적 효과 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8 text-center">
                  <h5 className="text-lg font-light text-white mb-4">총 절약액</h5>
                  <div className="text-4xl font-light text-green-400 mb-2">
                    ₩{animatedValues.roiImprovement}억
                  </div>
                  <div className="text-sm text-gray-500">가짜 인플루언서 차단</div>
                </div>
                
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8 text-center">
                  <h5 className="text-lg font-light text-white mb-4">평균 개선율</h5>
                  <div className="text-4xl font-light text-blue-400 mb-2">+231%</div>
                  <div className="text-sm text-gray-500">ROI 향상</div>
                </div>
                
                <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8 text-center">
                  <h5 className="text-lg font-light text-white mb-4">성공 기업</h5>
                  <div className="text-4xl font-light text-yellow-400 mb-2">87%</div>
                  <div className="text-sm text-gray-500">목표 달성률</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 인사이트 요약 */}
        <div className="mt-20 bg-gray-950/60 border border-gray-800 rounded-3xl p-12 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-light text-white mb-8">핵심 인사이트</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-lg text-gray-400 mb-3 font-light">데이터 기반 의사결정</div>
              <div className="text-sm text-gray-500">
                실시간 분석으로 마케팅 전략을 즉시 조정하여 최적의 ROI를 달성합니다
              </div>
            </div>
            <div>
              <div className="text-lg text-gray-400 mb-3 font-light">예측적 마케팅</div>
              <div className="text-sm text-gray-500">
                트렌드 생명주기를 예측하여 경쟁자보다 빠른 시장 진입을 지원합니다
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}