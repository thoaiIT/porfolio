import React, { useRef } from 'react';
import Image from 'next/image';
import nvt from '@/public/images/nvt.svg';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { useDimensions } from '@/hooks/useDimensions';
import { navbarItems } from '@/constants';
import { List } from './List';
import { sidebar } from '@/lib/motion';

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      id="header"
      className="py-[36px] max-w-[1268px] mx-auto px-[24px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <motion.a
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
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
          <List
            dataList={navbarItems}
            listStyle="flex justify-end"
            itemSyle="pl-[32px] text-[20px]"
          />
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
                <List
                  dataList={navbarItems}
                  itemSyle="my-5 text-8xl font-bold"
                  listStyle="flex flex-col"
                />
              </div>
            </motion.div>
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
