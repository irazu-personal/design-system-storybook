import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';

function clampWidth(width: number, minWidth: number, maxWidth: number): number {
  return Math.min(maxWidth, Math.max(minWidth, width));
}

export type UseDrawerWidthResizeOptions = {
  initialWidth: number;
  minWidth: number;
  maxWidth: number;
  onWidthChange?: (width: number) => void;
  onResizeEnd?: (width: number) => void;
};

export function useDrawerWidthResize({
  initialWidth,
  minWidth,
  maxWidth,
  onWidthChange,
  onResizeEnd,
}: UseDrawerWidthResizeOptions) {
  const [width, setWidth] = useState(() => clampWidth(initialWidth, minWidth, maxWidth));
  const [isResizing, setIsResizing] = useState(false);
  const dragRef = useRef({ startX: 0, startWidth: width });
  const widthRef = useRef(width);
  const isResizingRef = useRef(false);

  useEffect(() => {
    const next = clampWidth(initialWidth, minWidth, maxWidth);
    setWidth(next);
    widthRef.current = next;
  }, [initialWidth, minWidth, maxWidth]);

  useEffect(() => {
    widthRef.current = width;
  }, [width]);

  useEffect(() => {
    isResizingRef.current = isResizing;
  }, [isResizing]);

  const updateWidth = useCallback(
    (nextWidth: number) => {
      const clamped = clampWidth(nextWidth, minWidth, maxWidth);
      setWidth(clamped);
      widthRef.current = clamped;
      onWidthChange?.(clamped);
    },
    [maxWidth, minWidth, onWidthChange],
  );

  const handleResizePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      dragRef.current = { startX: event.clientX, startWidth: widthRef.current };
      isResizingRef.current = true;
      setIsResizing(true);
    },
    [],
  );

  const endResize = useCallback(() => {
    if (!isResizingRef.current) {
      return;
    }
    isResizingRef.current = false;
    setIsResizing(false);
    onResizeEnd?.(widthRef.current);
  }, [onResizeEnd]);

  useEffect(() => {
    if (!isResizing) {
      return undefined;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const { startX, startWidth } = dragRef.current;
      const delta = startX - event.clientX;
      updateWidth(startWidth + delta);
    };

    const handlePointerEnd = () => {
      endResize();
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerEnd);
    window.addEventListener('pointercancel', handlePointerEnd);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerEnd);
      window.removeEventListener('pointercancel', handlePointerEnd);
    };
  }, [endResize, isResizing, updateWidth]);

  return {
    width,
    isResizing,
    handleResizePointerDown,
    endResize,
  };
}
