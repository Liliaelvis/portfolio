import { PolaroidPhoto } from "@/components/Landing/PolaroidPhoto";
import { SectionWrapper } from "@/components/Landing/SectionWrapper";

const HeroText = {
  title: `Project & Operations Manager | Strategy-Oriented Project Lead`,
  whoAmI: `Hi, I’m Lilia, a Project & Operations Manager who thrives at the intersection of technology, business, and human coordination.`,
  whatIDo: `I turn complex, chaotic projects into clear, actionable systems that deliver results. With a background in biomedical engineering, tech entrepreneurship, and property operations, I bring both technical precision and real-world pragmatism to every challenge I manage.`,
  myApproach: `Over the years, I’ve led multi-disciplinary teams, coordinated vendors across continents, and handled high-pressure incidents with calm, data-driven decisions. My focus is always on impact — optimizing operations, improving client satisfaction, and protecting brand reputation through clear structure and accountability.`,
  myValues: `I’m known for being direct, analytical, and relentlessly curious — the kind of professional who challenges assumptions, asks hard questions, and builds solutions that actually work.`,
  callToAction: `Let’s build something that runs smoother, scales smarter, and stands stronger.`,
}
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <SectionWrapper className="relative bg-amber-100 dark:bg-amber-900 -mt-26 pt-30 text-gray-900 dark:text-gray-100">
        <div className="flex flex-col px-4 pb-4">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0">
            <div className="grid grid-cols-1 gap-2">
              <h1 className="text-xl md:text-6xl font-bold mb-4">
                {HeroText.title}
              </h1>
              <div className="md:hidden pb-2">
                <PolaroidPhoto />
              </div>
              <p className="text-lg">
                {HeroText.whoAmI}
              </p>
              <p className="text-lg">
                {HeroText.whatIDo}
              </p>
              <p className="text-lg">
                {HeroText.myValues}
              </p>
              <p className="text-lg md:text-xl font-bold">
                {HeroText.callToAction}
              </p>
            </div>
            <div className="relative md:justify-end mt-8 hidden md:flex">
              <PolaroidPhoto />
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="p-2 pb-8 bg-amber-100 dark:bg-amber-900">
        {/* My Approach section */}
        <div className="max-w-184 text-wrap mx-auto hover:-skew-y-1 from-amber-400 to-amber-500 bg-linear-to-br text-shadow-lg p-8 rounded-lg flex-justify-center shadow-xl/30 inset-shadow-amber-800/50">
          <p className="text-lg md:text-xl font-bold">
            {HeroText.myApproach}
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
