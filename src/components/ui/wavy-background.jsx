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
  const [isMobile, setIsMobile] = useState(false);
  
  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return isMobile ? 0.0005 : 0.001; // Vitesse réduite sur mobile
      case "fast":
        return isMobile ? 0.001 : 0.002;
      default:
        return isMobile ? 0.0005 : 0.001;
    }
  };
 
  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${isMobile ? blur * 0.7 : blur}px)`; // Flou légèrement réduit sur mobile
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${isMobile ? blur * 0.7 : blur}px)`;
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
    // Réduire le nombre de vagues sur mobile
    const waveCount = isMobile ? Math.min(n, 3) : n;
    
    nt += getSpeed();
    for (i = 0; i < waveCount; i++) {
      ctx.beginPath();
      // Ajuster la largeur des vagues sur mobile
      const mobileWaveWidthAdjustment = isMobile ? 0.7 : 1;
      ctx.lineWidth = (waveWidth || 50) * mobileWaveWidthAdjustment;
      
      // Garantir l'utilisation des couleurs fournies
      const colorIndex = i % waveColors.length;
      ctx.strokeStyle = waveColors[colorIndex];
      
      // Calculer l'inclinaison en fonction de la largeur du canvas
      const slopeAmount = h * (isMobile ? slope * 0.6 : slope); // Inclinaison réduite sur mobile
      
      // Calculer l'espacement entre les vagues diagonales
      const waveSpacing = h * (isMobile ? 0.2 : 0.15); // Espacement plus grand sur mobile
      const waveStartY = diagonal ? h * 0.8 - (i * waveSpacing) : h * 0.5;
      
      // Ajuster la densité des points pour mobile (augmenter l'étape)
      const step = isMobile ? 8 : 5; // Moins de points = moins de calculs
      
      for (x = 0; x < w; x += step) {
        // Point de départ différent pour chaque vague dans le mode diagonal
        let baseY;
        
        if (diagonal) {
          // Pour les vagues diagonales: commencer en bas à gauche et monter vers la droite
          // La pente diagonale est calculée en fonction de la position x
          const diagonalSlope = h * (isMobile ? 0.3 : 0.4); // Pente réduite sur mobile
          const diagonalOffset = (x / w) * diagonalSlope;
          baseY = waveStartY - diagonalOffset;
        } else {
          // Pour les vagues horizontales: utiliser l'inclinaison standard
          const inclinaison = (x / w) * slopeAmount * (i % 2 === 0 ? 1 : -1);
          baseY = h * 0.5 - inclinaison;
        }
        
        // Ajouter le bruit de Perlin pour créer des ondulations
        // Réduire l'amplitude sur mobile pour éviter que les vagues ne se chevauchent trop
        const amplitudeAdjustment = isMobile ? 0.7 : 1;
        const noiseValue = noise(x / 800, 0.3 * i, nt) * 100 * amplitudeAdjustment;
        
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
    drawWave(isMobile ? 3 : 5); // Moins de vagues sur mobile
    animationId = requestAnimationFrame(render);
  };
 
  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]); // Réinitialiser lorsque le mode mobile change
 
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
          ...(isSafari ? { filter: `blur(${isMobile ? blur * 0.7 : blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
}; 