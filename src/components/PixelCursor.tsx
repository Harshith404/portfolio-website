import { useEffect, useRef } from 'react';

const PixelCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Pixel art definition for a cleaner, sleeker pointer arrow
    const cursorShape = [
      "X",
      "XX",
      "XXX",
      "XXXX",
      "XXXXX",
      "XXXXXX",
      "XXXXXXX",
      "XXXXXXXX",
      "XXXXXXXXX",
      "XXXXXXXXXX",
      "XXXXXX",
      "XXX XX",
      "XX  XX",
      "X    XX",
      "     XX",
      "      XX",
      "      XX"
    ];
    
    // Extract coordinates from the string grid
    const cursorPixels: [number, number][] = [];
    for (let y = 0; y < cursorShape.length; y++) {
      for (let x = 0; x < cursorShape[y].length; x++) {
        if (cursorShape[y][x] === 'X') {
          cursorPixels.push([x, y]);
        }
      }
    }
    
    const pixelSize = 2; // Reduced from 3 to make the cursor smaller

    const drawCursor = (x: number, y: number, alpha: number, color: string = '255, 255, 255') => {
      ctx.fillStyle = `rgba(${color}, ${alpha})`;
      for (const [px, py] of cursorPixels) {
        ctx.fillRect(x + px * pixelSize, y + py * pixelSize, pixelSize, pixelSize);
      }
    };

    let mouseX = width / 2;
    let mouseY = height / 2;
    
    // Store past positions: {x, y, age, color}
    const trail: {x: number, y: number, age: number, color: string}[] = [];
    const MAX_AGE = 15; // How quickly the ghost trail fades (lower = faster)
    
    // To get "shades of blue" over a white background with mix-blend-difference,
    // we must actually draw their inverted colors.
    // To get very LIGHT shades of blue, we draw very DARK shades of brown/orange.
    const glitchColors = [
      '108, 58, 2',   // Inverts to light blue (blue-300)
      '64, 36, 1',    // Inverts to very light blue (blue-200)
      '36, 21, 1',    // Inverts to icy blue (blue-100)
      '159, 90, 5',   // Inverts to soft blue (blue-400)
    ];
    let colorIndex = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Add a clone of the cursor to the trail history at the current position
      trail.push({ 
        x: mouseX, 
        y: mouseY, 
        age: 0,
        color: glitchColors[colorIndex % glitchColors.length]
      });
      colorIndex++;
    };
    document.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw the ghosting trail first (so it stays underneath the main cursor)
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.age += 1;
        
        if (p.age >= MAX_AGE) {
          trail.splice(i, 1); // Remove old ghosts
        } else {
          // Calculate alpha so it fades out from 0.5 to 0 over its lifetime
          const alpha = (1 - (p.age / MAX_AGE)) * 0.8;
          drawCursor(p.x, p.y, alpha, p.color); 
        }
      }

      // Draw the main leading cursor at 100% opacity (pure white so it inverts perfectly)
      drawCursor(mouseX, mouseY, 1, '255, 255, 255');

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block fixed inset-0 z-[200] pointer-events-none mix-blend-difference"
    />
  );
};

export default PixelCursor;
