import { Check } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface SkipCardImageProps {
  imageUrl: string;
  skipSize: number;
  isSelected: boolean;
  isForbidden: boolean;
  imageError: boolean;
  imageLoading: boolean;
  setImageError: (value: boolean) => void;
  setImageLoading: (value: boolean) => void;
}

export const SkipCardImage = ({
  imageUrl,
  skipSize,
  isSelected,
  isForbidden,
  imageError,
  imageLoading,
  setImageError,
  setImageLoading,
}: SkipCardImageProps) => {
  return (
    <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-200">
      {!imageError ? (
        <img
          src={imageUrl}
          alt={`${skipSize} yard skip`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => {
            setImageLoading(false);
            setImageError(false);
          }}
          onError={() => {
            setImageError(true);
            setImageLoading(false);
          }}
        />
      ) : (
        <ImagePlaceholder label={`${skipSize} Yard Skip`} />
      )}

      {imageLoading && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <div className="animate-spin w-6 h-6 border-b-2 border-accent-blue rounded-full" />
        </div>
      )}

      {isForbidden && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="bg-error-red text-white px-4 py-2 text-sm font-semibold rounded-full">
            Not Available
          </span>
        </div>
      )}

      {isSelected && (
        <div className="absolute top-4 left-4 bg-success-green text-white p-1.5 rounded-full shadow-md">
          <Check className="w-5 h-5" />
        </div>
      )}

      <div className="absolute top-4 right-4 bg-accent-blue text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-sm">
        {skipSize} Yards
      </div>
    </div>
  );
};
