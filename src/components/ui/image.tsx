import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  showSkeleton?: boolean;
  skeletonClassName?: string;
  onImageLoad?: () => void;
  onImageError?: () => void;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ 
    src, 
    alt, 
    fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' font-family='system-ui' font-size='16' fill='%236b7280'%3EImage%3C/text%3E%3C/svg%3E", 
    className,
    showSkeleton = true,
    skeletonClassName,
    onImageLoad,
    onImageError,
    loading = "lazy",
    ...props 
  }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);
    const imgRef = useRef<HTMLImageElement>(null);

    // Reset states when src changes
    useEffect(() => {
      setIsLoading(true);
      setHasError(false);
      setCurrentSrc(src);
    }, [src]);

    const handleLoad = () => {
      setIsLoading(false);
      onImageLoad?.();
    };

    const handleError = () => {
      console.log('Image failed to load:', currentSrc);
      setIsLoading(false);
      if (!hasError && currentSrc !== fallbackSrc) {
        setHasError(true);
        setCurrentSrc(fallbackSrc);
        onImageError?.();
        console.log('Falling back to:', fallbackSrc);
      } else {
        console.log('Fallback image also failed:', currentSrc);
      }
    };

    return (
      <div className="relative">
        {/* Skeleton loader */}
        {isLoading && showSkeleton && (
          <Skeleton 
            className={cn(
              "absolute inset-0 w-full h-full rounded-md",
              skeletonClassName
            )} 
          />
        )}
        
        {/* Image */}
        <img
          ref={ref || imgRef}
          src={currentSrc}
          alt={alt}
          className={cn(
            "transition-opacity duration-300",
            isLoading && showSkeleton ? "opacity-0" : "opacity-100",
            className
          )}
          loading={loading}
          crossOrigin="anonymous"
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = "Image";

export { Image };