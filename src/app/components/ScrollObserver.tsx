'use client';

import React, { useState, useEffect, useRef } from 'react';

// components
import TypeWriting from './TypeWriting';

type ScrollObserverProps = {
  children: React.ReactNode;
  title: string;
};

const ScrollObserver: React.FC<ScrollObserverProps> = ({ children, title }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const documentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    });

    // null check
    documentRef.current && observer.observe(documentRef.current);

    // clean up
    return () => {
      documentRef.current && observer.disconnect();
    };
  }, [documentRef]);

  return (
    <div ref={documentRef} className='pb-20'>
      {visible ? <TypeWriting text={`${title}`} delay={200} /> : null}
      {children}
    </div>
  );
};

export default ScrollObserver;
