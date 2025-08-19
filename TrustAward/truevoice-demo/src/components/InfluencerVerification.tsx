'use client';

import { useState } from 'react';

export default function InfluencerVerification() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const influencerData = {
    handle: "@beautyguru_official",
    followers: "1,000,000",
    realFollowers: "120,000",
    fakePercentage: 88,
    geography: {
      target: 12,
      india: 45,
      brazil: 20,
      others: 23
    },
    authenticity: {
      score: 23,
      riskLevel: "HIGH",
      recommendation: "REJECT"
    },
    campaignHistory: {
      successRate: 12,
      avgROI: -67,
      scandals: ["Fake review 2023", "Racist comment 2022"]
    }
  };

  return (
    <div className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6 tracking-tight">
            인플루언서 진정성 검증
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            AI가 1초만에 가짜 팔로워를 감지하고 진짜 영향력을 분석합니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-light text-white mb-8 text-center">
              인플루언서 분석 데모
            </h3>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input 
                type="text" 
                placeholder="인플루언서 핸들 입력 (예: @beautyguru_official)"
                className="flex-1 p-4 bg-gray-800 border border-gray-700 rounded-xl text-lg text-white placeholder-gray-400"
                defaultValue="@beautyguru_official"
              />
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 disabled:opacity-50"
              >
                {isAnalyzing ? "분석 중..." : "분석 시작"}
              </button>
            </div>

            {isAnalyzing && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                <div className="space-y-2 text-gray-400">
                  <div>팔로워 지역 분석 중...</div>
                  <div>봇 패턴 감지 중...</div>
                  <div>과거 캠페인 검토 중...</div>
                </div>
              </div>
            )}

            {showResults && !isAnalyzing && (
              <div className="space-y-6">
                {/* 위험 경고 */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">⚠️</span>
                    <span className="text-xl font-bold text-red-700">HIGH RISK</span>
                  </div>
                  <p className="text-red-600 font-semibold">권고사항: 계약 취소 (절약액: ₩45,000,000)</p>
                </div>

                {/* 기본 정보 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">팔로워 분석</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>총 팔로워</span>
                        <span className="font-semibold">{influencerData.followers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>실제 팔로워</span>
                        <span className="font-semibold text-green-600">{influencerData.realFollowers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>가짜 비율</span>
                        <span className="font-semibold text-red-600">{influencerData.fakePercentage}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">지역 분포</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>타겟 시장 (미국)</span>
                        <span className="font-semibold text-red-600">{influencerData.geography.target}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>인도 (봇 농장)</span>
                        <span className="font-semibold">{influencerData.geography.india}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>브라질</span>
                        <span className="font-semibold">{influencerData.geography.brazil}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>기타</span>
                        <span className="font-semibold">{influencerData.geography.others}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 과거 성과 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-4">과거 캠페인 성과</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{influencerData.campaignHistory.successRate}%</div>
                      <div className="text-sm text-gray-600">성공률</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{influencerData.campaignHistory.avgROI}%</div>
                      <div className="text-sm text-gray-600">평균 ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{influencerData.campaignHistory.scandals.length}</div>
                      <div className="text-sm text-gray-600">스캔들 횟수</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-semibold mb-2">문제 이력:</h5>
                    <ul className="space-y-1">
                      {influencerData.campaignHistory.scandals.map((scandal, index) => (
                        <li key={index} className="text-sm text-red-600">• {scandal}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 대안 제안 */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-4 text-green-700">💡 추천 대안</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div>
                        <div className="font-semibold">@microblogger1</div>
                        <div className="text-sm text-gray-600">5K 팔로워 • 8% 전환율</div>
                      </div>
                      <div className="text-green-600 font-semibold">추천</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div>
                        <div className="font-semibold">@skincarebydrx</div>
                        <div className="text-sm text-gray-600">의료 전문가 • 높은 신뢰도</div>
                      </div>
                      <div className="text-green-600 font-semibold">추천</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 통계 */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-3xl font-bold text-red-600">₩1.7조</div>
              <div className="text-gray-600 mt-2">연간 글로벌 가짜 인플루언서 손실</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-3xl font-bold text-orange-600">55%</div>
              <div className="text-gray-600 mt-2">K-뷰티 인플루언서 가짜 팔로워 비율</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="text-3xl font-bold text-green-600">99%</div>
              <div className="text-gray-600 mt-2">TrueVoice 검증 정확도</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}