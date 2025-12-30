import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('/hero_background_korean_abstract.png')] bg-cover bg-center opacity-40" />

        <div className="text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-point-teal uppercase">
            Master of Arts in Cultural Contents
          </p>
          <h1 className="mb-6 text-6xl font-bold leading-tight md:text-8xl">
            가장 한국적인,<br />
            가장 현대적인
          </h1>
          <p className="max-w-xl mx-auto text-lg leading-relaxed text-zinc-600">
            전통의 가치를 동시대의 언어로 재해석하는 <br />
            문화컨텐츠 기획자 <strong>한수연</strong>입니다.
          </p>
        </div>

        <div className="absolute bottom-12 animate-bounce">
          <div className="h-12 w-[1px] bg-foreground/30" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">
            <span className="block text-sm font-medium text-point-pink mb-2">About me</span>
            경계를 허무는 <br />콘텐츠의 힘
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              석사 과정에서 전통 문화의 디지털 아카이빙과 현대적 변용에 대해 연구했습니다.
              단순한 기록을 넘어, 사람들이 공감하고 향유할 수 있는 '살아있는 콘텐츠'를 만드는 것에 집중합니다.
            </p>
            <p>
              박물관, 전시, 지역 축제 등 다양한 문화 현장에서 얻은 경험을 바탕으로
              사용자 중심의 스토리텔링과 세련된 비주얼을 기획합니다.
            </p>
          </div>

          <div className="pt-4">
            <ul className="grid grid-cols-2 gap-4 border-t border-accent/20 pt-8 text-sm">
              <li>
                <span className="block text-accent font-bold mb-1">Education</span>
                OO대학교 문화컨텐츠학 석사
              </li>
              <li>
                <span className="block text-accent font-bold mb-1">Focus</span>
                Traditional Arts, Digital Storytelling
              </li>
            </ul>
          </div>
        </div>

        <div className="relative aspect-[3/4] bg-accent/10 rounded-2xl overflow-hidden border border-accent/20">
          <div className="absolute inset-0 flex items-center justify-center text-zinc-400 italic">
            [Profile Image or Symbolic Abstract Graphic]
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="bg-zinc-100/50">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            <span className="block text-sm font-medium text-point-teal mb-2">Research</span>
            학문적 토대
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "전통 문화 아카이빙", desc: "고문헌 및 유물을 디지털 콘텐츠로 변환하는 방법론 연구" },
            { title: "디지털 스토리텔링", desc: "뉴미디어를 활용한 역사적 서사의 현대적 재구성" },
            { title: "박물관 전시 기획", desc: "관람객 경험 기반의 효율적인 전시 동선 및 콘텐츠 배치" },
          ].map((item, i) => (
            <div key={i} className="group p-8 bg-white border border-accent/10 hover:border-accent/40 transition-all">
              <span className="block text-accent font-serif text-2xl mb-4">0{i + 1}</span>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-4xl font-bold">
            <span className="block text-sm font-medium text-point-pink mb-2">Portfolio</span>
            기획의 실천
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { category: "Exhibition", title: "전통 문양의 현대적 변용 전시", image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&q=80&w=800" },
            { category: "Digital Archiving", title: "지역 무형문화재 디지털 기록 프로젝트", image: "https://images.unsplash.com/photo-1541462608141-ad4d4f9d3f92?auto=format&fit=crop&q=80&w=800" },
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/10] bg-zinc-200 overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs font-medium text-accent mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold group-hover:text-point-teal transition-colors">{project.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section & Footer */}
      <footer className="bg-foreground text-background py-20">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-serif mb-6 italic opacity-50">Sooyeon</h2>
            <p className="text-zinc-400 max-w-sm">
              새로운 영감을 나누는 일에 언제나 열려 있습니다. <br />
              함께 가치 있는 콘텐츠를 만들어가길 기대합니다.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-right">
              <span className="block text-xs text-zinc-500 uppercase tracking-widest mb-1">Email</span>
              <a href="mailto:hello@sooyeon.com" className="text-2xl hover:text-point-teal transition-colors">hello@sooyeon.com</a>
            </div>
            <div className="text-right">
              <span className="block text-xs text-zinc-500 uppercase tracking-widest mb-1">Phone</span>
              <p className="text-2xl">+82 (0)10 1234 5678</p>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-[10px] text-zinc-600 tracking-widest uppercase">
          © 2025 Sooyeon Han. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}

