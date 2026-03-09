'use client';

import { useState, useCallback } from 'react';

interface UseCarouselGestureOptions {
  minSwipeDistance: number;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export function useCarouselGesture({ minSwipeDistance, onSwipeLeft, onSwipeRight }: UseCarouselGestureOptions) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    setDragOffset(currentTouch - touchStart);
  }, [touchStart]);

  const onTouchEnd = useCallback(() => {
    setIsDragging(false);
    setDragOffset(0);

    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      onSwipeLeft();
    } else if (distance < -minSwipeDistance) {
      onSwipeRight();
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, minSwipeDistance, onSwipeLeft, onSwipeRight]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || touchStart === null) return;
    setDragOffset(e.clientX - touchStart);
  }, [isDragging, touchStart]);

  const onMouseUp = useCallback((e: React.MouseEvent) => {
    if (!isDragging || touchStart === null) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - e.clientX;
    if (distance > minSwipeDistance) {
      onSwipeLeft();
    } else if (distance < -minSwipeDistance) {
      onSwipeRight();
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
  }, [isDragging, touchStart, minSwipeDistance, onSwipeLeft, onSwipeRight]);

  const onMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      setTouchStart(null);
    }
  }, [isDragging]);

  return {
    isDragging,
    dragOffset,
    handlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseLeave,
    },
  };
}
