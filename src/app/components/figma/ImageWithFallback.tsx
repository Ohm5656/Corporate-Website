import React, { useEffect, useState } from 'react'
import { optimizedImageSizes } from '../../../data/optimizedImageSizes';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [useOriginal, setUseOriginal] = useState(false)

  useEffect(() => {
    setDidError(false)
    setUseOriginal(false)
  }, [props.src])

  const handleError = () => {
    if (props.src && optimizedImageSizes[props.src] && !useOriginal) setUseOriginal(true)
    else setDidError(true)
  }

  const { src, alt, style, className, loading = 'lazy', decoding = 'async', ...rest } = props
  const dimensions = src && !useOriginal ? optimizedImageSizes[src] : undefined;
  const optimized = dimensions && src ? `${import.meta.env.BASE_URL}images${src.slice(0, -4)}.webp` : src;
  const projectSrcSet = dimensions && dimensions[0] > 480 && optimized
    ? `${optimized.slice(0,-5)}-480.webp 480w, ${optimized} ${dimensions[0]}w` : undefined;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img 
      src={optimized}
      width={dimensions?.[0]}
      height={dimensions?.[1]}
      srcSet={projectSrcSet}
      sizes={dimensions ? '(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw' : undefined}
      alt={alt} 
      className={className} 
      style={style} 
      loading={loading}
      decoding={decoding}
      {...rest} 
      onError={handleError} 
    />
  )
}
