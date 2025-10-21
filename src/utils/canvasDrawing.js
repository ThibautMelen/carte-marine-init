// Canvas drawing utilities for the interactive map
class CanvasDrawer {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  // Clear canvas with animated gradient background
  clearCanvas(animationTime = 0) {
    const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
    
    // Animated ocean colors
    const hue1 = 200 + Math.sin(animationTime * 0.001) * 10;
    const hue2 = 220 + Math.sin(animationTime * 0.0015) * 15;
    
    gradient.addColorStop(0, `hsl(${hue1}, 60%, 85%)`);
    gradient.addColorStop(0.5, `hsl(${hue2}, 70%, 75%)`);
    gradient.addColorStop(1, `hsl(${hue1 + 20}, 80%, 65%)`);
    
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  // Draw animated wave pattern
  drawWaves(animationTime = 0) {
    this.ctx.save();
    this.ctx.globalAlpha = 0.3;
    
    for (let i = 0; i < 3; i++) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = `hsl(${200 + i * 20}, 60%, 70%)`;
      this.ctx.lineWidth = 2;
      
      const waveOffset = animationTime * 0.002 + i * 100;
      const amplitude = 20 + i * 10;
      
      for (let x = 0; x < this.width; x += 2) {
        const y = this.height * 0.7 + Math.sin((x + waveOffset) * 0.01) * amplitude;
        if (x === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.stroke();
    }
    
    this.ctx.restore();
  }

  // Draw France outline with more detail
  drawFranceOutline() {
    this.ctx.save();
    
    // France path (more detailed than SVG version)
    const francePath = new Path2D(`
      M 120 180 
      L 180 160 L 250 170 L 320 165 L 400 180 L 480 170 L 560 180 L 620 200 
      L 680 220 L 720 250 L 700 300 L 680 350 L 650 400 L 620 450 
      L 580 480 L 520 490 L 460 485 L 400 475 L 340 460 L 280 440 
      L 220 420 L 180 400 L 150 380 L 130 360 L 120 320 L 125 280 
      L 130 240 L 120 180 Z
    `);
    
    // Land gradient
    const landGradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
    landGradient.addColorStop(0, '#E8D5C4');
    landGradient.addColorStop(0.5, '#D4C4B0');
    landGradient.addColorStop(1, '#6B7C8C');
    
    this.ctx.fillStyle = landGradient;
    this.ctx.fill(francePath);
    
    // Coastline stroke
    this.ctx.strokeStyle = '#2C5F7F';
    this.ctx.lineWidth = 2;
    this.ctx.stroke(francePath);
    
    this.ctx.restore();
  }

  // Draw zone marker with glow effect
  drawZoneMarker(x, y, radius, isHovered, isSelected, animationTime = 0) {
    this.ctx.save();
    
    // Glow effect
    if (isHovered || isSelected) {
      const glowRadius = radius + 15 + Math.sin(animationTime * 0.005) * 5;
      const glowGradient = this.ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
      glowGradient.addColorStop(0, 'rgba(255, 111, 97, 0.6)');
      glowGradient.addColorStop(0.5, 'rgba(255, 111, 97, 0.3)');
      glowGradient.addColorStop(1, 'rgba(255, 111, 97, 0)');
      
      this.ctx.fillStyle = glowGradient;
      this.ctx.beginPath();
      this.ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
      this.ctx.fill();
    }
    
    // Main marker
    const pulseScale = 1 + Math.sin(animationTime * 0.008) * 0.1;
    const markerRadius = radius * pulseScale;
    
    const markerGradient = this.ctx.createRadialGradient(x, y - markerRadius/2, 0, x, y, markerRadius);
    if (isSelected) {
      markerGradient.addColorStop(0, '#FF6F61');
      markerGradient.addColorStop(1, '#E55A4A');
    } else if (isHovered) {
      markerGradient.addColorStop(0, '#FF8A7A');
      markerGradient.addColorStop(1, '#FF6F61');
    } else {
      markerGradient.addColorStop(0, '#4A90B8');
      markerGradient.addColorStop(1, '#2C5F7F');
    }
    
    this.ctx.fillStyle = markerGradient;
    this.ctx.beginPath();
    this.ctx.arc(x, y, markerRadius, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Inner highlight
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    this.ctx.beginPath();
    this.ctx.arc(x - markerRadius/3, y - markerRadius/3, markerRadius/4, 0, Math.PI * 2);
    this.ctx.fill();
    
    this.ctx.restore();
  }

  // Draw zone label
  drawZoneLabel(x, y, text, isHovered) {
    this.ctx.save();
    
    // Text shadow
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    this.ctx.shadowBlur = 2;
    this.ctx.shadowOffsetX = 1;
    this.ctx.shadowOffsetY = 1;
    
    // Text style
    this.ctx.font = isHovered ? 'bold 14px Inter, sans-serif' : 'bold 12px Inter, sans-serif';
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    
    this.ctx.fillText(text, x, y);
    this.ctx.restore();
  }

  // Draw particles (bubbles, sparkles)
  drawParticles(particles) {
    particles.forEach(particle => {
      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      
      if (particle.type === 'bubble') {
        // Bubble
        this.ctx.strokeStyle = `hsl(${particle.hue}, 60%, 70%)`;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Bubble highlight
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.beginPath();
        this.ctx.arc(particle.x - particle.size/3, particle.y - particle.size/3, particle.size/4, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (particle.type === 'sparkle') {
        // Sparkle
        this.ctx.fillStyle = `hsl(${particle.hue}, 80%, 80%)`;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
      
      this.ctx.restore();
    });
  }

  // Draw compass rose
  drawCompassRose(x, y, size = 40) {
    this.ctx.save();
    
    // Outer circle
    this.ctx.strokeStyle = '#2C5F7F';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, Math.PI * 2);
    this.ctx.stroke();
    
    // North arrow
    this.ctx.fillStyle = '#FF6F61';
    this.ctx.beginPath();
    this.ctx.moveTo(x, y - size);
    this.ctx.lineTo(x - 5, y - size + 10);
    this.ctx.lineTo(x + 5, y - size + 10);
    this.ctx.closePath();
    this.ctx.fill();
    
    // N label
    this.ctx.fillStyle = '#2C5F7F';
    this.ctx.font = 'bold 10px Inter, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('N', x, y - size - 5);
    
    this.ctx.restore();
  }

  // Draw zoom controls
  drawZoomControls(zoom, maxZoom, minZoom) {
    const buttonSize = 30;
    const margin = 20;
    
    // Zoom in button
    this.drawZoomButton(this.width - margin - buttonSize, margin, buttonSize, '+', zoom < maxZoom);
    
    // Zoom out button
    this.drawZoomButton(this.width - margin - buttonSize, margin + buttonSize + 5, buttonSize, '-', zoom > minZoom);
    
    // Zoom level indicator
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(44, 95, 127, 0.8)';
    this.ctx.font = '12px Inter, sans-serif';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(`${Math.round(zoom * 100)}%`, this.width - margin, this.height - margin);
    this.ctx.restore();
  }

  drawZoomButton(x, y, size, text, enabled) {
    this.ctx.save();
    
    // Button background
    this.ctx.fillStyle = enabled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)';
    this.ctx.strokeStyle = '#2C5F7F';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.roundRect(x, y, size, size, 5);
    this.ctx.fill();
    this.ctx.stroke();
    
    // Button text
    this.ctx.fillStyle = enabled ? '#2C5F7F' : '#999';
    this.ctx.font = 'bold 16px Inter, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(text, x + size/2, y + size/2);
    
    this.ctx.restore();
  }

  // Utility: Check if point is inside circle
  isPointInCircle(px, py, cx, cy, radius) {
    const dx = px - cx;
    const dy = py - cy;
    return dx * dx + dy * dy <= radius * radius;
  }

  // Utility: Get distance between two points
  getDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

export default CanvasDrawer;
