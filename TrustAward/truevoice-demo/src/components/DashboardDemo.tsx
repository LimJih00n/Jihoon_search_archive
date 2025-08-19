'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, TrendingUp, Eye } from 'lucide-react';

export default function DashboardDemo() {
  const [currentTrend, setCurrentTrend] = useState(0);
  
  const trends = [
    { name: "strawberry_girl", growth: "+2,847%", fit: 95, action: "즉시 진입" },
    { name: "morning_shed", growth: "+567%", fit: 88, action: "준비 중" },
    { name: "glass_skin", growth: "-34%", fit: 23, action: "진입 금지" }
  ];

  const alerts = [
    {
      type: "CRITICAL",
      message: "strawberry_girl 트렌드 폭발 - 24시간 내 대응 필요",
      impact: "+₩125,000,000"
    },
    {
      type: "HIGH", 
      message: "@beautyguru (100만 팔로워) 85% 가짜 감지",
      impact: "₩45,000,000 절약"
    },
    {
      type: "MEDIUM",
      message: "인도네시아 할랄 규제 업데이트",
      impact: "위험 방지"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrend((prev) => (prev + 1) % trends.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6 tracking-tight">
            실시간 Command Center
          </h2>
          <p className="text-xl text-gray-400 font-light">
            24/7 AI 모니터링으로 기회는 놓치지 않고, 위기는 미리 방지합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* 긴급 알림 */}
          <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-light mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 text-red-400 mr-3" />
              긴급 알림
              <span className="ml-3 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </h3>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border-l-2 ${
                    alert.type === 'CRITICAL' ? 'bg-red-950/30 border-red-500' :
                    alert.type === 'HIGH' ? 'bg-orange-950/30 border-orange-500' :
                    'bg-yellow-950/30 border-yellow-500'
                  }`}
                >
                  <div className="font-light text-white">{alert.message}</div>
                  <div className="text-sm text-gray-400 mt-2">{alert.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 트렌드 스코어보드 */}
          <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-light mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
              트렌드 스코어보드
            </h3>
            <div className="space-y-4">
              {trends.map((trend, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    index === currentTrend ? 'bg-gray-800 border border-gray-700' : 'bg-gray-900/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-white">#{trend.name}</div>
                      <div className="text-sm text-gray-400 mt-1">성장률: {trend.growth}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-light text-white">적합도: {trend.fit}%</div>
                      <div className="text-sm text-gray-400 mt-1">{trend.action}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 실시간 메트릭 */}
        <div className="bg-gray-950/60 border border-gray-800 rounded-3xl p-12 max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-light mb-8 text-center">실시간 ROI 시뮬레이터</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-lg text-gray-400 mb-3 font-light">현재 전략</div>
              <div className="text-5xl font-light text-red-400 mb-3">-57%</div>
              <div className="text-sm text-gray-500">전통적 인플루언서 마케팅</div>
            </div>
            <div className="text-center">
              <div className="text-lg text-gray-400 mb-3 font-light">TrueVoice 최적화</div>
              <div className="text-5xl font-light text-green-400 mb-3">+298%</div>
              <div className="text-sm text-gray-500">AI 기반 트렌드 마케팅</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <div className="text-xl font-light text-white">
              예상 추가 수익: ₩244,000,000
            </div>
          </div>
        </div>

        {/* 경쟁사 모니터링 */}
        <div className="bg-gray-950/80 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-light mb-6 text-center flex items-center justify-center">
            <Eye className="w-6 h-6 text-blue-400 mr-3" />
            경쟁사 움직임
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-gray-900/50 rounded-xl">
              <div className="font-medium text-white">Innisfree</div>
              <div className="text-sm text-gray-400 mt-2">strawberry_girl 캠페인 준비 중</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl">
              <div className="font-medium text-white">Beauty of Joseon</div>
              <div className="text-sm text-gray-400 mt-2">Sephora 입점 확정</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl">
              <div className="font-medium text-white">COSRX</div>
              <div className="text-sm text-gray-400 mt-2">TikTok creator fund 파트너십</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}