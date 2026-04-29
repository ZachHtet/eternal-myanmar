"use client";

import Navigation from "./components/Navigation";
import {
  AnimatedText,
  AnimatedImage,
  AnimatedVideo,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HeroImage
} from "./components/animations";

export default function Home() {
  return (
    <div className="bg-white min-h-screen max-w-[1920px] mx-auto relative">
      {/* Navigation */}
      <Navigation />

      {/* Main content wrapper - changes based on screen size */}
      <div className="min-[1280px]:ml-[250px]">
        {/* Hero Section */}
        <div className="relative w-full h-[540px] overflow-hidden">
          <HeroImage
            alt="Eternal Logo on gradient background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="/images/Hero.jpg"
          />
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-start w-full">
          {/* Intro Section */}
          <section className="border-l border-solid border-[rgba(0,0,0,0.1)] flex flex-col items-start pb-[120px] pt-[32px] px-[32px] w-full">
            <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
              <FadeIn className="flex flex-col justify-center w-full md:w-[419px]" delay={0.1}>
                <h1>Brand Guidelines</h1>
              </FadeIn>
              <FadeIn className="flex-1 flex flex-col justify-center paragraph text-black" delay={0.2}>
                <p className="leading-[1.2] mb-0">
                  This brand guide provides a clear framework for maintaining the integrity and consistency of the <span className="font-bold">Eternal brand identity</span>. It outlines how the logo should be applied across different contexts to ensure a cohesive and professional brand presence.
                </p>
                <p className="leading-[1.2] mb-0">&nbsp;</p>
                <p className="leading-[1.2] font-bold">
                  Following these guidelines helps Eternal remain clear, recognizable, and consistent across all touchpoints.
                </p>
              </FadeIn>
            </div>
          </section>

          {/* Table of Contents */}
          <section
            aria-label="Table of contents"
            className="border-l border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col md:flex-row gap-[32px] items-start pb-[120px] pt-[32px] px-[32px] w-full"
          >
            <FadeIn className="w-full md:flex-1 flex flex-col tracking-[-1.2px] justify-center">
              <h2>Contents</h2>
            </FadeIn>
            <StaggerContainer className="w-full md:flex-1 flex flex-col gap-[10px] items-start p-0 list-none" staggerDelay={0.08}>
              {[
                { num: "01", title: "About The Brand" },
                { num: "02", title: "Brand Logo" },
                { num: "03", title: "Brand Colors" },
                { num: "04", title: "Typography" },
                { num: "05", title: "Visual Style" },
                { num: "06", title: "Brand Collaterals" }
              ].map((item) => (
                <StaggerItem key={item.num} className="flex items-center gap-[8px] w-full">
                  <span className="font-medium text-[30px] tracking-[-0.2px] leading-[1.2] text-[#575757]">
                    {item.num}
                  </span>
                  <span className="font-medium text-[30px] tracking-[-0.3px] leading-[1.2] text-black">
                    {item.title}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* About The Brand Section */}
          <section id="section-01" className="border-l border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] items-start pb-[120px] pt-[32px] px-[32px] w-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
              <FadeIn className="w-full md:flex-1 flex items-end">
                <h1 className="max-w-lg[300px]">
                  <span className="text-[#18ae54]">01.</span>
                  <span> About The Brand</span>
                </h1>
              </FadeIn>
              <div className="w-full md:flex-1 flex flex-col gap-[32px] items-start">
                <FadeIn className="flex flex-col gap-[8px] items-start w-full" delay={0.1}>
                  <h2 className="mb-0">
                    Think Apple. Think Eternal.
                  </h2>
                  <p className="paragraph text-[#575757] mb-0">
                    Built on trust, quality, and care, Eternal is where premium Apple products meet real value. With curated MacBooks, honest pricing, and a clean, modern vibe, it&apos;s a go-to for creators, students, and savvy buyers alike.
                  </p>
                  <p className="paragraph text-[#575757] mb-0">&nbsp;</p>
                  <p className="paragraph text-[#575757]">
                    Whether upgrading your setup or buying your first Mac, Eternal makes it simple, secure, and seamless.
                  </p>
                </FadeIn>
                <FadeIn className="h-[400px] w-full relative" delay={0.2}>
                  <AnimatedVideo
                    src="/images/Brand-Values.mp4"
                    ariaLabel="Brand values video"
                    className="absolute w-full h-full object-cover"
                  />
                </FadeIn>
                <FadeIn className="flex flex-col items-start w-full" delay={0.3}>
                  <p className="paragraph text-[#575757]">
                    Eternal operates in the tech resale space, combining affordability with premium quality. It&apos;s positioned as a trustworthy source for MacBooks at fair prices, appealing to customers who seek value without compromising quality. The brand strives to deliver a premium buying experience, despite being in the second-hand space.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Our Values */}
            <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col md:flex-row gap-[32px] items-start py-[32px] w-full">
              <FadeIn className="w-full md:flex-1 flex items-center">
                <h3>
                  Our Values
                </h3>
              </FadeIn>
              <StaggerContainer className="w-full md:flex-1 flex flex-col gap-[40px] items-start" staggerDelay={0.1}>
                {[
                  {
                    title: "Strict Curation",
                    desc: "Every device is hand-picked and rigorously tested to ensure a flawless, premium experience."
                  },
                  {
                    title: "Total Transparency",
                    desc: "Honest grading and upfront pricing with no hidden flaws, ensuring you know exactly what you're buying."
                  },
                  {
                    title: "Enduring Care",
                    desc: "We don't just sell; we serve. Dedicated support that extends far beyond checkout for peace of mind."
                  },
                  {
                    title: "Real Value",
                    desc: "Bridging the gap between premium tech and affordability, delivering the Apple experience without the markup."
                  }
                ].map((value, idx) => (
                  <StaggerItem key={idx} className="flex flex-col gap-[4px] items-start w-full">
                    <p className="paragraph-bold mb-0">
                      {value.title}
                    </p>
                    <p className="paragraph mb-0">
                      {value.desc}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Who We Serve */}
            <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[32px] md:gap-[64px] items-start py-[32px] w-full">
              <FadeIn className="flex items-center w-full">
                <h3>
                  Who We Serve
                </h3>
              </FadeIn>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] items-start w-full" staggerDelay={0.1}>
                {[
                  {
                    title: "Apple-First Customers",
                    desc: "People who love the Apple ecosystem. You want the full premium experience, seamless integration and quality but are looking for a smarter, more trusted way to buy."
                  },
                  {
                    title: "Value-Driven Buyers",
                    desc: "Smart shoppers seeking the intersection of quality and price. You refuse to compromise on performance, seeking real value where premium products meet honest, transparent pricing."
                  },
                  {
                    title: "Creatives & Students Alike",
                    desc: "From lecture halls to editing suites, great work requires great tools. We provide premium power without the markup, giving you the freedom to learn, create, and succeed."
                  },
                  {
                    title: "Tech-Savvy Upgraders",
                    desc: "For those who know exactly what they want. You prioritize specific specs and real performance. We deliver curated, strictly tested devices that meet your high standards."
                  }
                ].map((segment, idx) => (
                  <StaggerItem key={idx} className="flex flex-col gap-[20px] items-start">
                    <p className="paragraph-bold mb-0">
                      {segment.title}
                    </p>
                    <p className="paragraph mb-0">
                      {segment.desc}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* Brand Logo Section */}
          <section id="section-02" className="border-l border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] items-start pb-[120px] pt-[32px] px-[32px] w-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
              <FadeIn className="w-full md:flex-1 flex items-end">
                <h1>
                  <span className="text-[#18ae54]">02.</span>
                  <span> Logo</span>
                </h1>
              </FadeIn>
              <div className="flex-1 flex flex-col gap-[40px] items-start">
                <FadeIn className="flex flex-col gap-[8px] items-start w-full" delay={0.1}>
                  <h2 className="heading-2-bold">
                    <span className="text-[#18ae54]">The heart, soul, and center</span>
                    <span> of our brand identity.</span>
                  </h2>
                  <p className="paragraph text-[#575757] mb-0">
                    Our logo is how our customers tell us apart from a crowded industry. It's a promise of quality, consistency, and reliability.
                  </p>
                  <p className="paragraph text-[#575757]">
                    As such, it is vital that our logo is presented correctly in every execution. This section covers these guidelines in detail.
                  </p>
                </FadeIn>

                <FadeIn className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[8px] items-start py-[16px] w-full" delay={0.2}>
                  <p className="heading-3 text-[#575757] mb-0">
                    At the Core of Every Mac
                  </p>
                  <p className="paragraph text-[#575757] mb-0">
                    Imagine three MacBooks in motion, unfolding, intersecting, converging. Inspired by the elegant reveal moments from Apple's own product launches, this concept brings that energy to life.
                  </p>
                  <p className="paragraph text-[#575757] mb-0">&nbsp;</p>
                  <p className="paragraph text-[#575757]">
                    It captures Eternal's core: trusted, curated tech delivered with precision and clarity. A symbol born from movement, balance, and the belief that great value lives at the intersection of trust and quality.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Logo diagrams */}
            <div className="flex flex-col gap-[64px] items-start px-lg[24px] w-full">
              {/* Primary Lockup */}
              <div className="flex flex-col gap-[10px] items-start pt-[40px] w-full">
                <FadeIn>
                  <h3>
                    Primary Lockup
                  </h3>
                </FadeIn>
                <FadeIn className="w-full" delay={0.1}>
                  <AnimatedImage
                    alt="Primary brand logo lockup"
                    className="w-full object-cover"
                    src="/images/primary-lockup.png"
                  />
                </FadeIn>
              </div>

              {/* What our icon stands for */}
              <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[32px] md:gap-[64px] items-start py-[32px] w-full">
                <FadeIn>
                  <h3>
                    What our icon stands for
                  </h3>
                </FadeIn>
                <StaggerContainer className="flex flex-col md:flex-row gap-[32px] items-start w-full" staggerDelay={0.15}>
                  {[
                    {
                      img: "/images/icon-meaning-1.png",
                      title: "Macbook",
                      desc: "The core shape is inspired by the clean silhouette of a MacBook with its lid open."
                    },
                    {
                      img: "/images/icon-meaning-2.png",
                      title: "3 Macbooks in star composition",
                      desc: "Three MacBook silhouettes converging to form a unified, forward-moving star."
                    },
                    {
                      img: "/images/icon-meaning-3.png",
                      title: "Center Point",
                      desc: "The exact center point where trust, technology, and real value converge."
                    }
                  ].map((item, idx) => (
                    <StaggerItem key={idx} className="w-full md:flex-1 flex flex-col gap-[20px] items-start">
                      <div className="h-[160px] w-full relative">
                        <AnimatedImage
                          alt=""
                          className="absolute inset-0 w-full h-full object-contain"
                          src={item.img}
                        />
                      </div>
                      <p className="paragraph-bold mb-0">
                        {item.title}
                      </p>
                      <p className="paragraph text-[#575757]">
                        {item.desc}
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Logo Construction */}
              <div className="flex flex-col gap-[10px] items-start w-full">
                <FadeIn>
                  <h3>
                    Logo Construction
                  </h3>
                </FadeIn>
                <FadeIn className="w-full" delay={0.1}>
                  <AnimatedImage
                    alt="Logo construction"
                    className="w-full object-cover"
                    src="/images/logo-construction.png"
                  />
                </FadeIn>
              </div>

              {/* A Scalable Identity System */}
              <div className="border-t border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[64px] items-start pb-[64px] pt-[32px] w-full">
                <FadeIn className="flex flex-col gap-[12px] items-start w-full">
                  <h3>
                    A Scalable Identity System
                  </h3>
                  <p className="paragraph text-[#575757] mb-0">
                    Balancing the representation of our logo on both a billboard and a small flyer presents a unique challenge. Our versatile identity system is crafted to ensure adaptability, uniformity, and brand recognition.
                  </p>
                  <p className="paragraph text-[#575757] mb-0">&nbsp;</p>
                  <p className="paragraph text-[#575757]">
                    We offer a range of logo arrangements that cater to diverse spaces. Instead of struggling to fit the logo into tight or crowded spots, opt for an alternative version to achieve a stronger visual impact and clear representation.
                  </p>
                </FadeIn>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_0.8fr] gap-[32px] min-[750px]:gap-[80px] min-[1100px]:gap-[60px] items-end w-full" staggerDelay={0.15}>
                  {/* Primary Lockup - slightly larger */}
                  <StaggerItem className="flex flex-col gap-[20px] items-start">
                    <div className="h-[120px] md:h-[140px] lg:h-[160px] w-full flex items-center">
                      <img
                        alt="Primary Lockup"
                        className="h-[80px] md:h-[90px] lg:h-[100px] w-auto object-contain"
                        src="/images/Eternal Logo - Primary.svg"
                      />
                    </div>
                    <p className="font-medium text-[#575757] text-[10px] tracking-[-0.2px] leading-[1.2]">
                      PRIMARY LOCKUP
                    </p>
                  </StaggerItem>
                  {/* Vertical Lockup - medium */}
                  <StaggerItem className="flex flex-col gap-[20px] items-start">
                    <div className="h-[120px] md:h-[140px] lg:h-[160px] w-full flex items-center">
                      <img
                        alt="Vertical Lockup"
                        className="h-[100px] md:h-[120px] lg:h-[140px] w-auto object-contain"
                        src="/images/logo-vertical.svg"
                      />
                    </div>
                    <p className="font-medium text-[#575757] text-[10px] tracking-[-0.2px] leading-[1.2]">
                      VERTICAL LOCKUP
                    </p>
                  </StaggerItem>
                  {/* Icon-only - smallest */}
                  <StaggerItem className="flex flex-col gap-[20px] items-start">
                    <div className="h-[120px] md:h-[140px] lg:h-[160px] w-full flex items-center">
                      <img
                        alt="Icon Only"
                        className="h-[70px] md:h-[80px] lg:h-[90px] w-auto object-contain"
                        src="/images/logo-icon.png"
                      />
                    </div>
                    <p className="font-medium text-[#575757] text-[10px] tracking-[-0.2px] leading-[1.2]">
                      ICON-ONLY
                    </p>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Primary Lockup */}
              <div className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col items-start pb-[64px] pt-[32px] w-full">
                <div className="flex flex-col min-[900px]:flex-row gap-[32px] min-[900px]:gap-[48px] items-start w-full">
                  {/* Left Column: Section Header */}
                  <FadeIn className="flex flex-col gap-[12px] w-full min-[900px]:flex-1 min-[900px]:max-w-[280px] lg:max-w-[400px] leading-[0]">
                    <h3>
                      Primary Lockup
                    </h3>
                    <div className="paragraph text-[#575757]">
                      <p className="leading-[1.2] mb-0">
                        The brand logo identifies the <span className="font-bold text-black">Eternal</span> as a whole. Use this logo to represent individual locations, products, merchandise, and wholesale operations.
                      </p>
                      <p className="leading-[1.2] mb-0">&nbsp;</p>
                      <p className="leading-[1.2]">
                        This logo is a carefully created piece of locked artwork that should not be altered in any way.
                      </p>
                    </div>
                  </FadeIn>

                  {/* Right Column: Samples */}
                  <div className="flex-1 flex flex-col gap-[32px] lg:gap-[80px] items-start w-full">
                    {/* Main Logo Display */}
                    <FadeIn className="flex items-center justify-start w-full h-[160px]" delay={0.1}>
                      <img
                        src="/images/Eternal Logo - Primary.svg"
                        alt="Primary Lockup Logo"
                        className="h-[80px] min-[900px]:h-[100px] lg:h-[112px] w-auto"
                      />
                    </FadeIn>

                    {/* Minimum Size Specification */}
                    <FadeIn className="flex flex-col min-[500px]:flex-row items-stretch border border-solid border-[rgba(0,0,0,0.1)] w-full" delay={0.2}>
                      {/* Left: Logo with measurement */}
                      <div className="flex items-center gap-[40px] px-[24px] py-[20px] min-[500px]:pr-[32px] shrink-0">
                        <img
                          src="/images/Eternal Logo - Primary.svg"
                          alt="Minimum Size Logo"
                          className="h-[32px] w-auto"
                        />
                        <div className="flex items-center gap-[8px]">
                          <img
                            src="/images/Line 3.svg"
                            alt=""
                            className="h-[37px] w-auto"
                          />
                          <span className="text-[10px] text-[#575757] whitespace-nowrap">.45" or 32px</span>
                        </div>
                      </div>

                      {/* Right: Description */}
                      <div className="flex flex-col gap-[8px] p-[20px] min-[500px]:p-[24px] border-t min-[500px]:border-t-0 min-[500px]:border-l border-solid border-[rgba(0,0,0,0.1)] flex-1 min-w-0">
                        <p className="font-medium text-[10px] tracking-[-0.2px] leading-[1.2] mb-0">
                          MINIMUM SIZE
                        </p>
                        <p className="display text-[#575757] mb-0">
                          This version is not intended for extremely small sizes. The minimum height is .45" for print applications and 32px for digital applications.
                        </p>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>

              {/* Secondary Lockup */}
              <div className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col items-start pb-[64px] pt-[32px] w-full">
                <div className="flex flex-col min-[900px]:flex-row gap-[32px] min-[900px]:gap-[48px] items-start w-full">
                  {/* Left Column: Section Header */}
                  <div className="flex flex-col gap-[12px] w-full min-[900px]:flex-1 min-[900px]:max-w-[280px] lg:max-w-[400px] leading-[0]">
                    <h3>
                      Secondary Lockup
                    </h3>
                    <div className="paragraph text-[#575757]">
                      <p className="leading-[1.2] mb-0">
                        Designed specifically to be vertically efficient, the secondary lockup is a perfect fit for taller areas, and areas where a centered lockup would fit better.
                      </p>
                      <p className="leading-[1.2] mb-0">&nbsp;</p>
                      <p className="leading-[1.2]">
                        While we generally prefer the full horizontal logo, there are no specific restrictions that would prevent this version from use.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Samples */}
                  <div className="flex-1 flex flex-col gap-[32px] lg:gap-[80px] items-start w-full">
                    {/* Main Logo Display */}
                    <div className="flex items-center justify-start w-full aspect-[470/180]">
                      <img
                        src="/images/logo-vertical.svg"
                        alt="Secondary Lockup Logo"
                        className="h-[140px] min-[900px]:h-[160px] lg:h-[180px] w-auto"
                      />
                    </div>

                    {/* Minimum Size Specification */}
                    <div className="flex flex-col min-[500px]:flex-row items-stretch border border-solid border-[rgba(0,0,0,0.1)] w-full">
                      {/* Left: Logo with measurement */}
                      <div className="flex items-center gap-[24px] px-[24px] py-[20px] min-[500px]:pr-[32px] shrink-0">
                        <img
                          src="/images/logo-vertical.svg"
                          alt="Minimum Size Logo"
                          className="h-[64px] w-auto"
                        />
                        <div className="flex items-center gap-[8px]">
                          <img
                            src="/images/Line 3.svg"
                            alt=""
                            className="h-[64px] w-auto"
                          />
                          <span className="text-[10px] text-[#575757] whitespace-nowrap">1.4" or 64px</span>
                        </div>
                      </div>

                      {/* Right: Description */}
                      <div className="flex flex-col gap-[8px] p-[20px] min-[500px]:p-[24px] border-t min-[500px]:border-t-0 min-[500px]:border-l border-solid border-[rgba(0,0,0,0.1)] flex-1 min-w-0">
                        <p className="font-medium text-[10px] tracking-[-0.2px] leading-[1.2] mb-0">
                          MINIMUM SIZE
                        </p>
                        <p className="display text-[#575757] mb-0">
                          This version is not intended for extremely small sizes. The minimum height is 1.4" for print applications and 64px for digital applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon-only Lockup */}
              <div className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col items-start pb-[64px] pt-[32px] w-full">
                <div className="flex flex-col min-[900px]:flex-row gap-[32px] min-[900px]:gap-[64px] items-start w-full">
                  {/* Left Column: Section Header */}
                  <div className="flex flex-col gap-[12px] w-full min-[900px]:flex-1 min-[900px]:max-w-[280px] lg:max-w-[400px] leading-[0]">
                    <h3>
                      Icon-only Lockup
                    </h3>
                    <div className="paragraph text-[#575757]">
                      <p className="leading-[1.2] mb-0">
                        When subtlety is desired, the <span className="font-bold text-black">Eternal</span> icon can be used in place of a full brand logo lockup.
                      </p>
                      <p className="leading-[1.2] mb-0">&nbsp;</p>
                      <p className="leading-[1.2]">
                        When this mark is used, ensure that our brand name is visible near or in relationship with the icon. This will help reinforce brand recognition.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Samples */}
                  <div className="flex-1 flex flex-col gap-[40px] lg:gap-[80px] items-start w-full">
                    {/* Main Logo Display */}
                    <div className="flex items-center justify-start w-full">
                      <img
                        src="/images/logo-icon.png"
                        alt="Icon-only Lockup Logo"
                        className="h-[125px] w-auto"
                      />
                    </div>

                    {/* Minimum Size Specification */}
                    <div className="flex flex-col min-[500px]:flex-row items-stretch border border-solid border-[rgba(0,0,0,0.1)] w-full">
                      {/* Left: Logo with measurement */}
                      <div className="flex items-center gap-[40px] px-[24px] py-[20px] min-[500px]:pr-[32px]">
                        <img
                          src="/images/logo-icon.png"
                          alt="Minimum Size Logo"
                          className="h-[48px] w-auto"
                        />
                        <div className="flex items-center gap-[8px]">
                          <img
                            src="/images/Line 3.svg"
                            alt=""
                            className="h-[37px] w-auto"
                          />
                          <span className="text-[10px] text-[#575757] whitespace-nowrap">0.6" or 48px</span>
                        </div>
                      </div>

                      {/* Right: Description */}
                      <div className="flex flex-col gap-[8px] p-[20px] min-[500px]:p-[24px] border-t min-[500px]:border-t-0 min-[500px]:border-l border-solid border-[rgba(0,0,0,0.1)] flex-1">
                        <p className="font-medium text-[10px] tracking-[-0.2px] leading-[1.2] mb-0">
                          MINIMUM SIZE
                        </p>
                        <p className="display text-[#575757] mb-0">
                          This version is not intended for extremely small sizes. The minimum height is 0.6" for print applications and 48px for digital applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Variations */}
              <div className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col items-start pb-[64px] pt-[32px] w-full">
                <div className="flex flex-col md:flex-row gap-[32px] md:gap-[48px] items-start justify-between w-full">
                  {/* Left Column: Section Header */}
                  <FadeIn className="flex flex-col gap-[12px] w-full md:flex-1 md:max-w-[400px]">
                    <h3>
                      Color Variations
                    </h3>
                    <div className="paragraph text-[#575757]">
                      <p className="mb-0">
                        Each brand logo lockup has several color variations for use on different background types, tones, and colors.
                      </p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="mb-0">
                        When in doubt, use the most legible version of the logo for the available background.
                      </p>
                      <p className="mb-0">&nbsp;</p>
                      <p>
                        For printed executions, special care should be given to ensure logo legibility on the final media or material used.
                      </p>
                    </div>
                  </FadeIn>

                  {/* Right Column: Color Boxes */}
                  <StaggerContainer className="flex flex-col gap-[12px] w-full md:flex-1 md:max-w-[400px]" staggerDelay={0.1}>
                    {/* Light Background */}
                    <StaggerItem className="bg-[#f4f4f4] border-[0.5px] border-solid border-[rgba(0,0,0,0.15)] rounded-[8px] flex items-center justify-center px-[40px] md:px-[80px] py-[16px] w-full">
                      <img
                        src="/images/Eternal Logo - Primary.svg"
                        alt="Logo on light background"
                        className="h-[43px] w-auto"
                      />
                    </StaggerItem>

                    {/* Dark Background */}
                    <StaggerItem className="bg-[#040404] rounded-[8px] flex items-center justify-center px-[40px] md:px-[80px] py-[16px] w-full">
                      <img
                        src="/images/Eternal Logo - Primary-White-Text.svg"
                        alt="Logo on dark background"
                        className="h-[43px] w-auto"
                      />
                    </StaggerItem>

                    {/* Green Background */}
                    <StaggerItem className="bg-[#18ae54] rounded-[8px] flex items-center justify-center px-[40px] md:px-[80px] py-[16px] w-full">
                      <img
                        src="/images/Eternal Logo - Primary-Green.svg"
                        alt="Logo on green background"
                        className="h-[43px] w-auto"
                      />
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </div>

              {/* Clear Space */}
              <div className="flex flex-col gap-[40px] items-start w-full">
                <FadeIn className="flex flex-col gap-[12px] items-start w-full">
                  <h3>
                    Clear Space
                  </h3>
                  <p className="paragraph text-[#575757] mb-0">
                    Clear space, or negative space, is the area that surrounds the logo that is completely clear of any other graphical element. Clear space helps the logo stand out from the rest of the elements on the page and ensures legibility, even at small sizes. As a general rule, the more clear, or negative, space around the logo, the better.
                  </p>
                  <p className="paragraph text-[#575757] mb-0">&nbsp;</p>
                  <p className="paragraph text-[#575757]">
                    At a minimum, there should be clear space equal to the height of the Network icon on all four sides of the logo. Using an element from the logo as a unit of measurement ensures enough clear space at any size.
                  </p>
                </FadeIn>
                <FadeIn className="bg-[#f4f4f4] flex items-center justify-center w-full py-[195px]" delay={0.1}>
                  <div className="h-[110px] w-[400px] relative">
                    <AnimatedImage
                      alt="Clear space diagram"
                      className="absolute inset-0 w-full h-full object-contain"
                      src="/images/Clear-Space.png"
                    />
                  </div>
                </FadeIn>
              </div>

              {/* Incorrect Usage */}
              <div className="flex flex-col gap-[10px] items-start w-full">
                <FadeIn>
                  <h3>
                    Incorrect Usage
                  </h3>
                </FadeIn>
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-x-[16px] md:gap-y-[30px] w-full" staggerDelay={0.08}>
                  {[
                    {
                      img: "/images/incorrect-usage-1.jpg",
                      label: "Do not stretch, squash, distort or skew the logo in any way"
                    },
                    {
                      img: "/images/incorrect-usage-2.jpg",
                      label: "Do not edit the logo color or use an off-brand color, or reduce the logo opacity."
                    },
                    {
                      img: "/images/incorrect-usage-3.jpg",
                      label: "Do not add graphic effects to the logo, including drop shadows."
                    },
                    {
                      img: "/images/incorrect-usage-4.jpg",
                      label: "Do not place the logo on a high-contrast pattern or busy photograph."
                    },
                    {
                      img: "/images/incorrect-usage-5.jpg",
                      label: "Do not encroach on the required clear space surrounding the logo."
                    },
                    {
                      img: "/images/incorrect-usage-6.jpg",
                      label: "Do not use any gradients on the logo, including brand color gradients."
                    }
                  ].map((item, idx) => (
                    <StaggerItem key={idx} className="flex flex-col gap-[10px] items-start">
                      <div className="w-full">
                        <AnimatedImage
                          alt={`Incorrect logo usage ${idx + 1}`}
                          className="w-full object-cover"
                          src={item.img}
                        />
                      </div>
                      <div className="flex gap-[5px] items-center w-full">
                        <div className="w-[16px] h-[16px] shrink-0 text-red-600">✕</div>
                        <p className="flex-1 font-medium text-[13px] tracking-[-0.13px] leading-[1.2]">
                          {item.label}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </section>

          {/* ========== COLORS SECTION ========== */}
          <section
            id="section-03"
            aria-label="Section 3 out of 6"
            className="border-l border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] items-start pb-[120px] pt-[32px] px-[32px] w-full"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
              <FadeIn className="w-full md:flex-1 flex items-end">
                <h2 className="heading-1">
                  <span className="text-[#18ae54]">03.</span>
                  <span>  Colors</span>
                </h2>
              </FadeIn>
              <FadeIn className="flex flex-col gap-[8px] items-start flex-1" delay={0.1}>
                <h2 className="heading-2-bold">
                  Color sets us apart & helps to invoke emotion.
                </h2>
                <div className="paragraph text-[#575757]">
                  <p className="mb-0">
                    The colors we've chosen for our brand is a key factor in differentiation and brand recognition.
                  </p>
                  <p className="mb-0">&nbsp;</p>
                  <p>
                    As such, it is vital that our colors are reproduced faithfully and combined in the right way. This section covers these guidelines in detail.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Primary Color Palette */}
            <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-start pt-[32px] w-full">
              <FadeIn className="flex flex-col gap-[12px] items-start w-full">
                <h3>
                  Primary Color Palette
                </h3>
                <div className="paragraph text-[#575757]">
                  <p className="mb-0">
                    The consistent use of color is vital to effective brand recognition.
                  </p>
                  <p className="mb-0">&nbsp;</p>
                  <p>
                    Our brand should always be represented in one of the colors on this page, aside from specific recommendations within this guide. Do not use any other/unauthorized colors.
                  </p>
                </div>
              </FadeIn>

              {/* Primary Colors */}
              <StaggerContainer className="flex gap-[24px] items-start w-full" staggerDelay={0.15}>
                {/* Eternal Green */}
                <StaggerItem className="flex flex-col gap-[12px] items-start flex-1">
                  <div className="bg-[#00B048] border border-solid border-[rgba(0,0,0,0.15)] rounded-[4px] w-full h-[200px]" />
                  <div className="flex flex-col gap-[4px] label">
                    <p className="mb-0">Eternal Green</p>
                    <p className="mb-0 text-[#575757]">Hex: #00B048</p>
                    <p className="mb-0 text-[#575757]">RGB: 0, 176, 72</p>
                    <p className="mb-0 text-[#575757]">CMYK: 81, 0, 100, 0</p>
                  </div>
                </StaggerItem>

                {/* Eternal Yellow */}
                <StaggerItem className="flex flex-col gap-[12px] items-start flex-1">
                  <div className="bg-[#F9DF30] border border-solid border-[rgba(0,0,0,0.15)] rounded-[4px] w-full h-[200px]" />
                  <div className="flex flex-col gap-[4px] label">
                    <p className="mb-0">Eternal Yellow</p>
                    <p className="mb-0 text-[#575757]">Hex: #F9DF30</p>
                    <p className="mb-0 text-[#575757]">RGB: 249, 223, 48</p>
                    <p className="mb-0 text-[#575757]">CMYK: 4, 7, 91, 0</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Neutrals & Tints */}
            <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-start pt-[32px] w-full">
              <FadeIn className="flex flex-col gap-[12px] items-start w-full">
                <h3>
                  Neutrals & Tints
                </h3>
                <div className="paragraph text-[#575757]">
                  <p className="mb-0">
                    We prefer our brand colors used without editing, but some situations require the use of color tints, especially on the web. For example, when a user hovers over a button on our website, using a tint change can help confirm their action.
                  </p>
                  <p className="mb-0">&nbsp;</p>
                  <p>
                    If necessary, use a 20% tint step system, keeping legibility in mind. Any tint below 60% used as a background will require dark text.
                  </p>
                </div>
              </FadeIn>

              {/* Green Tints */}
              <FadeIn className="flex flex-col gap-[8px] w-full" delay={0.1}>
                <div className="flex gap-0 w-full h-[140px]">
                  <div className="flex-1 bg-[#00B048] rounded-l-[4px]" />
                  <div className="flex-1 bg-[#45BD76]" />
                  <div className="flex-1 bg-[#74CE98]" />
                  <div className="flex-1 bg-[#A2DEBB]" />
                  <div className="flex-1 bg-[#D1EFDD] rounded-r-[4px]" />
                </div>
                <div className="flex gap-0 w-full color-code">
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">100%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#00B048</p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">80%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#45BD76</p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">60%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#74CE98</p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">40%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#A2DEBB</p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">20%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#D1EFDD</p>
                  </div>
                </div>
              </FadeIn>

              {/* Yellow Tints */}
              <FadeIn className="flex flex-col gap-[8px] w-full" delay={0.2}>
                <div className="flex gap-0 w-full h-[140px]">
                  <div className="flex-1 bg-[#F9DF30] rounded-l-[4px]" />
                  <div className="flex-1 bg-[#FAE67B]" />
                  <div className="flex-1 bg-[#FBE98D]" />
                  <div className="flex-1 bg-[#FCEEB2]" />
                  <div className="flex-1 bg-[#FDF6D6] rounded-r-[4px]" />
                </div>
                <div className="flex gap-0 w-full color-code">
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">100%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#F9DF30</p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">80%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#FAE67B</p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">60%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#FBE98D</p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">40%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#FCEEB2</p>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="mb-0">20%</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#FDF6D6</p>
                  </div>
                </div>
              </FadeIn>

              {/* Neutral Colors */}
              <StaggerContainer className="flex gap-[16px] md:gap-[24px] items-start w-full" staggerDelay={0.1}>
                {/* Black */}
                <StaggerItem className="flex flex-col gap-[12px] items-start flex-1">
                  <div className="bg-[#000000] border border-solid border-[rgba(0,0,0,0.15)] rounded-[4px] w-full h-[140px]" />
                  <div className="flex flex-col gap-[4px] label">
                    <p className="mb-0">Black</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#000000</p>
                  </div>
                </StaggerItem>

                {/* Dark Grey */}
                <StaggerItem className="flex flex-col gap-[12px] items-start flex-1">
                  <div className="bg-[#CFCFCF] border border-solid border-[rgba(0,0,0,0.15)] rounded-[4px] w-full h-[140px]" />
                  <div className="flex flex-col gap-[4px] label">
                    <p className="mb-0">Dark Grey</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#CFCFCF</p>
                  </div>
                </StaggerItem>

                {/* Grey */}
                <StaggerItem className="flex flex-col gap-[12px] items-start flex-1">
                  <div className="bg-[#F4F4F4] border border-solid border-[rgba(0,0,0,0.15)] rounded-[4px] w-full h-[140px]" />
                  <div className="flex flex-col gap-[4px] label">
                    <p className="mb-0">Grey</p>
                    <p className="mb-0 text-[#575757]"><span className="hidden md:inline">Hex: </span>#F4F4F4</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* ========== TYPOGRAPHY SECTION ========== */}
          <section
            id="section-04"
            aria-label="Section 4 out of 6"
            className="border-l border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] items-start pb-[120px] pt-[32px] px-[32px] w-full"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
              <FadeIn className="w-full md:flex-1 flex items-end">
                <h2 className="heading-1">
                  <span className="text-[#18ae54]">04.</span>
                  <span> Typography</span>
                </h2>
              </FadeIn>
              <div className="flex flex-col gap-[40px] items-start justify-center flex-1">
                <FadeIn className="paragraph text-[#575757]" delay={0.1}>
                  <p className="mb-0">
                    Few things communicate the look and feel of a brand more clearly than the way letters, numbers, and symbols are put together. We believe typography should strike a balance between legibility and interest.
                  </p>
                  <p className="mb-0">&nbsp;</p>
                  <p>
                    This section will cover approved typefaces, the way we use typography to communicate clearly, and some helpful usage tips.
                  </p>
                </FadeIn>
                {/* Typeface Image */}
                <FadeIn className="w-full" delay={0.2}>
                  <AnimatedImage
                    src="/images/Typeface.png"
                    alt="Aa"
                    className="w-full h-auto object-cover"
                  />
                </FadeIn>
                <FadeIn className="flex flex-col gap-[20px] items-start w-full" delay={0.3}>
                  <h3 className="caption">
                    We are obsessed with the beauty of typography.
                  </h3>
                  <div className="paragraph text-[#575757]">
                    <p className="mb-0">
                      Primary Sans-Serif, <span className="font-bold text-[#00B048]">SF Pro</span> is a clean, modern sans-serif typeface that ensures legibility and precision across all digital and print materials. Its geometric structure reflects clarity, efficiency, and trust, making it the ideal choice for data-heavy content, dashboards, and user interfaces.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Primary Typeface */}
            <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-start pt-[32px] pb-[64px] px-lg[24px] w-full">
              <FadeIn className="flex items-center justify-between w-full">
                <div className="flex flex-col gap-[20px] items-start">
                  <p className="link">
                    Primary Typeface
                  </p>
                  <p className="font-medium text-[41px] md:text-[60px] leading-[1.3] tracking-[-0.82px] md:tracking-[-0.02em] mb-0">
                    SF Pro
                  </p>
                </div>
                <p className="link text-right">
                  The typeface we chose<br />for all brand execution
                </p>
              </FadeIn>
            </div>

            {/* Hierarchy & Weight */}
            <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-start pt-[32px] px-lg[24px] w-full">
              <FadeIn className="flex flex-col gap-[32px] items-start w-full">
                <h3>
                  Hierarchy & Weight
                </h3>
                <div className="flex flex-col gap-[16px] items-start w-full paragraph text-[#575757]">
                  <p className="mb-0">
                    <strong className="text-black font-bold">SF Pro</strong> is a very versatile sans-serif font that excels in establishing a clear typographic hierarchy.
                  </p>
                  <p className="mb-0">
                    Its range of weights and styles allows for seamless differentiation between headings, subheadings, and body text, ensuring every piece of content is well-organized and visually appealing.
                  </p>
                </div>
              </FadeIn>

              {/* Font Weights Display */}
              <StaggerContainer className="flex flex-col pb-[32px] w-full" staggerDelay={0.1}>
                {/* Light */}
                <StaggerItem className="py-[30px] md:py-[40px] w-full">
                  <div className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] pb-[10px]">
                    <p className="font-light text-[40px] md:text-[54px] leading-[1.1] tracking-[-0.8px] md:tracking-[-0.04em]">
                      SF Pro Light
                    </p>
                    <div className="flex justify-between text-[13px] md:text-[10px] md:uppercase tracking-[-0.13px] md:tracking-[0.05em] text-[#575757] font-medium">
                      <span>Weight: Light</span>
                      <span>100% Leading</span>
                      <span>-2% Tracking</span>
                    </div>
                  </div>
                </StaggerItem>

                {/* Regular */}
                <StaggerItem className="py-[30px] md:py-[40px] w-full">
                  <div className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] pb-[10px]">
                    <p className="font-normal text-[40px] md:text-[54px] leading-[1.1] tracking-[-0.8px] md:tracking-[-0.04em]">
                      SF Pro Regular
                    </p>
                    <div className="flex justify-between text-[13px] md:text-[10px] md:uppercase tracking-[-0.13px] md:tracking-[0.05em] text-[#575757] font-medium">
                      <span>Weight: Regular</span>
                      <span>100% Leading</span>
                      <span>-2% Tracking</span>
                    </div>
                  </div>
                </StaggerItem>

                {/* Medium */}
                <StaggerItem className="py-[30px] md:py-[40px] w-full">
                  <div className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] pb-[10px]">
                    <p className="font-medium text-[40px] md:text-[54px] leading-[1.1] tracking-[-0.4px] md:tracking-[-0.04em]">
                      SF Pro Medium
                    </p>
                    <div className="flex justify-between text-[13px] md:text-[10px] md:uppercase tracking-[-0.13px] md:tracking-[0.05em] text-[#575757] font-medium">
                      <span>Weight: Medium</span>
                      <span>100% Leading</span>
                      <span>-2% Tracking</span>
                    </div>
                  </div>
                </StaggerItem>

                {/* Bold */}
                <StaggerItem className="py-[30px] md:py-[40px] w-full">
                  <div className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] pb-[10px]">
                    <p className="font-bold text-[40px] md:text-[54px] leading-[1.1] tracking-[-0.4px] md:tracking-[-0.04em]">
                      SF Pro Bold
                    </p>
                    <div className="flex justify-between text-[13px] md:text-[10px] md:uppercase tracking-[-0.13px] md:tracking-[0.05em] text-[#575757] font-medium">
                      <span>Weight: Bold</span>
                      <span>100% Leading</span>
                      <span>-2% Tracking</span>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>



          {/* ========== VISUAL STYLE SECTION ========== */}
          <section
            id="section-05"
            aria-label="Section 5 out of 6"
            className="border-l border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] items-start pb-[120px] pt-[32px] px-[32px] w-full"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
              <FadeIn className="w-full md:flex-1 flex items-end">
                <h2 className="heading-1">
                  <span className="text-[#18ae54]">05.</span>
                  <span> Visual Style</span>
                </h2>
              </FadeIn>
              <FadeIn className="flex flex-col gap-[40px] items-start justify-center flex-1" delay={0.1}>
                <div className="flex flex-col gap-[20px] items-start w-full">
                  <h3 className="caption">
                    Ingredients for on-brand layouts and composition
                  </h3>
                  <div className="paragraph text-[#575757]">
                    <p className="mb-0">
                      While brand consistency relies heavily on logo usage, color, and typography, we recognize that these are not the only elements within a brand identity design system.
                    </p>
                    <p className="mb-0">&nbsp;</p>
                    <p>
                      This section contains approved visual elements like icons and patterns.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Iconography */}
            <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-start pt-[32px] px-lg[24px] w-full">
              <FadeIn>
                <h3>
                  Iconography
                </h3>
              </FadeIn>
              <FadeIn className="paragraph text-[#575757]" delay={0.1}>
                <p className="mb-[12px]">
                  Iconography is an essential part of Eternal's branding, used across marketing, digital platforms, and wayfinding. Our carefully-crafted icons embodies our design philosophy-bold, geometric, and purposeful.
                </p>
                <p className="mb-[12px]">
                  We favor thick outlines and clean, structured forms that distill subjects to their core essence. When creating new icons, maintain simplicity and consistency with our existing visual language. Icons should always remain fully visible, with clear spacing to ensure clarity and impact. Their shape, line weight, and structure should not be altered or repurposed as part of the Eternal logo.
                </p>
                <a href="https://drive.google.com/drive/folders/1Fmm5gy3obRlt0OhaXbLOKZG6UU1ndmMs?usp=drive_link" className="underline text-black font-medium">Download Icon Pack</a>
              </FadeIn>
              <FadeIn className="w-full" delay={0.2}>
                <AnimatedImage
                  src="/images/iconography.png"
                  alt="Iconography examples"
                  className="w-full h-[200px] md:h-[400px] object-cover"
                />
              </FadeIn>
            </div>

            {/* Patterns */}
            <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-start pt-[32px] px-lg[24px] w-full">
              <FadeIn>
                <h3>
                  Patterns
                </h3>
              </FadeIn>
              <FadeIn>
                <p className="mb-[12px]">
                  We have developed 4 pattern styles that are approved for usage as backgrounds, inprint materials, and in packaging. When using these patterns, feel free to invert the colorways (switch the background and foreground colors), but do not otherwise modify the colors.
                </p>
                <a href="https://drive.google.com/drive/folders/1ij9X05okPU35DuCeKQvw1UqlZstB7fVo?usp=drive_link" className="underline text-black font-medium">Download Patterns</a>
              </FadeIn>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-x-[24px] md:gap-y-[40px] w-full" staggerDelay={0.1}>
                {/* Pattern 1 */}
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/pattern-1.png" alt="Icon Grid" className="w-full h-[200px] md:h-[300px] object-cover" />
                  <span className="label">Icon Grid</span>
                </StaggerItem>
                {/* Pattern 2 */}
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/pattern-2.png" alt="Wireframe" className="w-full h-[200px] md:h-[300px] object-cover" />
                  <span className="label">Wireframe</span>
                </StaggerItem>
                {/* Pattern 3 */}
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/pattern-3.png" alt="Diagonal Type (Black)" className="w-full h-[200px] md:h-[300px] object-cover" />
                  <span className="label">Diagonal Type (Black)</span>
                </StaggerItem>
                {/* Pattern 4 */}
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/pattern-4.png" alt="Diagonal Type (Green)" className="w-full h-[200px] md:h-[300px] object-cover" />
                  <span className="label">Diagonal Type (Green)</span>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Custom Wallpaper */}
            <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-start pt-[32px] px-lg[24px] w-full">
              <FadeIn className="flex flex-col gap-[12px] items-start w-full">
                <h3>
                  Custom Wallpaper
                </h3>
                <div className="paragraph text-[#575757] max-w-[920px]">
                  <p className="mb-[12px]">
                    Extend the Eternal branding to your digital workspace. Our custom wallpapers feature the signature linear star pattern, designed to perfectly complement the sleek, minimal look of your Apple devices.
                  </p>
                  <p className="mb-[12px]">
                    Available in multiple color variations to match your style—from minimal white to our signature green, and fully optimized for both <strong>MacBooks and iPhones.</strong>
                  </p>
                  <a href="https://drive.google.com/drive/folders/1NVErMArB9FdPzZvuMm0hF5glKxbvSnMF?usp=drive_link" className="underline text-black font-medium">Download Wallpaper Pack</a>
                </div>
              </FadeIn>

              {/* iPhone Wallpapers */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-[24px] w-full" staggerDelay={0.1}>
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/custom-wp-1.png" alt="Minimal White" className="w-auto h-[212px] md:h-auto object-contain" />
                  <span className="label">Minimal White</span>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/custom-wp-2.png" alt="Abstract Green" className="w-auto h-[212px] md:h-auto object-contain" />
                  <span className="label">Abstract Green</span>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/custom-wp-3.png" alt="Minimal Green" className="w-auto h-[212px] md:h-auto object-contain" />
                  <span className="label">Minimal Green</span>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/custom-wp-4.png" alt="Wireframe Green" className="w-auto h-[212px] md:h-auto object-contain" />
                  <span className="label">Wireframe Green</span>
                </StaggerItem>
              </StaggerContainer>

              {/* MacBook Wallpapers */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full" staggerDelay={0.15}>
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/custom-wp-5.png" alt="Minimal Yellow" className="w-auto h-[212px] md:h-auto object-contain" />
                  <span className="label">Minimal Yellow</span>
                </StaggerItem>
                <StaggerItem className="flex flex-col gap-[12px]">
                  <AnimatedImage src="/images/custom-wp-6.png" alt="Branded Yellow" className="w-auto h-[212px] md:h-auto object-contain" />
                  <span className="label">Branded Yellow</span>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* ========== BRAND COLLATERALS SECTION ========== */}
          <section
            id="section-06"
            aria-label="Section 6 out of 6"
            className="border-l border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[30px] items-start pb-[120px] pt-[32px] px-[32px] w-full"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-[32px] items-start w-full">
              <FadeIn className="w-full md:flex-1 flex items-end">
                <h2 className="heading-1 max-w-[400px]">
                  <span className="text-[#18ae54]">06.</span>
                  <span>  Brand Collaterals</span>
                </h2>
              </FadeIn>
              <FadeIn className="flex flex-col flex-1 paragraph text-[#575757]" delay={0.1}>
                <p className="mb-0">
                  Brand collateral is an essential extension of Eternal's identity, ensuring a unified presence across all physical and digital touchpoints. Our meticulously designed assets embody our commitment to excellence, clean, cohesive, and professional.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p>
                  From business cards to letterheads, these materials should be used as designed, ensuring every interaction feels seamless and premium.
                </p>
              </FadeIn>
            </div>

            {/* Photo Grid */}
            <div className="flex flex-col gap-[40px] md:gap-[68px] px-lg[24px] md:px-lg[80px] w-full">
              <div className="flex flex-col gap-[40px] w-full">
                {/* Row 1 */}
                <StaggerContainer className="flex flex-col md:flex-row gap-[32px] w-full" staggerDelay={0.15}>
                  {/* Retail Bag */}
                  <StaggerItem className="flex flex-col gap-[10px] w-full md:flex-1">
                    <div className="w-full aspect-[467/295.36]">
                      <AnimatedImage
                        src="/images/retail-bag.jpg"
                        alt="Retail Bag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] label">
                      <p className="paragraph-bold">Retail Bag</p>
                      <p>
                        Extend the premium experience beyond the store. Our minimalist bag design turns every purchase into a statement of quality, carrying the brand promise into the real world.
                      </p>
                      <a
                        href="https://drive.google.com/drive/folders/1IQUeguayOoQ19kGTKTmC5Vt6DNyDY2kP?usp=drive_link"
                        className="text-[#575757] underline"
                      >
                        Download
                      </a>
                    </div>
                  </StaggerItem>

                  {/* Business Card */}
                  <StaggerItem className="flex flex-col gap-[10px] w-full md:flex-1">
                    <div className="w-full aspect-[467/295.36]">
                      <AnimatedImage
                        src="/images/business-card.jpg"
                        alt="Business Card"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] label">
                      <p className="paragraph-bold">Business Card</p>
                      <p>
                        Make every connection count. Featuring clean typography and our signature green, this design reflects precision and professionalism to leave a lasting impact.
                      </p>
                      <a
                        href="https://drive.google.com/drive/folders/164uX29Cq-7a5bnHjS0GeFg-4tPPmKgUb?usp=sharing"
                        className="text-[#575757] underline"
                      >
                        Download
                      </a>
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                {/* Row 2 */}
                <StaggerContainer className="flex flex-col md:flex-row gap-[32px] w-full" staggerDelay={0.15}>
                  {/* Invoice */}
                  <StaggerItem className="flex flex-col gap-[10px] w-full md:flex-1">
                    <div className="w-full aspect-[467/295.36]">
                      <AnimatedImage
                        src="/images/invoice.jpg"
                        alt="Invoice"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] label">
                      <p className="paragraph-bold">Invoice</p>
                      <p>
                        Professionalism in every detail. This template ensures clarity and trust in every transaction, reinforcing Eternal's reliability across all administrative touchpoints.
                      </p>
                      <a
                        href="https://www.canva.com/design/DAG_a88BvEE/5_ZXaxqCPHAlILcu73D4Lg/edit?utm_content=DAG_a88BvEE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        className="text-[#575757] underline"
                      >
                        Get Access
                      </a>
                    </div>
                  </StaggerItem>

                  {/* Letterhead */}
                  <StaggerItem className="flex flex-col gap-[10px] w-full md:flex-1">
                    <div className="w-full aspect-[467/295.36]">
                      <AnimatedImage
                        src="/images/letterhead.jpg"
                        alt="Letterhead"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] label">
                      <p className="paragraph-bold">Letterhead</p>
                      <p>
                        Communicate with authority. A clean, structured framework for official correspondence that ensures every message is delivered with Eternal's signature polish.
                      </p>
                      <a
                        href="https://drive.google.com/drive/folders/1541ER9Dt8vpb2b7_7_WcFIRjheE_akvT?usp=drive_link"
                        className="text-[#575757] underline"
                      >
                        Download
                      </a>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Row 3 - Cover Image */}
              <div className="flex flex-col gap-[48px] w-full">
                <FadeIn className="border-t border-solid border-[rgba(0,0,0,0.1)] pt-[24px] w-full">
                  <div className="flex flex-col gap-[10px] w-full">
                    <div className="w-full h-[200px] md:h-[400px]">
                      <AnimatedImage
                        src="/images/cover-image.jpg"
                        alt="Cover Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] label">
                      <p className="paragraph-bold">Cover Image</p>
                      <p>
                        Make a strong first impression. These branded headers feature Eternal's signature aesthetic, ensuring your digital profiles look professional, unified, and instantly recognizable.
                      </p>
                      <a
                        href="https://drive.google.com/drive/folders/1AYWUd94Divc8AD3c147nxe3D3ywoc6MZ?usp=drive_link"
                        className="text-[#575757] underline"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* Row 4 - Social Media Kit */}
                <FadeIn className="border-t border-solid border-[rgba(0,0,0,0.1)] py-[24px] w-full">
                  <div className="flex flex-col gap-[10px] w-full">
                    <div className="w-full h-[200px] md:h-[400px]">
                      <AnimatedImage
                        src="/images/social-media-kit.jpg"
                        alt="Social Media Kit"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] label">
                      <p className="paragraph-bold">Social Media Kit</p>
                      <p>
                        Streamline content creation with fully editable templates. Designed for engagement, these layouts maintain brand consistency while showcasing products with clarity and modern style.
                      </p>
                      <a
                        href="https://www.figma.com/buzz/new?from=team_template_copy_use_template_link&buzz-template-library-key=lk-fcfac213a24b78afb96ceb399079d5608f08c818cce4efb57ce45d235cf736c12115f8df3363ee120c4c9064935671637c07d711b4d8292f5147d73a9a6e9eec"
                        className="text-[#575757] underline"
                      >
                        Get Access
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="flex flex-col gap-[31px] items-start pb-[32px] pt-[128px] w-full">
          {/* Footer Content */}
          <FadeIn className="flex flex-col md:flex-row gap-[59px] md:items-end px-[16px] md:px-[40px] w-full">
            {/* Logo */}
            <div className="h-[61px] md:h-[61px] w-[240px] relative shrink-0">
              <img
                src="/images/Eternal Logo - Primary.svg"
                alt="Eternal Logo"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row flex-1 gap-[19px] md:gap-[51px] items-start md:items-end">
              <a
                href="https://drive.google.com/drive/folders/10sjW-8JdAo_Em4Aiv8CqwzCXb45ujtKa?usp=drive_link"
                className="link text-black underline"
              >
                Download Kit
              </a>
              <a
                href="https://www.facebook.com/etn.mobile"
                className="link text-black underline"
              >
                Contact Us
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="link text-black cursor-pointer bg-transparent border-none p-0 md:ml-auto"
              >
                Back to the top
              </button>
            </div>
          </FadeIn>

          {/* Bottom Bar */}
          <FadeIn className="border-t border-solid border-[rgba(0,0,0,0.1)] flex flex-col items-start justify-end pb-[20px] pt-[40px] px-[16px] md:px-[40px] w-full" delay={0.1}>
            <div className="flex flex-col md:flex-row gap-[16px] items-start label text-black w-full">
              {/* Legal */}
              <div className="flex flex-1 gap-[16px] items-center">
                <p className="mb-0">© Eternal</p>
                <p className="mb-0">All Rights Reserved</p>
              </div>

              {/* Credit */}
              <div>
                <a
                  href="https://www.zachh.site/"
                  className="label underline"
                >
                  Identity System by: <span className="font-bold">Zach</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </footer>
      </div>
    </div >
  );
}
