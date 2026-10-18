import Image from 'next/image';

export default function SmartImage({ 
  src, 
  alt, 
  width = 1600, 
  height = 1200, 
  priority = false, 
  className = "" 
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className="object-cover w-full h-full"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
