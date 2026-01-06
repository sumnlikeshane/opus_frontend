import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface CursorBubbleProps {
  text: string;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  className?: string;
}

const CursorBubble: React.FC<CursorBubbleProps> = ({
  text,
  children,
  bgColor = '#0a0a0a',
  textColor = 'white',
  fontSize = '14px',
  padding = '12px 24px',
  borderRadius = '9999px',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    setIsHovered(true);
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      {children}
      {isHovered &&
        createPortal(
          <div
            className={className}
            style={{
              position: 'fixed',
              left: cursorPos.x,
              top: cursorPos.y,
              transform: 'translate(-50%, -70%)',
              backgroundColor: bgColor,
              color: textColor,
              fontSize,
              padding,
              borderRadius,
              pointerEvents: 'none',
              zIndex: 9999,
              whiteSpace: 'nowrap',
              boxShadow:
                '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
            }}
          >
            {text}
          </div>,
          document.body
        )}
    </div>
  );
};

export default CursorBubble;
