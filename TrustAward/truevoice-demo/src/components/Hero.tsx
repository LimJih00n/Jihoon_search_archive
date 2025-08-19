export default function Hero() {
  return (
    <div className="bg-black text-white py-32">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-6xl font-light mb-8 tracking-tight">
            TrueVoice
          </h1>
          <p className="text-2xl mb-6 font-thin text-gray-300">
            K-Brand 글로벌 진출 AI 인텔리전스 플랫폼
          </p>
          <p className="text-lg mb-16 max-w-2xl mx-auto text-gray-400 font-light">
            시끄러운 가짜가 아닌, 조용한 진짜의 목소리로 K-Brand를 세계로
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl font-light text-red-400 mb-2">70%</div>
              <p className="text-gray-400 font-light">K-Brand 해외 진출 실패율</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl font-light text-orange-400 mb-2">₩20억</div>
              <p className="text-gray-400 font-light">기업당 평균 손실</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl font-light text-green-400 mb-2">85%</div>
              <p className="text-gray-400 font-light">TrueVoice 성공률</p>
            </div>
          </div>

          <div className="mt-16 space-x-4">
            <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition">
              무료 진단 받기
            </button>
            <button className="border border-gray-700 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition">
              데모 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}