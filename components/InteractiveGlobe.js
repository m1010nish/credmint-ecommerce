"use client";

import { useRef, useEffect, useState } from "react";

const PINS = [
  { lat: 51.5074, lon: -0.1278, color: "#f97316", label: "Europe" }, // Orange
  { lat: 25.2048, lon: 55.2708, color: "#facc15", label: "Middle East" }, // Yellow
  { lat: 22.7196, lon: 75.8577, color: "#4ade80", label: "Indore, India" } // Green
];

export function InteractiveGlobe() {
  const canvasRef = useRef(null);
  const rotationRef = useRef({ x: 0.8, y: 0.5 }); // Initial downward tilt to see from "above"
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const [dots, setDots] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2070&auto=format&fit=crop";

    img.onerror = () => {
      const fallbackDots = [];
      for (let i = 0; i < 4000; i++) {
        const phi = Math.acos(-1 + (2 * i) / 4000);
        const theta = Math.sqrt(4000 * Math.PI) * phi;
        fallbackDots.push({ x: Math.cos(theta) * Math.sin(phi), y: Math.sin(theta) * Math.sin(phi), z: Math.cos(phi) });
      }
      setDots(fallbackDots);
      setIsLoaded(true);
    };

    img.onload = () => {
      const sampleCanvas = document.createElement("canvas");
      const sampleCtx = sampleCanvas.getContext("2d");
      const width = 250;
      const height = 125;
      sampleCanvas.width = width;
      sampleCanvas.height = height;

      sampleCtx.drawImage(img, 0, 0, width, height);
      const imageData = sampleCtx.getImageData(0, 0, width, height).data;

      const newDots = [];
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          if (imageData[index] < 140) {
            const lat = (0.5 - y / height) * Math.PI;
            const lon = (x / width - 0.5) * 2 * Math.PI;
            newDots.push({
              x: Math.cos(lat) * Math.cos(lon),
              y: Math.sin(lat),
              z: Math.cos(lat) * Math.sin(lon)
            });
          }
        }
      }
      setDots(newDots);
      setIsLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !dots.length) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const radius = 680; // Large radius for the "Big" look

    const pinPoints = PINS.map(pin => {
      const phi = (90 - pin.lat) * (Math.PI / 180);
      const theta = (pin.lon + 180) * (Math.PI / 180);
      return {
        ...pin,
        pos: {
          x: Math.sin(phi) * Math.cos(theta),
          y: Math.cos(phi),
          z: Math.sin(phi) * Math.sin(theta)
        }
      };
    });

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height * 1.1; // Center shifted down for "Half" look

      if (!isDragging) {
        rotationRef.current.y += 0.0012;
      }

      const rot = rotationRef.current;
      const sinY = Math.sin(rot.y);
      const cosY = Math.cos(rot.y);
      const sinX = Math.sin(rot.x);
      const cosX = Math.cos(rot.x);

      const project = (p) => {
        let { x, y, z } = p;
        let nx = x * cosY - z * sinY;
        let nz = x * sinY + z * cosY;
        x = nx; z = nz;
        let ny = y * cosX - z * sinX;
        nz = y * sinX + z * cosX;
        y = ny; z = nz;
        return { x, y, z };
      };

      dots.forEach(dot => {
        const p = project(dot);
        if (p.z > -0.25) {
          const scale = (p.z + 2) / 3;
          const px = p.x * radius * scale + centerX;
          const py = p.y * radius * scale + centerY;

          if (py < canvas.height + 50) {
            const opacity = Math.max(0, (p.z + 0.4) / 1.4);
            ctx.beginPath();
            ctx.arc(px, py, 1.4 * scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
            ctx.fill();
          }
        }
      });

      pinPoints.forEach(pin => {
        const p = project(pin.pos);
        if (p.z > 0) {
          const scale = (p.z + 2) / 3;
          const px = p.x * radius * scale + centerX;
          const py = p.y * radius * scale + centerY;

          if (py < canvas.height) {
            ctx.save();
            ctx.shadowBlur = 25;
            ctx.shadowColor = pin.color;
            ctx.beginPath();
            ctx.arc(px, py, 5 * scale, 0, Math.PI * 2);
            ctx.fillStyle = pin.color;
            ctx.fill();

            if (pin.color === "#4ade80") {
              ctx.beginPath();
              ctx.arc(px, py, 2 * scale, 0, Math.PI * 2);
              ctx.fillStyle = "white";
              ctx.fill();
            }
            ctx.restore();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isLoaded, dots, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = (e.clientX - lastMousePosRef.current.x) * 0.005;
    const dy = (e.clientY - lastMousePosRef.current.y) * 0.005;
    rotationRef.current.y += dx;
    rotationRef.current.x += dy;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="w-full h-full flex items-end justify-center cursor-grab active:cursor-grabbing overflow-hidden">
      {!isLoaded && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-700 animate-pulse text-[10px] font-black tracking-widest uppercase">Initializing Globe...</div>}
      <canvas
        ref={canvasRef}
        width={1000}
        height={800}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="max-w-none transform translate-y-10"
      />
    </div>
  );
}
