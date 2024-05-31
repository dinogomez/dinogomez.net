import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYearsOfExperience(yearStart:number) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearStart;
}
