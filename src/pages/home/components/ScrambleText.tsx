import { useEffect, useRef, useState } from 'react';
import { useMotionEnabled } from '../../../utils/motion';
import { scrambleFrame } from '../../../utils/scramble';

export function ScrambleText({ text, delay = 0, duration = 950 }: { text: string; delay?: number; duration?: number }) {
  const element = useRef<HTMLSpanElement>(null);
  const played = useRef(new Set<string>());
  const [frame, setFrame] = useState<string | null>(null);
  const motionEnabled = useMotionEnabled();

  useEffect(() => {
    if (!motionEnabled) { setFrame(null); return; }
    if (played.current.has(text)) return;
    let cancelled = false;
    let animation = 0;
    let observer: IntersectionObserver | undefined;
    let started = false;

    function start() {
      if (started || cancelled || played.current.has(text)) return;
      started = true;
      observer?.disconnect();
      // Wait for the heading font before reserving character widths.
      Promise.resolve(document.fonts?.ready).then(() => {
        if (cancelled) return;
        played.current.add(text);
        const begin = window.performance.now() + delay;
        setFrame(scrambleFrame(text, 0));
        let lastFrame = -Infinity;
        function tick(now: number) {
          if (cancelled) return;
          if (now >= begin + duration) { setFrame(null); return; }
          if (now >= begin && now - lastFrame >= 45) {
            setFrame(scrambleFrame(text, (now - begin) / duration));
            lastFrame = now;
          }
          animation = requestAnimationFrame(tick);
        }
        animation = requestAnimationFrame(tick);
      });
    }

    if (typeof IntersectionObserver === 'function' && element.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) start();
      }, { threshold: 0.25 });
      observer.observe(element.current);
    } else start();

    return () => { cancelled = true; cancelAnimationFrame(animation); observer?.disconnect(); };
  }, [text, delay, duration, motionEnabled]);

  const glyphs = frame === null ? null : Array.from(frame);
  let position = 0;
  return <span ref={element} className={`digital-text${frame !== null ? ' is-scrambling' : ''}`}>
    <span className="digital-source sr-only">{text}</span>
    <span className="digital-display" aria-hidden="true">
      {text.split(/(\s+)/u).map((word, wordIndex) => {
        if (/^\s+$/u.test(word)) { position += Array.from(word).length; return word; }
        return <span className="digital-word" key={wordIndex}>{Array.from(word).map((character, index) => {
          const glyph = glyphs?.[position++];
          return <span className="digital-cell" key={index}><span className="digital-reserve">{character}</span>{glyphs && <span className="digital-visual digital-glyph" aria-hidden="true">{glyph}</span>}</span>;
        })}</span>;
      })}
    </span>
  </span>;
}
