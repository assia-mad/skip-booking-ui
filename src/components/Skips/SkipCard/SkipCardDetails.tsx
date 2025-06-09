import { Check } from "lucide-react";
import type { IProcessedSkip } from "@/types";
import { SkipRestrictions } from "./SkipRestrictions";
import { SelectSkipButton } from "./SelectSkipButton";

interface SkipCardDetailsProps {
  skip: IProcessedSkip;
  isSelected: boolean;
}

export const SkipCardDetails = ({ skip, isSelected }: SkipCardDetailsProps) => {
  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold text-primary-dark mb-2">
        {skip.size} Yard Skip
      </h3>
      <p className="text-base text-gray-600 mb-4">
        {skip.hire_period_days} day hire period
      </p>

      <div className="mb-5">
        <p className="text-3xl font-bold text-accent-blue">
          {skip.formattedPrice}
        </p>
        <p className="text-base text-gray-500">Inc. VAT</p>
      </div>

      {/* Restrictions */}
      <SkipRestrictions restrictions={skip.restrictions} />

      <div className="space-y-2 mb-6">
        {skip.allowed_on_road && (
          <div className="flex items-center text-success-green text-base">
            <Check className="w-5 h-5 mr-2 flex-shrink-0" />
            Road placement allowed
          </div>
        )}
        {skip.allows_heavy_waste && (
          <div className="flex items-center text-success-green text-base">
            <Check className="w-5 h-5 mr-2 flex-shrink-0" />
            Heavy waste allowed
          </div>
        )}
      </div>

      <SelectSkipButton isSelected={isSelected} isForbidden={skip.forbidden} />
    </div>
  );
};
