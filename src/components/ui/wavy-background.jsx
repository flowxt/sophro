"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
 
export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  slope = 0.05,
  diagonal = false,
  ...props
}) => {
  const noise = createNoise3D();
  let w,
    h,
    nt,
    i,
    x,
    ctx,
    canvas;
  const canvasRef = useRef(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };
 
  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };
 
  // Couleurs par défaut - uniquement des nuances de bronze/cuivre
  const defaultColors = [
    "#F9D1AB", // bronze clair
    "#E5B78F", // bronze plus foncé
    "#D39E76", // bronze moyen
    "#A45C40", // bronze foncé
    "#C17B57", // bronze intermédiaire
  ];
  
  // S'assurer que les couleurs des props sont utilisées en priorité
  const waveColors = colors || defaultColors;
  
  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      
      // Garantir l'utilisation des couleurs fournies
      const colorIndex = i % waveColors.length;
      ctx.strokeStyle = waveColors[colorIndex];
      
      // Calculer l'inclinaison en fonction de la largeur du canvas
      const slopeAmount = h * slope; // Inclinaison proportionnelle à la hauteur
      
      // Calculer l'espacement entre les vagues diagonales
      const waveSpacing = h * 0.15;
      const waveStartY = diagonal ? h * 0.8 - (i * waveSpacing) : h * 0.5;
      
      for (x = 0; x < w; x += 5) {
        // Point de départ différent pour chaque vague dans le mode diagonal
        let baseY;
        
        if (diagonal) {
          // Pour les vagues diagonales: commencer en bas à gauche et monter vers la droite
          // La pente diagonale est calculée en fonction de la position x
          const diagonalSlope = h * 0.4; // Détermine la pente de la diagonale
          const diagonalOffset = (x / w) * diagonalSlope;
          baseY = waveStartY - diagonalOffset;
        } else {
          // Pour les vagues horizontales: utiliser l'inclinaison standard
          const inclinaison = (x / w) * slopeAmount * (i % 2 === 0 ? 1 : -1);
          baseY = h * 0.5 - inclinaison;
        }
        
        // Ajouter le bruit de Perlin pour créer des ondulations
        const noiseValue = noise(x / 800, 0.3 * i, nt) * 100;
        
        // Position finale du point avec ondulation
        const y = baseY + noiseValue;
        
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };
 
  let animationId;
  const render = () => {
    ctx.fillStyle = backgroundFill || "rgba(255, 255, 255, 0.9)"; // Fond blanc avec légère transparence
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };
 
  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
 
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // Support pour Safari
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);
 
  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
}; 