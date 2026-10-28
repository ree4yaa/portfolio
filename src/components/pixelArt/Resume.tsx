import { useState } from 'react';
import { PixelArt } from '@/components/pixelArt';
import { PixelButton } from '@/components/pixelArt/PixelButton';
import { useReveal } from '@/components/pixelArt/useReveal';
import { FileText, Download, Sparkles, Eye, X } from 'lucide-react';
import { star } from '@/components/pixelArt/sprites';

export function Resume() {
  const { ref, visible } = useReveal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden bg-retro-bg pixel-noise">
      <div className="absolute inset-0 pixel-grid opacity-20" />

      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="text-center mb-8">
          <div className="inline-block bg-retro-bg2 border-4 border-retro-dark px-4 py-2 mb-4" style={{ boxShadow: '0 0 0 4px #39ff14, 0 0 16px rgba(57,255,20,0.2)' }}>
            <span className="font-pixel text-[8px] sm:text-[10px] text-retro-green animate-pulse">
              ★ ITEM ACQUIRED ★
            </span>
          </div>
        </div>

        {/* Item card */}
        <div
          className="relative mx-auto max-w-md bg-retro-panel border-4 border-retro-dark p-6 sm:p-8 text-center card-hover"
          style={{ boxShadow: '0 0 0 4px #39ff14, 0 0 30px rgba(57,255,20,0.25)' }}
        >
          {/* Floating sparkles */}
          <div className="absolute -top-3 -left-3 animate-float">
            <PixelArt grid={star} size={4} />
          </div>
          <div className="absolute -top-3 -right-3 animate-float-slow">
            <PixelArt grid={star} size={4} />
          </div>
          <div className="absolute -bottom-3 -left-3 animate-float-slow" style={{ animationDelay: '0.5s' }}>
            <PixelArt grid={star} size={3} />
          </div>
          <div className="absolute -bottom-3 -right-3 animate-float" style={{ animationDelay: '0.8s' }}>
            <PixelArt grid={star} size={3} />
          </div>

          {/* Item icon */}
          <div className="flex justify-center mb-4">
            <div
              className="p-4 border-4 border-retro-dark bg-retro-green/10"
              style={{ boxShadow: '0 0 16px rgba(57,255,20,0.3)' }}
            >
              <FileText size={48} className="text-retro-green" strokeWidth={2} />
            </div>
          </div>

          {/* Rarity */}
          <div className="font-pixel text-[7px] text-retro-yellow mb-2">★★★ RARE ITEM ★★★</div>

          {/* Item name */}
          <h3 className="font-pixel text-[12px] sm:text-[16px] text-retro-green">
            REEYA_RESUME.PDF
          </h3>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-6 font-mono text-xs text-retro-white/60">
            <div className="border border-retro-gray/30 py-1">
              <div className="font-pixel text-[6px] text-retro-cyan">PAGES</div>
              <div className="text-base text-retro-white">01</div>
            </div>
            <div className="border border-retro-gray/30 py-1">
              <div className="font-pixel text-[6px] text-retro-pink">FORMAT</div>
              <div className="text-base text-retro-white">PDF</div>
            </div>
            <div className="border border-retro-gray/30 py-1">
              <div className="font-pixel text-[6px] text-retro-yellow">SIZE</div>
              <div className="text-base text-retro-white">1.2MB</div>
            </div>
          </div>


            {/* Download button */}
            <PixelButton
              href="@/components/pixelArt/reeya_resume.pdf"
              target="_blank" 
              color="green"
              size="md"
              glow
              className="w-full"
            > 
              <Download size={14} /> DOWNLOAD RESUME
            </PixelButton>
          </div>
        </div>

      {/* Retro Modal Overlay for PDF Viewing */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-retro-panel border-4 border-retro-dark p-4 sm:p-6 shadow-2xl" style={{ boxShadow: '0 0 0 4px #00ffff, 0 0 40px rgba(0,255,255,0.3)' }}>
            
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4 border-b border-retro-gray/30 pb-2">
              <h3 className="font-pixel text-[10px] sm:text-[12px] text-retro-cyan">
                // INSPECTING: REEYA_RESUME.PNG
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 bg-retro-bg2 border-2 border-retro-dark text-retro-white hover:bg-red-900/50 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="w-full h-[70vh] bg-retro-bg border-2 border-retro-dark overflow-hidden">
              <embed
                src="/Resume  (1).png#view=FitH"
                type="application/png"
                width="100%"
                height="100%"
                className="w-full h-full"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => setIsOpen(false)}
                className="font-pixel text-[8px] px-4 py-2 bg-retro-dark text-retro-white border-2 border-retro-cyan hover:bg-retro-cyan hover:text-black transition-colors"
              >
                CLOSE [ESC]
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
