import { useRef, useState, useCallback } from "react";

interface Props {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfter({ before, after, beforeAlt = "Before", afterAlt = "After" }: Props) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full aspect-[16/10] overflow-hidden select-none bg-surface-2"
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <img src={after} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-y-0 w-px bg-white/90"
        style={{ left: `${pos}%` }}
        aria-hidden
      />
      <button
        type="button"
        aria-label="Drag to compare before and after"
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center size-12 rounded-full bg-background text-ink shadow-lift cursor-ew-resize"
        style={{ left: `${pos}%` }}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
          <path d="M6 1 1 7l5 6M12 1l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </button>
      <span className="absolute left-4 bottom-4 eyebrow bg-background/90 px-3 py-1.5 text-ink">Before</span>
      <span className="absolute right-4 bottom-4 eyebrow bg-ink/85 px-3 py-1.5 text-background">After</span>
    </div>
  );
}
