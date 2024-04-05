import React, { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ItemType } from '@/constants';
interface ItemProps {
  children: ReactNode;
  isDimmed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}

interface ListProps {
  listStyle?: string;
  itemSyle?: string;
  dataList: ItemType[];
}

export const List = ({ listStyle, dataList, itemSyle }: ListProps) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <ul className={cn('flex justify-start', listStyle)}>
      {dataList.map((i, index) => (
        <Item
          key={i.label + index}
          isDimmed={hoveredItem !== null && hoveredItem !== index}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
          className={itemSyle}
        >
          <a href={i.url}>{i.label}</a>
        </Item>
      ))}
    </ul>
  );
};

export const Item = ({ children, isDimmed, onMouseEnter, onMouseLeave, className }: ItemProps) => {
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
