import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames) {
    // Combine class names using clsx (if available) for potential performance optimizations
    if (typeof clsx === 'function') {
      return twMerge(clsx(...classNames));
    }
  
    // If clsx is not available, fall back to a basic string concatenation approach
    return twMerge(classNames.join(' '));
  }