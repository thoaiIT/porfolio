import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useAnimateOnInView = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
    if (!isInView) {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return { ref, controls };
};
