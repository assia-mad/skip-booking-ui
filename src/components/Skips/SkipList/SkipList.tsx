import type { IProcessedSkip } from "@/types";
import { SkipCard } from "../SkipCard";

interface SkipListProps {
  skips: IProcessedSkip[];
  selectedSkip: IProcessedSkip | null;
  onSelectSkip: (skip: IProcessedSkip) => void;
}

export const SkipList = ({
  skips,
  selectedSkip,
  onSelectSkip,
}: SkipListProps) => {
  return (
    <div
      className="
        grid
        grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
        gap-6 sm:gap-8 lg:gap-12
        justify-items-center
      "
    >
      {skips.map((skip) => (
        <div key={skip.id} className="w-full max-w-[420px]">
          <SkipCard
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={onSelectSkip}
          />
        </div>
      ))}
    </div>
  );
};
