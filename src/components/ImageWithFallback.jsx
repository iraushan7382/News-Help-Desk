import React, { useState, useEffect, useRef } from 'react';
import { Newspaper } from 'lucide-react';

export default function ImageWithFallback({
  src,
  alt = 'News illustration',
  className = '',
  category = 'News',
  priority = false
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // Reset state whenever src changes to avoid persisting error states
  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
    
    // If the image is already cached by browser, handle immediately
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth > 0) {
        setIsLoaded(true);
      }
    }
  }, [src]);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 text-slate-400 p-6 text-center select-none border border-slate-200/80 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-full bg-white/90 shadow-xs flex items-center justify-center mb-2 text-slate-600 border border-slate-200/60">
          <Newspaper className="w-6 h-6 stroke-[1.5]" />
        </div>
        <span className="text-xs uppercase tracking-widest font-bold text-slate-600 font-sans">
          {category}
        </span>
        <span className="text-[11px] text-slate-400 mt-1 line-clamp-1 italic font-serif">
          Photo Archive • Daily News Desk
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" 
          aria-hidden="true"
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
