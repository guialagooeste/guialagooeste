import * as React from "react"
import { cn } from "../../lib/utils" // Importa a função cn para combinar classes CSS

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm", // Classes básicas do Tailwind
      className // Permite adicionar classes extras de fora
    )}
    {...props}
  />
))
Card.displayName = "Card" // Nome para depuração

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent" // Nome para depuração

export { Card, CardContent } // Exporta os componentes para serem usados em outras partes do app