import { useState } from "react";
import type { IProcessedSkip } from "@/types";
import { getSkipImage } from "@/utils/functions";

import { SkipCardImage } from "./SkipCardImage";
import { SkipRestrictions } from "./SkipRestrictions";
import { SkipAllowances } from "./SkipAllowances";
import { SelectSkipButton } from "./SelectSkipButton";

interface ISkipCardProps {
  skip: IProcessedSkip;
  isSelected: boolean;
  onSelect: (skip: IProcessedSkip) => void;
}

export const SkipCard = ({ skip, isSelected, onSelect }: ISkipCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const skipImage = getSkipImage(skip.size);

  const handleClick = () => {
    if (!skip.forbidden) onSelect(skip);
  };

  const cardClasses = `
    relative bg-white rounded-xl border-2 overflow-hidden transition-all duration-300
    w-full
    ${isSelected ? "border-accent-blue shadow-lg" : "border-gray-200 hover:border-accent-blue"}
    ${skip.forbidden ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:shadow-md"}
  `;

  return (
    <div className={cardClasses} onClick={handleClick}>
      {/* Image Section */}
      <SkipCardImage
        skipSize={skip.size}
        imageUrl={skipImage}
        isSelected={isSelected}
        isForbidden={skip.forbidden}
        imageError={imageError}
        imageLoading={imageLoading}
        setImageError={setImageError}
        setImageLoading={setImageLoading}
      />

      {/* Content Section */}
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-2">
          {skip.size} Yard Skip
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
          {skip.hire_period_days} day hire period
        </p>

        <div className="mb-4 sm:mb-5">
          <p className="text-2xl sm:text-3xl font-bold text-accent-blue">
            {skip.formattedPrice}
          </p>
          <p className="text-sm sm:text-base text-gray-500">Inc. VAT</p>
        </div>

        <SkipRestrictions restrictions={skip.restrictions} />
        <SkipAllowances
          allowedOnRoad={skip.allowed_on_road}
          allowsHeavyWaste={skip.allows_heavy_waste}
        />
        <SelectSkipButton
          isSelected={isSelected}
          isForbidden={skip.forbidden}
        />
      </div>
    </div>
  );
};
