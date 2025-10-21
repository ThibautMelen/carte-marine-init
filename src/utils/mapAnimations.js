// Animation utilities for the interactive map
import { gsap } from 'gsap';

class MapAnimations {
  constructor() {
    this.particles = [];
    this.waveOffset = 0;
    this.animationId = null;
    this.lastTime = 0;
  }

  // Initialize particle system
  initParticles(canvasWidth, canvasHeight, particleCount = 50) {
    this.particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        hue: 180 + Math.random() * 40,
        type: Math.random() > 0.7 ? 'sparkle' : 'bubble',
        life: Math.random() * 1000 + 500
      });
    }
  }

  // Update particles
  updateParticles(canvasWidth, canvasHeight, deltaTime) {
    this.particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Add floating motion
      particle.y += Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.1;
      
      // Update life
      particle.life -= deltaTime;
      
      // Reset particle if it goes off screen or dies
      if (particle.x < 0 || particle.x > canvasWidth || 
          particle.y < 0 || particle.y > canvasHeight || 
          particle.life <= 0) {
        particle.x = Math.random() * canvasWidth;
        particle.y = canvasHeight + Math.random() * 100;
        particle.life = Math.random() * 1000 + 500;
        particle.opacity = Math.random() * 0.6 + 0.2;
      }
      
      // Fade out near end of life
      if (particle.life < 200) {
        particle.opacity = (particle.life / 200) * 0.8;
      }
    });
  }

  // Update wave animation
  updateWaves(deltaTime) {
    this.waveOffset += deltaTime * 0.001;
  }

  // Animate zone marker entrance
  animateZoneMarkers(markers, delay = 0) {
    markers.forEach((marker, index) => {
      gsap.fromTo(marker, 
        {
          scale: 0,
          opacity: 0,
          y: marker.y + 50
        },
        {
          scale: 1,
          opacity: 1,
          y: marker.y,
          duration: 0.8,
          delay: delay + index * 0.1,
          ease: "back.out(1.7)"
        }
      );
    });
  }

  // Animate zone hover
  animateZoneHover(marker, isHovered) {
    gsap.to(marker, {
      scale: isHovered ? 1.2 : 1,
      duration: 0.3,
      ease: "power2.out"
    });
  }

  // Animate zone selection
  animateZoneSelection(marker, isSelected) {
    gsap.to(marker, {
      scale: isSelected ? 1.3 : 1,
      duration: 0.4,
      ease: "elastic.out(1, 0.3)"
    });
  }

  // Animate tooltip follow cursor
  animateTooltip(tooltip, targetX, targetY, lag = 0.1) {
    gsap.to(tooltip, {
      x: targetX,
      y: targetY,
      duration: lag,
      ease: "power2.out"
    });
  }

  // Animate modal entrance
  animateModalEntrance(modal, fromX, fromY) {
    gsap.fromTo(modal, 
      {
        scale: 0,
        opacity: 0,
        x: fromX - window.innerWidth / 2,
        y: fromY - window.innerHeight / 2
      },
      {
        scale: 1,
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }
    );
  }

  // Animate modal content stagger
  animateModalContent(contentElements, delay = 0.2) {
    gsap.fromTo(contentElements, 
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: delay,
        ease: "power2.out"
      }
    );
  }

  // Animate modal exit
  animateModalExit(modal, callback) {
    gsap.to(modal, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: callback
    });
  }

  // Animate map zoom
  animateZoom(canvas, targetZoom, duration = 0.5) {
    gsap.to(canvas, {
      scale: targetZoom,
      duration: duration,
      ease: "power2.out"
    });
  }

  // Animate map pan
  animatePan(canvas, targetX, targetY, duration = 0.5) {
    gsap.to(canvas, {
      x: targetX,
      y: targetY,
      duration: duration,
      ease: "power2.out"
    });
  }

  // Touch gesture detection
  detectTouchGestures(touches, prevTouches) {
    if (touches.length === 1 && prevTouches.length === 1) {
      // Single finger pan
      return {
        type: 'pan',
        deltaX: touches[0].clientX - prevTouches[0].clientX,
        deltaY: touches[0].clientY - prevTouches[0].clientY
      };
    } else if (touches.length === 2 && prevTouches.length === 2) {
      // Two finger pinch/zoom
      const currentDistance = this.getDistance(
        touches[0].clientX, touches[0].clientY,
        touches[1].clientX, touches[1].clientY
      );
      const prevDistance = this.getDistance(
        prevTouches[0].clientX, prevTouches[0].clientY,
        prevTouches[1].clientX, prevTouches[1].clientY
      );
      
      return {
        type: 'pinch',
        scale: currentDistance / prevDistance,
        centerX: (touches[0].clientX + touches[1].clientX) / 2,
        centerY: (touches[0].clientY + touches[1].clientY) / 2
      };
    }
    
    return null;
  }

  // Get distance between two points
  getDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // Animate section entrance with ScrollTrigger
  animateSectionEntrance(section) {
    gsap.fromTo(section, 
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // Animate legend icons
  animateLegendIcons(icons) {
    gsap.fromTo(icons, 
      {
        scale: 0,
        rotation: -180
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: "back.out(1.7)"
      }
    );
  }

  // Animate zone cards grid
  animateZoneCards(cards) {
    gsap.fromTo(cards, 
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out"
      }
    );
  }

  // Animate CTA button
  animateCTAButton(button) {
    gsap.fromTo(button, 
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        delay: 1,
        ease: "back.out(1.7)"
      }
    );
    
    // Continuous hover animation
    gsap.to(button, {
      scale: 1.05,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }

  // Cleanup animations
  cleanup() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    gsap.killTweensOf("*");
  }
}

export default MapAnimations;
