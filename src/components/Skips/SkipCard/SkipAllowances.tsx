import { Check } from "lucide-react";

interface SkipAllowancesProps {
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
}

export const SkipAllowances = ({
  allowedOnRoad,
  allowsHeavyWaste,
}: SkipAllowancesProps) => {
  if (!allowedOnRoad && !allowsHeavyWaste) return null;

  return (
    <div className="space-y-2 mb-6">
      {allowedOnRoad && (
        <div className="flex items-center text-success-green text-base">
          <Check className="w-5 h-5 mr-2 flex-shrink-0" />
          Road placement allowed
        </div>
      )}
      {allowsHeavyWaste && (
        <div className="flex items-center text-success-green text-base">
          <Check className="w-5 h-5 mr-2 flex-shrink-0" />
          Heavy waste allowed
        </div>
      )}
    </div>
  );
};
