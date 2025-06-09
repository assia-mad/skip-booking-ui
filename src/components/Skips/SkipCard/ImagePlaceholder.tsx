import { Package } from "lucide-react";

interface Props {
  label: string;
}

export const ImagePlaceholder = ({ label }: Props) => (
  <div className="flex flex-col items-center justify-center h-full text-gray-400">
    <Package className="w-16 h-16 mb-3" />
    <span className="text-base font-medium">{label}</span>
  </div>
);
