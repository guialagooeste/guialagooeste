import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // Permite renderizar o botão como outro elemento HTML
import { cva } from "class-variance-authority" // Para criar variantes de classes CSS
import { cn } from "../../lib/utils" // Importa a função cn

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: { // Define diferentes estilos de botão
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: { // Define diferentes tamanhos de botão
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { // Estilos padrão se nenhuma variante for especificada
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button" // Renderiza como Slot se asChild for true, senão como botão
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))} // Combina as classes do Tailwind
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button" // Nome para depuração

export { Button, buttonVariants } // Exporta os componentes para serem usados em outras partes do app