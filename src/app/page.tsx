import { SectionWrapper } from "@/components/Landing/SectionWrapper";

const HeroText = {
  title: `Project Coordinator & Strategist`,
  whoAmI: `Hi, I’m Lilia, a Project Manager and Operations Strategist who thrives at the intersection of technology, business, and human coordination.`,
  whatIDo: `I turn complex, chaotic projects into clear, actionable systems that deliver results. With a background in biomedical engineering, tech entrepreneurship, and property operations, I bring both technical precision and real-world pragmatism to every challenge I manage.`,
  myApproach: `Over the years, I’ve led multi-disciplinary teams, coordinated vendors across continents, and handled high-pressure incidents with calm, data-driven decisions. My focus is always on impact — optimizing operations, improving client satisfaction, and protecting brand reputation through clear structure and accountability.`,
  myValues: `I’m known for being direct, analytical, and relentlessly curious — the kind of professional who challenges assumptions, asks hard questions, and builds solutions that actually work.`,
  callToAction: `Let’s build something that runs smoother, scales smarter, and stands stronger.`,
}
export default function Home() {
  return (
    <div className="min-h-dvh">
      {/* Hero Section */}
      <SectionWrapper className="bg-amber-100 dark:bg-amber-900 -mt-26 pt-26 text-gray-900 dark:text-gray-100">
        <div className="min-h-[60vh] flex flex-col justify-center items-start py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {HeroText.title}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {HeroText.whoAmI}
          </p>
          <p className="text-lg md:text-xl mb-8">
            {HeroText.whatIDo}
          </p>
          <p className="text-lg md:text-xl mb-8">
            {HeroText.myApproach}
          </p>
          <p className="text-lg md:text-xl mb-8">
            {HeroText.myValues}
          </p>
          <p className="text-lg md:text-xl mb-8 font-bold">
            {HeroText.callToAction}
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
