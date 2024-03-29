import React, { useRef } from 'react';
import Image from 'next/image';
import nvt from '@/public/images/nvt.svg';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { useDimensions } from '@/hooks/useDimensions';
import { cn } from '@/lib/utils';
import { MenuItem } from './MenuItem';

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

const items = ['Home', 'About', 'Blogs', 'Portfolio'];

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="py-9">
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
        <div className="flex justify-end items-center">
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Portfolio</li>
          </ul>
          <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
          >
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-full bg-[#2d343f]"
              variants={sidebar}
            >
              <div className="h-full w-full flex justify-center items-center">
                <motion.ul>
                  {items.map((i) => (
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
