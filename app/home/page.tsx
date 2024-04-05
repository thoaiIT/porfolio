import Image from 'next/image';
import React from 'react';
import hero from '@/public/images/hero.png';
import Arrow from '@/components/home/Arrow';
import More from '@/components/home/More';
import { socialItems } from '@/constants';

const page = () => {
  return (
    <div className="max-w-[1268px] mx-auto px-[24px]">
      <section
        id="home"
        className="relative pt-[146px] pb-[112px] overflow-hidden"
      >
        <div className="z-[1] relative max-w-full">
          <div className="flex gap-[28px] justify-between">
            <div className="max-w-[504px] mt-[60px] self-start">
              <div className="max-w-[148px] min-h-[8px] mb-[48px] w-full bg-white" />
              <h1 className="mb-[12px] text-[68px] font-bold leading-[1.132em]">I’m John, a Web Developer</h1>
              <p className="text-text font-semibold">
                Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis
                lacus gravida.
              </p>
              <a
                href="#about"
                className="w-[120px] h-[120px] bg-blue-700 rounded-full flex overflow-hidden text-[50px] mt-[74px] justify-center items-center"
              >
                <Arrow />
              </a>
            </div>
            <div className="max-w-[342px]">
              <div>
                <div className="flex flex-col items-start">
                  <div className="mb-[16px]">
                    <span className="font-bold uppercase">About me</span>
                  </div>
                  <p className="mb-[32px] text-text font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum
                    convallis lacus gravida.
                  </p>
                  <More content="Learn more" />
                </div>
                <div className="border-t border-solid border-[#2d343f] mt-[50px] pt-[50px] flex flex-col items-start">
                  <div className="mb-[16px]">
                    <span className="font-bold uppercase">My work</span>
                  </div>
                  <p className="mb-[32px] text-text font-semibold">
                    Purus ut faucibus pulvinar elementum integer enim neque fermentum iaculis eu non diam phasellus
                    dolor consectur.
                  </p>
                  <More content="Browse portfolio" />
                </div>
                <div className="border-t border-solid border-[#2d343f] mt-[50px] pt-[50px]">
                  <div className="mb-[24px]">
                    <span className="uppercase text-[20px] font-bold">Follow me</span>
                  </div>
                  <div className="flex justify-start gap-[28px]">
                    {socialItems.map((item, index) => {
                      const Icon = item.el;
                      return (
                        <a
                          href="/#"
                          key={item.label + index}
                          className="w-[26px] h-[26px] hover:scale-110"
                        >
                          <Icon className="w-full h-full" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center absolute inset-x-0 bottom-0">
          <Image
            src={hero}
            alt="Web Developer - Developer X"
            width={1000}
            height={1000}
            className="w-[70%] max-w-[1000px] ml-[18px] align-middle"
          />
        </div>
      </section>
      <section id="about">About section</section>
      <section id="skill">About section</section>
      <section id="portfolio">About section</section>
      <section id="blogs">About section</section>
      <section id="social">About section</section>
    </div>
  );
};

export default page;
