import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export type CursorMode = 'default' | 'pointer' | 'project' | 'cta' | 'hidden';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouch(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouch(!e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Determine element under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const ctaElement = target.closest('[data-cursor="cta"]');
      const interactive = target.closest('button, a, input, textarea, select, [role="button"], [data-cursor="pointer"]');

      if (projectCard) {
        setCursorMode('project');
      } else if (ctaElement) {
        setCursorMode('cta');
      } else if (interactive) {
        setCursorMode('pointer');
      } else {
        setCursorMode('default');
      }
    };

    const handleMouseLeave = () => {
      setCursorMode('hidden');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isTouch || cursorMode === 'hidden') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden">
      {/* Outer follow circle / pill */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 flex items-center justify-center font-code text-[11px] font-medium tracking-wider uppercase select-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
          width: cursorMode === 'project' ? 110 : cursorMode === 'cta' ? 100 : cursorMode === 'pointer' ? 44 : 32,
          height: cursorMode === 'project' ? 44 : cursorMode === 'cta' ? 44 : cursorMode === 'pointer' ? 44 : 32,
          backgroundColor:
            cursorMode === 'project' || cursorMode === 'cta'
              ? 'rgba(244, 244, 245, 0.95)'
              : cursorMode === 'pointer'
              ? 'rgba(255, 255, 255, 0.12)'
              : 'transparent',
          color: cursorMode === 'project' || cursorMode === 'cta' ? '#09090b' : '#ffffff',
          borderColor:
            cursorMode === 'project' || cursorMode === 'cta'
              ? 'transparent'
              : cursorMode === 'pointer'
              ? 'rgba(255, 255, 255, 0.4)'
              : 'rgba(255, 255, 255, 0.35)',
          borderRadius: cursorMode === 'project' || cursorMode === 'cta' ? '24px' : '50%'
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5
        }}
        style={{
          borderWidth: cursorMode === 'project' || cursorMode === 'cta' ? 0 : 1,
          borderStyle: 'solid',
          backdropFilter: cursorMode === 'pointer' ? 'blur(4px)' : 'none'
        }}
      >
        {cursorMode === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-1 font-semibold text-[10px] tracking-wider"
          >
            VIEW CASE ↗
          </motion.span>
        )}
        {cursorMode === 'cta' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-1 font-semibold text-[10px] tracking-wider"
          >
            LET'S TALK
          </motion.span>
        )}
      </motion.div>

      {/* Tiny center precision dot (when in default mode) */}
      {cursorMode === 'default' && (
        <motion.div
          className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-white"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            translateX: '-50%',
            translateY: '-50%'
          }}
          transition={{
            type: 'spring',
            damping: 40,
            stiffness: 800,
            mass: 0.1
          }}
        />
      )}
    </div>
  );
}
