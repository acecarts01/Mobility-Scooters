import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Catalogue price, e.g. "$3,495 AUD". Pair with GST_FREE_LABEL — all scooters are GST-free (GST Act 1999, s 38-45). */
export function formatAud(price: number) {
  return `$${price.toLocaleString('en-AU', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} AUD`
}

export const GST_FREE_LABEL = '(GST-Free)'
