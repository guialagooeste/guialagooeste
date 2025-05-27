import { clsx } from "clsx" // Biblioteca para construir strings de classes condicionalmente
import { twMerge } from "tailwind-merge" // Biblioteca para mesclar classes Tailwind

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}