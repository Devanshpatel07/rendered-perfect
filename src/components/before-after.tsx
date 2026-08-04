import { useRef, useState, useCallback, useEffect } from "react";

interface Props {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfter({ before, after, beforeAlt = "Before render transformation", afterAlt = "After render transformation" }: Props) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(1, Math.min(99, x)));
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePos(clientX);
    };

    const handleEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleEnd);
    window.addEventListener("touchcancel", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
      window.removeEventListener("touchcancel", handleEnd);
    };
  }, [updatePos]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden select-none bg-surface-2 touch-none rounded-sm group"
      onMouseDown={(e) => {
        isDragging.current = true;
        updatePos(e.clientX);
      }}
      onTouchStart={(e) => {
        isDragging.current = true;
        updatePos(e.touches[0].clientX);
      }}
    >
      {/* After image (Background layer) */}
      <img src={after} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />

      {/* Before image (Clipped foreground layer) */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={before} alt={beforeAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      </div>

      {/* Dividing line */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-md z-10 pointer-events-none"
        style={{ left: `${pos}%` }}
        aria-hidden
      />

      {/* Handle Button */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 grid place-items-center size-11 sm:size-12 rounded-full bg-background text-ink shadow-lift cursor-ew-resize active:scale-95 transition-transform"
        style={{ left: `${pos}%` }}
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
          <path d="M6 1 1 7l5 6M12 1l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 eyebrow text-[0.65rem] sm:text-xs bg-background/90 backdrop-blur-sm px-2.5 py-1 text-ink shadow-sm pointer-events-none">
        Before
      </span>
      <span className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 eyebrow text-[0.65rem] sm:text-xs bg-ink/90 backdrop-blur-sm px-2.5 py-1 text-background shadow-sm pointer-events-none">
        After
      </span>
    </div>
  );
}

