import { type IProgressStep } from "@/types";

export const BOOKING_STEPS: IProgressStep[] = [
  { id: 1, label: "Postcode", status: "completed" },
  { id: 2, label: "Waste Type", status: "completed" },
  { id: 3, label: "Select Skip", status: "current" },
  { id: 4, label: "Permit Check", status: "upcoming" },
  { id: 5, label: "Choose Date", status: "upcoming" },
  { id: 6, label: "Payment", status: "upcoming" },
];

export const MOBILE_BREAKPOINT = 768;
