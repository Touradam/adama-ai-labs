import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function withBasePath(path: string): string {
  // For Next.js, usually no base path is needed
  // If you deploy to a subdirectory, set basePath in next.config.ts
  return path;
}
