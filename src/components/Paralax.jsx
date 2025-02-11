'use client';

import {
    motion,
    // useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
  } from 'framer-motion';
import { userAgent } from 'next/server';
  import { Children, useRef } from 'react';
  
  export default function Parallax({ children }) {
    const target = useRef(null);
    const hero = Children.toArray(children)[0];
    const section = Children.toArray(children)[1];
    const tup = Children.toArray(children)[2]

  
    // motion stuff
    const { scrollYProgress } = useScroll({ target });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
    // scale
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const scale2 = useSpring(useTransform(scrollYProgress, [0, 1], [0.85, 1]));
    const opacity = useTransform(scrollYProgress, [0, 0.50], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.60], [1, 0]);
  
  
    // debug
    //useMotionValueEvent(scrollYProgress, 'change', (last) => {
    //console.log('Scroll', last);
    //});
    return (
      <motion.div ref={target}>
        <motion.div style={{y, scale, opacity,}}>
          {hero}
        </motion.div>
        <motion.div style={{ scale: scale2, y: -1, opacity2, }}>{section}</motion.div>
        <motion.div style={{ scale: scale2, y: -1 }}>{tup}</motion.div>
      </motion.div>
    );
  }