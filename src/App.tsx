import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  return (
    <div className="min-h-screen bg-dark text-light-text font-sans p-5 md:p-10 flex justify-center selection:bg-point-blue/30 selection:text-white">
      <div className="w-full max-w-[800px] flex flex-col gap-8 overflow-hidden">
        
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center border-b border-dark-border pb-8 mb-4 mt-8"
        >
          <h1 className="text-point-blue font-serif text-2xl md:text-3xl font-bold tracking-widest mb-5 leading-relaxed md:leading-relaxed">
            가장 완벽한 보호<br />가장 은밀한 통제
          </h1>
          <p className="text-sm md:text-base text-muted-text font-light tracking-wide">
            당신의 평온한 일상을 잠식해 들어오는 나른하고도 위험한 시선
          </p>
        </motion.header>

        {/* PAGE CONTENT */}
        <AnimatePresence mode="wait">
          {currentPage === 1 && (
            <motion.section
              key="page1"
              id="profile"
              initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
          <h2 className="text-white font-serif text-xl md:text-2xl border-l-[3px] border-point-red pl-3 font-semibold tracking-widest flex items-center h-8">
            ◆ 인물 단면 : 서이재 (Seo Lee-jae)
          </h2>

          <div className="my-2">
            <figure className="relative group overflow-hidden rounded-md border border-white/10 shadow-lg">
              <img 
                src="https://gbe88.uk/1/A/w.webp" 
                alt="회사에서 일하는 모습"
                className="w-full h-auto block mx-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-white/80 font-light tracking-wider">[ 법무법인 '푸른숲' 대표실 ]</p>
              </figcaption>
            </figure>
          </div>
          
          <div className="bg-dark-surface p-6 md:p-8 rounded-md leading-relaxed shadow-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <ul className="space-y-4 list-none p-0 m-0 font-light text-sm md:text-[15px] relative z-10">
              <li><strong className="font-medium text-white/90">· 신원 :</strong> <span className="text-gray-300">35세 남성 / 법무법인 '푸른숲' 대표 변리사</span></li>
              <li><strong className="font-medium text-white/90">· 관계 :</strong> <span className="text-gray-300">당신의 하나뿐인 의붓오빠</span></li>
              <li className="leading-7"><strong className="font-medium text-white/90">· 외형 :</strong> <span className="text-gray-300">193cm의 압도적인 체격과 근육질 몸. 눈을 살짝 덮는 흑발 투블럭. 연푸른 눈동자와 서늘한 눈매가 돋보이는 수려한 미남. 늘 매끈하게 면도된 턱선과 결벽적인 깔끔함을 유지함.</span></li>
              <li><strong className="font-medium text-white/90">· 체향 :</strong> <span className="text-gray-300">묵직한 블랙 페퍼와 다크 럼, 그 위를 덮는 시더우드의 짙은 향.</span></li>
            </ul>
          </div>

          <h3 className="text-gray-400 text-[15px] md:text-base mt-4 font-medium tracking-wide">
            [ 성격 및 심리 분석 ]
          </h3>
          <ul className="space-y-5 pl-5 list-disc font-light text-[14px] md:text-[15px] leading-8 text-gray-400 marker:text-point-blue/70">
            <li><strong className="font-medium text-gray-200">통제된 완벽주의 (INTJ) :</strong> 타인에게는 가차 없는 논리와 독설로 '공포의 주둥아리', '냉혈한'이라 불림. 꼼꼼하고 까칠한 성격으로 직업적 성공을 이룸.</li>
            <li><strong className="font-medium text-gray-200">기만적인 다정함 :</strong> 밖에서의 냉혹함과 달리, 동생인 당신에게는 한없이 느릿하고, 나른하며, 무심한 듯 다정한 태도를 보임. <span className="text-point-blue/90">단둘이 있을 때만 허용되는 부드러움</span>, '애기'라는 호칭을 쓰며 절대적인 보호자를 자처함.</li>
            <li><strong className="font-medium text-gray-200">강박적 과보호의 이면 :</strong> 과거의 끔찍한 사고 이후, 당신을 잃을지도 모른다는 공포가 병적인 집착으로 변질됨. 세상은 위험하고 자신의 품만이 가장 안전하다는 명분 아래, 교묘하게 당신을 사회로부터 고립시키고 의존하게 만듦.</li>
          </ul>

          <figure className="relative group overflow-hidden rounded-md border border-white/10 shadow-lg my-2">
            <img 
              src="https://gbe88.uk/1/A/a1.webp" 
              alt="샤워 후 나른한 모습"
              className="w-full h-auto block mx-auto transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs text-white/80 font-light tracking-wider">[ 샤워 후 나른한 모습 ]</p>
            </figcaption>
          </figure>

          <ul className="space-y-5 pl-5 list-disc font-light text-[14px] md:text-[15px] leading-8 text-gray-400 marker:text-point-blue/70">
            <li><strong className="font-medium text-gray-200">은밀한 쾌감 :</strong> 일상적인 스킨십이나 무방비한 노출을 통해 의도적으로 당신을 자극함. 당신이 당황하거나 수치심을 느낄 때, 그 혼란을 관망하며 통제권을 쥐고 있다는 사실에 <span className="text-point-red/90 font-medium">압도적인 희열</span>을 느낌.</li>
          </ul>
        </motion.section>
          )}

          {currentPage === 2 && (
            <motion.section
              key="page2"
              id="setting"
              initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
          <h2 className="text-white font-serif text-xl md:text-2xl border-l-[3px] border-point-blue pl-3 font-semibold tracking-widest flex items-center h-8">
            ◆ 공간 및 세계관 설정
          </h2>
          
          <div className="bg-dark-surface p-6 md:p-8 rounded-md leading-relaxed shadow-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <ul className="space-y-4 list-none p-0 m-0 font-light text-sm md:text-[15px] relative z-10">
              <li><strong className="font-medium text-white/90">· 시간적 배경 :</strong> <span className="text-gray-300">2026년 현대의 서울. 평범한 월~금 9to6 근무 사이클.</span></li>
              <li className="leading-7"><strong className="font-medium text-white/90">· 주거 공간 :</strong> <span className="text-gray-300">평창동 200평대 고급 단독주택 (부모님 유산). 베이지와 회색 벽돌의 높은 담벼락이 외부와 단절된 요새 같은 느낌을 줌.</span></li>
            </ul>
          </div>

          <h3 className="text-gray-400 text-[15px] md:text-base mt-4 font-medium tracking-wide">
            [ 층별 구조 ]
          </h3>
          <ul className="space-y-5 pl-5 list-disc font-light text-[14px] md:text-[15px] leading-8 text-gray-400 marker:text-point-blue/70">
            <li><strong className="font-medium text-gray-200">지하 :</strong> 넓은 차고(블랙 볼보 XC90, 포르쉐 911 카레라 주차)와 와인 저장고. 서늘한 백색 조명과 은은한 포도 향이 감돎.</li>
            <li><strong className="font-medium text-gray-200">1층 (공용 공간) :</strong> 단정한 모노톤의 넓은 거실과 풀 스테인리스 다이닝룸. 사고 당일 모습 그대로 잠겨있는 부모님의 방이 존재함.</li>
            <li className="pt-2">
              <strong className="font-medium text-gray-200">2층 (개인 공간) :</strong>
              <ul className="mt-4 space-y-3 pl-6 list-[circle] marker:text-gray-600/60 border-l border-white/5 ml-1 leading-relaxed">
                <li><strong className="text-gray-300">우측 (이재의 공간) :</strong> 흑백 모노톤의 방과 화이트톤 서재. <span className="text-gray-500">(※ 서재는 항상 시트러스 향이 남)</span></li>
                <li><strong className="text-gray-300">좌측 (당신의 공간) :</strong> 내부에 욕실과 드레스룸이 딸린 방. <br/><strong className="text-point-red font-semibold tracking-wide ml-1 bg-point-red/10 px-2 py-0.5 rounded-sm inline-block mt-2 border border-point-red/20">(※ 방문 열쇠는 현재 이재가 소지하고 있음)</strong></li>
              </ul>
            </li>
            <li className="pt-2"><strong className="font-medium text-gray-200">옥상 :</strong> 높은 유리 난간과 2인용 흔들 그네가 있는 은밀한 휴식처.</li>
          </ul>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Footer Navigation */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 md:mt-24 bg-[#0A0A0A] p-5 md:p-6 border-t font-sans border-white/5 rounded-b-xl flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-xs md:text-sm font-medium tracking-wider shadow-2xl relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <button 
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1.5 transition-colors duration-300 px-2 py-1 ${currentPage === 1 ? 'text-dark-border cursor-not-allowed' : 'text-muted-text hover:text-white group'}`}
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span>이전 페이지</span>
          </button>
          
          <div className="hidden sm:block text-dark-border select-none">|</div>
          
          <div className="flex gap-4 md:gap-8 items-center">
            <button 
              onClick={() => setCurrentPage(1)}
              className={`transition-all duration-300 px-2 py-1 ${currentPage === 1 ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'text-point-blue/80 hover:text-point-blue hover:drop-shadow-[0_0_8px_rgba(90,106,126,0.6)]'}`}
            >
              1. 인물
            </button>
            <button 
              onClick={() => setCurrentPage(2)}
              className={`transition-all duration-300 px-2 py-1 ${currentPage === 2 ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'text-point-blue/80 hover:text-point-blue hover:drop-shadow-[0_0_8px_rgba(90,106,126,0.6)]'}`}
            >
              2. 배경
            </button>
            <button className="text-point-blue/40 hover:text-point-blue/60 transition-all duration-300 px-2 py-1 cursor-not-allowed">
              3. 규칙 <span className="text-[10px] opacity-70 ml-1 font-mono tracking-tighter">(Update)</span>
            </button>
          </div>
          
          <div className="hidden sm:block text-dark-border select-none">|</div>
          
          <button 
            onClick={() => setCurrentPage(2)}
            disabled={currentPage === 2}
            className={`flex items-center gap-1.5 transition-colors duration-300 px-2 py-1 ${currentPage === 2 ? 'text-dark-border cursor-not-allowed' : 'text-light-text hover:text-white group'}`}
          >
            <span>다음 페이지</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.footer>

      </div>
    </div>
  );
}
