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
    fallbackSrc = "/placeholder.svg", 
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
      setIsLoading(false);
      if (!hasError && currentSrc !== fallbackSrc) {
        setHasError(true);
        setCurrentSrc(fallbackSrc);
        onImageError?.();
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
            "transition-opacity duration-200",
            isLoading && showSkeleton ? "opacity-0" : "opacity-100",
            className
          )}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = "Image";

export { Image };