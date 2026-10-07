"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import { magazinePages } from "@/data/magazine";
import { siteConfig } from "@/data/config";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Sparkles,
  Volume2,
  RotateCcw,
} from "lucide-react";
import confetti from "canvas-confetti";

interface MagazineViewerProps {
  onOpenSecretNote?: (note: string) => void;
}

export default function MagazineViewer({ onOpenSecretNote }: MagazineViewerProps) {
  const flipBookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(magazinePages.length);
  const [zoomPage, setZoomPage] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Responsive mobile check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    setIsLoaded(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard Navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (zoomPage) return;
      if (e.key === "ArrowLeft") {
        if (flipBookRef.current?.pageFlip) {
          flipBookRef.current.pageFlip().flipPrev();
        }
      } else if (e.key === "ArrowRight") {
        if (flipBookRef.current?.pageFlip) {
          flipBookRef.current.pageFlip().flipNext();
        }
      }
    },
    [zoomPage]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handlePageFlip = (e: any) => {
    const pageIndex = e.data;
    setCurrentPage(pageIndex);

    // Trigger celebration when reaching the final page
    if (pageIndex >= magazinePages.length - 1) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#FFFFFF", "#E8E6E3"],
      });
    }
  };

  const flipPrev = () => {
    if (flipBookRef.current?.pageFlip) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const flipNext = () => {
    if (flipBookRef.current?.pageFlip) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const restartMagazine = () => {
    if (flipBookRef.current?.pageFlip) {
      flipBookRef.current.pageFlip().turnToPage(0);
    }
  };

  const handleImageError = (pageId: number) => {
    setImageErrors((prev) => ({ ...prev, [pageId]: true }));
  };

  return (
    <section id="magazine" className="relative w-full min-h-screen py-16 px-2 sm:px-4 flex flex-col items-center justify-center bg-[#070708] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-stone-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Header Info */}
      <div className="text-center mb-6 max-w-xl px-4">
        <h2 className="font-serif-editorial text-2xl sm:text-4xl text-white font-light tracking-wide">
          {siteConfig.siteTitle}
        </h2>
        <p className="text-white/50 text-xs sm:text-sm font-sans tracking-widest uppercase mt-1">
          {isMobile ? "Swipe or tap edges to flip pages" : "Click, drag edges, or use arrow keys to flip"}
        </p>
      </div>

      {/* Interactive PageFlip Container */}
      <div className="relative w-full max-w-6xl flex justify-center items-center my-4 min-h-[500px] sm:min-h-[620px]">
        {isLoaded && (
          //@ts-ignore
          <HTMLFlipBook
            width={isMobile ? 340 : 450}
            height={isMobile ? 480 : 600}
            size="fixed"
            minWidth={280}
            maxWidth={520}
            minHeight={400}
            maxHeight={700}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={handlePageFlip}
            ref={flipBookRef}
            className="stpageflip-container shadow-[0_30px_90px_rgba(0,0,0,0.85)] rounded-lg overflow-hidden"
            style={{ margin: "0 auto" }}
            startPage={0}
            drawShadow={true}
            flippingTime={800}
            usePortrait={isMobile}
            startZIndex={0}
            autoSize={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {magazinePages.map((page, index) => {
              const hasError = imageErrors[page.id];

              return (
                <div
                  key={page.id}
                  className="relative bg-[#FAF8F5] text-[#111111] overflow-hidden w-full h-full flex flex-col justify-between border-r border-black/5"
                >
                  {!hasError ? (
                    <div className="relative w-full h-full group">
                      <Image
                        src={page.image}
                        alt={page.alt}
                        fill
                        priority={index <= 2}
                        sizes="(max-width: 768px) 340px, 450px"
                        className="object-contain w-full h-full"
                        onError={() => handleImageError(page.id)}
                      />

                      {/* Zoom Trigger Button on Page Hover */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setZoomPage(page.image);
                        }}
                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md text-white p-2 rounded-full hover:bg-black"
                        title="Zoom Page"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>

                      {/* Hidden Easter Egg Note Trigger */}
                      {page.hiddenNote && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenSecretNote?.(page.hiddenNote!);
                          }}
                          className="absolute bottom-4 right-4 bg-[#D4AF37] text-black px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                        >
                          <Sparkles className="w-3.5 h-3.5" /> Secret Note
                        </button>
                      )}
                    </div>
                  ) : (
                    /* Fallback Canva Visual Renderer if exported WebP is pending */
                    <div className="w-full h-full p-8 flex flex-col justify-between font-serif-editorial bg-[#FAF8F5]">
                      <div className="border-b border-black/15 pb-4">
                        <span className="text-xs uppercase tracking-widest font-sans text-black/50">
                          {siteConfig.girlfriendName}&apos;s Memoir • Page {index + 1}
                        </span>
                        <h3 className="text-3xl text-black font-normal mt-2">
                          {page.title || `Chapter ${index + 1}`}
                        </h3>
                      </div>

                      <div className="my-auto text-center space-y-4 px-4">
                        <p className="text-lg italic text-black/75">
                          {page.caption || "Every memory with you holds a special place in our hearts."}
                        </p>
                      </div>

                      {page.hiddenNote && (
                        <button
                          onClick={() => onOpenSecretNote?.(page.hiddenNote!)}
                          className="mx-auto bg-black text-[#FAF8F5] px-4 py-2 rounded-full text-xs font-sans uppercase tracking-widest flex items-center gap-2 hover:bg-[#D4AF37] hover:text-black transition-colors"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> View Note
                        </button>
                      )}

                      <div className="border-t border-black/15 pt-3 flex justify-between items-center text-xs font-sans text-black/40">
                        <span>{siteConfig.siteTitle}</span>
                        <span>{index + 1} / {magazinePages.length}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </HTMLFlipBook>
        )}
      </div>

      {/* Navigation Controls Bar */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 z-20">
        <button
          onClick={flipPrev}
          disabled={currentPage === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all border border-white/15 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        <span className="text-white/70 text-xs font-mono tracking-widest px-4 py-2 rounded-full bg-white/5 border border-white/10">
          PAGE {currentPage + 1} OF {magazinePages.length}
        </span>

        <button
          onClick={flipNext}
          disabled={currentPage >= totalPages - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all border border-white/15 disabled:opacity-30 disabled:pointer-events-none"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>

        <button
          onClick={restartMagazine}
          className="p-2.5 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/15 border border-white/10 transition-all"
          title="Restart Magazine"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Zoom Modal */}
      {zoomPage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setZoomPage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setZoomPage(null)}
          >
            <Minimize2 className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-4xl h-[85vh]">
            <Image
              src={zoomPage}
              alt="Zoomed Magazine Page"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
