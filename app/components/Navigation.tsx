"use client";

import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "01", label: "About The Brand", sectionId: "section-01" },
    { id: "02", label: "Logo", sectionId: "section-02" },
    { id: "03", label: "Color", sectionId: "section-03" },
    { id: "04", label: "Typography", sectionId: "section-04" },
    { id: "05", label: "Visual Style", sectionId: "section-05" },
    { id: "06", label: "Brand Collaterals", sectionId: "section-06" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Sidebar (1280px+) */}
      <nav className="hidden min-[1280px]:flex bg-white flex-col gap-[24px] items-start pb-[30px] pt-0 px-0 shrink-0 fixed top-0 left-[max(0px,calc((100vw-1920px)/2))] w-[250px] h-screen z-50">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Eternal Logo"
          className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col items-start justify-center overflow-clip pl-[32px] pr-[20px] py-[30px] w-full bg-transparent border-none cursor-pointer p-0"
        >
          <div className="h-[31.937px] w-[124.8px]">
            <img
              src="/images/Eternal Logo - Primary.svg"
              alt="Eternal Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </button>

        {/* Navigation Links */}
        <ol className="border-b border-solid border-[rgba(0,0,0,0.1)] flex flex-col gap-[10px] items-start pb-[30px] pl-[32px] pr-[20px] pt-0 w-full list-none">
          {navItems.map((item) => (
            <li key={item.id} className="w-full">
              <button
                onClick={() => scrollToSection(item.sectionId)}
                aria-label={`Navigate to ${item.label.toLowerCase()} section`}
                className="flex items-start w-full text-left p-0 bg-transparent border-none cursor-pointer group"
              >
                <span className="font-medium text-[15px] tracking-[-0.3px] leading-[1.2] text-black group-hover:text-[#575757] transition-colors">
                  {item.label}
                </span>
                <span className="font-light text-[10px] leading-[1.2] tracking-[-0.2px] text-[#575757] group-hover:text-[#18ae54] transition-colors">
                  {item.id}
                </span>
              </button>
            </li>
          ))}
        </ol>

        {/* Contact Links */}
        <div className="flex flex-col items-start pl-[32px] pr-[20px] py-0 w-full gap-[8px]">
          <a
            href="https://drive.google.com/drive/folders/10sjW-8JdAo_Em4Aiv8CqwzCXb45ujtKa?usp=drive_link"
            className="font-medium text-[#575757] text-[15px] leading-[1.2] tracking-[-0.3px] underline hover:text-black transition-colors"
          >
            Download Kit
          </a>
          <a
            href="https://www.facebook.com/etn.mobile"
            className="font-medium text-[#575757] text-[15px] leading-[1.2] tracking-[-0.3px] underline hover:text-black transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Tablet Navigation - Horizontal (800px - 1279px) */}
      <nav className="hidden min-[800px]:flex min-[1280px]:hidden bg-white border-b border-solid border-[rgba(0,0,0,0.1)] flex-col items-start px-[32px] w-full sticky top-0 z-50">
        {/* Top Bar */}
        <div className="flex gap-[8px] items-center justify-between py-[14px] w-full">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-[24.055px] w-[94px] bg-transparent border-none cursor-pointer p-0"
          >
            <img
              src="/images/Eternal Logo - Primary.svg"
              alt="Eternal Logo"
              className="w-full h-full object-contain"
            />
          </button>
          <div className="flex gap-[12px] items-center font-medium text-[#575757] text-[13px] leading-[1.2] tracking-[-0.13px]">
            <a
              href="https://drive.google.com/drive/folders/10sjW-8JdAo_Em4Aiv8CqwzCXb45ujtKa?usp=drive_link"
              className="hover:text-black transition-colors"
            >
              Download Kit
            </a>
            <a
              href="https://www.facebook.com/etn.mobile"
              className="hover:text-black transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="border-t border-solid border-[rgba(0,0,0,0.1)] flex items-center justify-between py-[14px] w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className="flex items-center gap-1 font-medium text-[15px] tracking-[-0.3px] leading-[1.2] text-black bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity p-0"
            >
              <span>{item.label}</span>
              <span className="font-light text-[#575757] text-[10px] tracking-[-0.2px]">
                {item.id}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation (1px - 799px) */}
      <nav className="min-[800px]:hidden bg-white w-full sticky top-0 z-50">
        {/* Header */}
        <div className="flex items-center justify-between py-[16px] px-[16px] border-b border-solid border-[rgba(0,0,0,0.1)]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-[24.055px] w-[94px] bg-transparent border-none cursor-pointer p-0"
          >
            <img
              src="/images/Eternal Logo - Primary.svg"
              alt="Eternal Logo"
              className="w-full h-full object-contain"
            />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="font-medium text-[15px] text-black tracking-[-0.3px] leading-[1.2] bg-transparent border-none cursor-pointer"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="flex flex-col gap-[24px] items-start pt-[24px] px-[16px] pb-[32px] bg-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.sectionId);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 font-medium text-[15px] tracking-[-0.3px] leading-[1.2] text-black bg-transparent border-none cursor-pointer text-left p-0 w-full hover:opacity-70 transition-opacity"
              >
                <span>{item.label}</span>
                <span className="font-light text-[#b1b1b1] text-[10px] tracking-[-0.2px]">
                  {item.id}
                </span>
              </button>
            ))}

            <div className="h-[1px] bg-[rgba(0,0,0,0.1)] w-full"></div>

            <a
              href="https://drive.google.com/drive/folders/10sjW-8JdAo_Em4Aiv8CqwzCXb45ujtKa?usp=drive_link"
              className="font-medium text-[#575757] text-[15px] leading-[1.2] tracking-[-0.3px] underline"
            >
              Download Kit
            </a>

            <a
              href="https://www.facebook.com/etn.mobile"
              className="font-medium text-[#575757] text-[15px] leading-[1.2] tracking-[-0.3px] underline"
            >
              Contact Us
            </a>

            <div className="h-[1px] bg-[rgba(0,0,0,0.1)] w-full"></div>
          </div>
        )}
      </nav>
    </>
  );
}
