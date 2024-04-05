import { navbarItems, socialItems } from '@/constants';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { FaArrowRight } from 'react-icons/fa';
import HoverBar from './HoverBar';
import { motion } from 'framer-motion';
import { List } from './List';
import { useAnimateOnInView } from '@/hooks/useAnimateOnInView';
import { fadeIn, slideInFromBottom } from '@/lib/motion';

const Footer = () => {
  const [isHoveredEmail, setIsHoveredEmail] = useState<boolean>(false);
  const [isHoveredPhone, setIsHoveredPhone] = useState<boolean>(false);
  const [isHoveredContact, setIsHoveredContact] = useState<boolean>(false);

  const { ref: bottomTopRef, controls: bottomTopControl } = useAnimateOnInView();
  const { ref: bottomBottomRef, controls: bottomBottomControl } = useAnimateOnInView();

  return (
    <div
      id="footer"
      className="max-w-[1268px] mx-auto px-[24px] "
    >
      <motion.div
        id="footer-top"
        className="py-[120px]"
        ref={bottomTopRef}
        variants={slideInFromBottom}
        initial="hidden"
        animate={bottomTopControl}
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
                <div className="mb-[8px] text-[34px] font-bold">Nguyen Van Thoai</div>
                <div className="text-[24px] text-neutral-400 ">Front-end Developer</div>
              </div>
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
          <div className="justify-self-end">
            <motion.a
              href="/contact"
              className="flex items-center font-bold text-[52px] mb-[40px] max-w-full"
              onHoverStart={() => setIsHoveredContact(true)}
              onHoverEnd={() => setIsHoveredContact(false)}
            >
              <span>Get in touch</span>
              <motion.div
                className="ml-[6px] text-[#075fe4]"
                animate={{ translateX: isHoveredContact ? 8 : 0, transition: { duration: 0.3 } }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.a>
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
                  <motion.div
                    className="ml-[6px] text-[26px]"
                    animate={{ translateX: isHoveredEmail ? 8 : 0, transition: { duration: 0.3 } }}
                  >
                    <FaArrowRight />
                  </motion.div>
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
                  <motion.div
                    className="ml-[6px] text-[26px]"
                    animate={{ translateX: isHoveredPhone ? 8 : 0, transition: { duration: 0.3 } }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </a>
                <HoverBar isHover={isHoveredPhone} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        id="footer-bottom"
        className="py-[32px] border-t border-solid border-border"
      >
        <motion.div
          ref={bottomBottomRef}
          variants={fadeIn(0.3)}
          initial="hidden"
          animate={bottomBottomControl}
        >
          <List
            dataList={navbarItems}
            itemSyle="pr-[32px] text-[20px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
