import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavItemProps {
  children: ReactNode;
  isDimmed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}

const NavItem = ({ children, isDimmed, onMouseEnter, onMouseLeave, className }: NavItemProps) => {
  return (
    <motion.li
      onHoverStart={onMouseEnter}
      onHoverEnd={onMouseLeave}
      animate={{ opacity: isDimmed ? 0.3 : 1 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.li>
  );
};

export default NavItem;
