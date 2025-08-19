'use client';

import { useState } from 'react';
import { DollarSign, Search, TrendingUp, Clock, Target, AlertTriangle } from 'lucide-react';

export default function ROICalculator() {
  const [budget, setBudget] = useState(100000000); // 1억원
  const [influencers, setInfluencers] = useState(10);
  const [currentROI, setCurrentROI] = useState(-57);
  const [optimizedROI, setOptimizedROI] = useState(298);

  const calculateSavings = () => {
    const currentReturn = budget * (currentROI / 100);
    const optimizedReturn = budget * (optimizedROI / 100);
    return optimizedReturn - currentReturn;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6 tracking-tight">
            ROI 계산기
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            현재 마케팅 전략과 TrueVoice 최적화 전략을 비교해보세요
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 입력 섹션 */}
            <div className="bg-gray-950/80 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-light mb-6 flex items-center text-white">
                <Search className="w-6 h-6 text-blue-400 mr-3" />
                캠페인 정보 입력
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    마케팅 예산 (원)
                  </label>
                  <input
                    type="range"
                    min="10000000"
                    max="1000000000"
                    step="10000000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-2xl font-bold text-blue-600 mt-2">
                    {formatCurrency(budget)}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    인플루언서 수
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={influencers}
                    onChange={(e) => setInfluencers(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-xl font-bold text-blue-600 mt-2">
                    {influencers}명
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      현재 ROI (%)
                    </label>
                    <input
                      type="number"
                      value={currentROI}
                      onChange={(e) => setCurrentROI(Number(e.target.value))}
                      className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      예상 최적화 ROI (%)
                    </label>
                    <input
                      type="number"
                      value={optimizedROI}
                      onChange={(e) => setOptimizedROI(Number(e.target.value))}
                      className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 결과 섹션 */}
            <div className="bg-gray-950/80 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-light mb-8 flex items-center text-white tracking-tight">
                <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
                계산 결과
              </h3>
              
              <div className="space-y-6">
                {/* Before/After 비교 */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-900/60 border border-red-900/30 rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-red-400" />
                      </div>
                    </div>
                    <h4 className="font-light text-red-400 mb-3 tracking-tight">현재 전략</h4>
                    <div className="text-4xl font-light text-red-300 mb-2 tracking-tight">
                      {currentROI > 0 ? '+' : ''}{currentROI}%
                    </div>
                    <div className="text-lg font-light text-gray-300 mb-2">
                      {formatCurrency(budget * (currentROI / 100))}
                    </div>
                    <div className="text-sm text-gray-500">
                      전통적 인플루언서 마케팅
                    </div>
                    
                    {/* 문제점 표시 */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-xs text-red-400">
                        <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                        가짜 인플루언서 위험
                      </div>
                      <div className="flex items-center text-xs text-red-400">
                        <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                        트렌드 예측 실패
                      </div>
                      <div className="flex items-center text-xs text-red-400">
                        <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                        문화적 위험
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/60 border border-green-900/30 rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Target className="w-6 h-6 text-green-400" />
                      </div>
                    </div>
                    <h4 className="font-light text-green-400 mb-3 tracking-tight">TrueVoice 최적화</h4>
                    <div className="text-4xl font-light text-green-300 mb-2 tracking-tight">
                      +{optimizedROI}%
                    </div>
                    <div className="text-lg font-light text-gray-300 mb-2">
                      {formatCurrency(budget * (optimizedROI / 100))}
                    </div>
                    <div className="text-sm text-gray-500">
                      AI 기반 트렌드 마케팅
                    </div>
                    
                    {/* 혜택 표시 */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-xs text-green-400">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                        99% 인증된 인플루언서
                      </div>
                      <div className="flex items-center text-xs text-green-400">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                        실시간 트렌드 감지
                      </div>
                      <div className="flex items-center text-xs text-green-400">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                        문화 리스크 차단
                      </div>
                    </div>
                  </div>
                </div>

                {/* 추가 수익 하이라이트 */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h4 className="font-light text-yellow-400 mb-4 text-lg tracking-tight">예상 추가 수익</h4>
                  <div className="text-5xl font-light text-yellow-300 mb-3 tracking-tight">
                    {formatCurrency(calculateSavings())}
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    TrueVoice 도입으로 달성 가능한 추가 수익
                  </div>
                  
                  {/* ROI 개선 시각화 */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>ROI 개선도</span>
                      <span>+{optimizedROI - currentROI}%p</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-green-400 h-3 rounded-full transition-all duration-2000"
                        style={{ width: `${Math.min((optimizedROI - currentROI) / 4, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-light hover:bg-gray-100 transition tracking-tight">
                  무료 상담 받기
                </button>
              </div>
            </div>
          </div>

          {/* 최적화 요인 */}
          <div className="mt-16 bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-center mb-8 flex items-center justify-center text-white">
              <Target className="w-6 h-6 text-blue-400 mr-3" />
              TrueVoice 최적화 요인
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Search className="w-10 h-10 text-blue-400" />
                </div>
                <h4 className="font-light text-white mb-2">가짜 인플루언서 제거</h4>
                <div className="text-sm text-gray-400">
                  88% 가짜 팔로워 제거로<br />
                  <span className="font-semibold text-green-400">₩38,000,000 절약</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="w-10 h-10 text-green-400" />
                </div>
                <h4 className="font-light text-white mb-2">트렌드 정확도</h4>
                <div className="text-sm text-gray-400">
                  48시간 내 트렌드 감지로<br />
                  <span className="font-semibold text-green-400">+567% 도달률</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Target className="w-10 h-10 text-yellow-400" />
                </div>
                <h4 className="font-light text-white mb-2">타겟팅 정확도</h4>
                <div className="text-sm text-gray-400">
                  마이크로 인플루언서 활용으로<br />
                  <span className="font-semibold text-green-400">3배 전환율</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Clock className="w-10 h-10 text-purple-400" />
                </div>
                <h4 className="font-light text-white mb-2">타이밍 최적화</h4>
                <div className="text-sm text-gray-400">
                  완벽한 진입 타이밍으로<br />
                  <span className="font-semibold text-green-400">+45% 전환율</span>
                </div>
              </div>
            </div>
          </div>

          {/* 성공 사례 */}
          <div className="mt-16">
            <h3 className="text-2xl font-light text-center mb-8 flex items-center justify-center text-white">
              <Target className="w-6 h-6 text-green-400 mr-3" />
              실제 성공 사례
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">D뷰티 브랜드 (미국 진출)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>투자 예산:</span>
                    <span className="font-semibold">₩200,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>기존 ROI:</span>
                    <span className="font-semibold text-red-300">-45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>최적화 후:</span>
                    <span className="font-semibold text-green-300">+567%</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 mt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>총 수익 증가:</span>
                      <span className="text-yellow-300">₩1,224,000,000</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">K-푸드 브랜드 (동남아)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>투자 예산:</span>
                    <span className="font-semibold">₩150,000,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>위기 상황:</span>
                    <span className="font-semibold text-red-300">철수 위기</span>
                  </div>
                  <div className="flex justify-between">
                    <span>대응 후:</span>
                    <span className="font-semibold text-green-300">+40% 성장</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 mt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>손실 방지 + 성장:</span>
                      <span className="text-yellow-300">₩560,000,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}