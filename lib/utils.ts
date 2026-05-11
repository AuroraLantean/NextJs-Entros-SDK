import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const ll = console.log;

//------------==
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
