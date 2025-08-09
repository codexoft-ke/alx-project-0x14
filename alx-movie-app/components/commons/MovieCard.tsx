import React from 'react';
import Image from 'next/image';

interface MovieCardProps {
  title: string;
  imageUrl?: string;
  releaseDate?: string;
  rating?: number;
  onClick?: () => void;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  imageUrl,
  releaseDate,
  rating,
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative h-64 bg-gray-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Image Available
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 truncate">
          {title}
        </h3>
        
        <div className="flex justify-between items-center text-sm text-gray-600">
          {releaseDate && (
            <span>{releaseDate}</span>
          )}
          {rating && (
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              ★ {rating.toFixed(1)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
