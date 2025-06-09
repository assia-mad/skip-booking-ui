import type { IProcessedSkip } from "@/types";
import { CheckCircle, X, Calendar, Truck } from "lucide-react";
import { Button } from "@/components";

interface SkipSummaryProps {
  skip: IProcessedSkip;
  onClear: () => void;
}

export const SkipSummary = ({ skip, onClear }: SkipSummaryProps) => {
  return (
    <div className="relative w-full max-w-[1600px] mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm">
      {/* Cancel Icon */}
      <button
        onClick={onClear}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        aria-label="Clear selection"
      >
        <X className="w-7 h-7" />
      </button>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
        {/* Info Section */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-accent-blue" />
            <h3 className="text-xl font-bold text-primary-dark">
              {skip.size} Yard Skip Selected
            </h3>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 pl-9">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{skip.hire_period_days} day hire period</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span>
                {skip.allowed_on_road
                  ? "Road placement allowed"
                  : "Private property only"}
              </span>
            </div>
          </div>
        </div>

        {/* Price + Button with spacing */}
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-6 pr-[3.5rem] mt-2 sm:mt-0">
          <div className="text-right sm:text-left">
            <p className="text-sm text-gray-600">Total price (inc. VAT)</p>
            <p className="text-3xl font-bold text-accent-blue">
              {skip.formattedPrice}
            </p>
          </div>

          <Button variant="primary" className="px-8 py-3">
            Proceed to Booking
          </Button>
        </div>
      </div>
    </div>
  );
};
