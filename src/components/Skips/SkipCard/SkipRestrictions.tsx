import { AlertTriangle } from "lucide-react";

interface Props {
  restrictions: string[];
}

export const SkipRestrictions = ({ restrictions }: Props) => {
  if (!restrictions.length) return null;

  return (
    <div className="mb-4 space-y-2">
      {restrictions.map((text, index) => (
        <div
          key={index}
          className="flex items-center text-warning-amber text-base"
        >
          <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};
