import { navbarItems, socialItems } from '@/constants';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { FaArrowRight } from 'react-icons/fa';
import NavItem from './NavItem';
import HoverBar from './HoverBar';
import { motion } from 'framer-motion';

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isHoveredEmail, setIsHoveredEmail] = useState<boolean>(false);
  const [isHoveredPhone, setIsHoveredPhone] = useState<boolean>(false);

  return (
    <div
      id="footer"
      className="max-w-[1268px] mx-auto px-[24px] "
    >
      <div
        id="footer-top"
        className="py-[120px]"
      >
        <div className="grid items-center grid-cols-2 gap-[28px]">
          <div>
            <div className="flex items-center mb-[40px]">
              <Avatar className="min-w-[132px] min-h-[132px] mr-[24px]">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="mb-[8px] text-[34px] font-bold">John Carter</div>
                <div className="text-[24px] text-neutral-400 ">Head of Engineering at Google</div>
              </div>
            </div>
            <div className="flex justify-start gap-[28px]">
              {socialItems.map((item, index) => {
                const Icon = item.el;
                return (
                  <a
                    href="/#"
                    key={item.label + index}
                    className="w-[26px] h-[26px]"
                  >
                    <Icon className="w-full h-full" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="justify-self-end">
            <a
              href="/contact"
              className="flex items-center font-bold text-[52px] mb-[40px] max-w-full"
            >
              <span>Get in touch</span>
              <div className="ml-[6px] text-[#075fe4]">
                <FaArrowRight />
              </div>
            </a>
            <div className="flex gap-[28px]">
              <motion.div
                className="flex flex-col"
                onHoverStart={() => setIsHoveredEmail(true)}
                onHoverEnd={() => setIsHoveredEmail(false)}
              >
                <span className="text-[#c3cad5] uppercase font-bold text-[16px]">Email me:</span>
                <a
                  href="mailto:thoainguye.forwork@gmail.com"
                  className="mt-[16px] max-w-full flex items-center"
                >
                  <span className="text-[22px] font-bold">thoainguyen.forwork@gm.com</span>
                  <div className="ml-[6px] text-[26px]">
                    <FaArrowRight />
                  </div>
                </a>
                <HoverBar isHover={isHoveredEmail} />
              </motion.div>
              <motion.div
                className="flex flex-col"
                onHoverStart={() => setIsHoveredPhone(true)}
                onHoverEnd={() => setIsHoveredPhone(false)}
              >
                <span className="text-[#c3cad5] uppercase font-bold text-[16px]">Call me:</span>
                <a
                  href="mailto:thoainguye.forwork@gmail.com"
                  className="mt-[16px] max-w-full flex items-center"
                >
                  <span className="text-[22px] font-bold">0338 002 874</span>
                  <div className="ml-[6px] text-[26px]">
                    <FaArrowRight />
                  </div>
                </a>
                <HoverBar isHover={isHoveredPhone} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="footer-bottom"
        className="py-[32px] border-t border-solid border-border"
      >
        <ul className="flex justify-start">
          {navbarItems.map((i, index) => (
            <NavItem
              key={i + index}
              isDimmed={hoveredItem !== null && hoveredItem !== index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className="pr-[32px]"
            >
              <a
                href={`/${i.toLowerCase()}`}
                className="p-0 text-[20px]"
              >
                {i}
              </a>
            </NavItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
