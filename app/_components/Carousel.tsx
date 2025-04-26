// app/_components/Carousel.tsx
'use client';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  const checkOverflow = () => {
    if (scrollRef.current) {
      setShowArrows(scrollRef.current.scrollWidth > scrollRef.current.clientWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <div className="relative w-full flex justify-start">
      <div className="max-w-[1440px] mx-auto px-4 relative">
        {showArrows && (
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 -translate-x-4"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 py-4 pl-[calc(50%-8rem)]"
          onScroll={checkOverflow}
        >
          {children}
        </div>

        {showArrows && (
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 translate-x-4"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}