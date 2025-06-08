// Base styles
export const base =
  "flex items-center justify-center gap-1.5 rounded-full font-medium transition-all duration-300";

// Size variants
export const size = {
  mobile: "h-8 px-3 text-[10px] w-20",
  desktop: "px-8 py-4 text-base cursor-pointer",
};

// Status variants
export const status = {
  current: {
    mobile: "bg-accent-blue text-white shadow-md scale-110",
    desktop:
      "bg-accent-blue text-white shadow-2xl scale-105 ring-4 ring-accent-blue/20",
  },
  completed: {
    mobile: "bg-accent-yellow text-primary-dark",
    desktop:
      "bg-accent-yellow text-primary-dark hover:shadow-xl hover:scale-105",
  },
  upcoming: {
    mobile: "bg-gray-100 text-gray-400",
    desktop:
      "bg-accent-light/30 text-gray-400 border-2 border-dashed border-gray-300",
  },
};

// Icon styles
export const checkContainer =
  "w-5 h-5 bg-primary-dark rounded-full flex items-center justify-center flex-shrink-0";
export const checkIcon = "w-3 h-3 text-accent-yellow";
export const checkMobile = "font-bold text-[10px]";
export const currentDot =
  "w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0";
export const stepNumber = "opacity-60 text-[10px]";
