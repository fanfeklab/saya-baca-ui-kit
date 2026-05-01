import * as React from "react"
import { cn } from "@/lib/utils"

interface NeoTextProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLSpanElement | HTMLParagraphElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  variant?: "title" | "subtitle" | "body"
  stroke?: boolean
}

export const NeoText = React.forwardRef<HTMLElement, NeoTextProps>(
  ({ className, as, variant = "body", stroke = false, children, ...props }, ref) => {
    
    // Determine default tag based on variant
    const defaultTag = variant === "title" ? "h1" : variant === "subtitle" ? "h2" : "p";
    const Component = as || defaultTag;

    const baseClasses = cn(
      "font-bold tracking-tight",
      {
        "text-4xl md:text-6xl": variant === "title",
        "text-2xl md:text-3xl": variant === "subtitle",
        "text-lg": variant === "body",
      },
      stroke && "text-shadow-neo", // custom utility we will add if needed, or inline style
      className
    )

    // Using an inline text-stroke for the true stroke effect
    const style = stroke ? {
      textShadow: variant === "title" ? "4px 4px 0 rgba(0,0,0,0.8)" : "2px 2px 0 rgba(0,0,0,0.8)",
      WebkitTextStroke: "1px var(--color-border)",
      color: "#FFFFFF" // Force white for stroked text to ensure contrast
    } : undefined

    return React.createElement(
      Component,
      {
        ref,
        className: baseClasses,
        style: { ...style, ...props.style },
        ...props
      },
      children
    )
  }
)
NeoText.displayName = "NeoText"
