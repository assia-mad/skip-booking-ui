import { Button } from "@/components";

interface SelectSkipButtonProps {
  isSelected: boolean;
  isForbidden: boolean;
}

export const SelectSkipButton = ({
  isSelected,
  isForbidden,
}: SelectSkipButtonProps) => {
  const label = isSelected
    ? "✓ Selected"
    : isForbidden
      ? "Not Available"
      : "Select This Skip";

  const variant = isSelected ? "selected" : "ghost";

  return (
    <Button fullWidth disabled={isForbidden} variant={variant}>
      {label}
    </Button>
  );
};
