import React, { useRef, useState } from 'react';
import Image from 'next/image';
import nvt from '@/public/images/nvt.svg';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { useDimensions } from '@/hooks/useDimensions';
import { cn } from '@/lib/utils';
import { MenuItem } from './MenuItem';
import { navbarItems } from '@/constants';
import NavItem from './NavItem';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at center)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at center)',
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div
      id="header"
      className="py-[36px] max-w-[1268px] mx-auto px-[24px]"
    >
      <div className="flex justify-between items-center">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="/"
          className="z-[2] flex gap-2 relative"
        >
          <Image
            src={nvt}
            alt="logo"
            className="max-w-[40px]"
          />
          <span className="text-3xl absolute top-0 bottom-0 left-10 flex items-center font-semibold w-max">
            Developer X
          </span>
        </motion.a>
        <div className="flex justify-end items-center pr-[78px]">
          <ul className="flex justify-end">
            {navbarItems.map((i, index) => (
              <NavItem
                key={i + index}
                isDimmed={hoveredItem !== null && hoveredItem !== index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className="pl-[32px]"
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
          <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
          >
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-full bg-[#2d343f] z-10"
              variants={sidebar}
            >
              <div className="h-full w-full flex justify-center items-center">
                <motion.ul>
                  {navbarItems.map((i) => (
                    <MenuItem
                      i={i}
                      key={i}
                    />
                  ))}
                </motion.ul>
              </div>
            </motion.div>
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
