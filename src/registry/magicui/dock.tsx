"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface DockProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "left" | "right" | "middle"
  magnification?: number
  distance?: number
}

interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, direction = "middle", magnification = 1.5, distance = 100, children, ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false)
    const [position, setPosition] = React.useState(0)
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!hovered) return
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      setPosition(x)
    }

    const handleMouseEnter = () => {
      setHovered(true)
    }

    const handleMouseLeave = () => {
      setHovered(false)
      setActiveIndex(null)
    }

    return (
      <div
        ref={ref}
        className={cn(
          "fixed bottom-8 left-1/2 -translate-x-1/2 flex h-16 items-center gap-2 rounded-full bg-background/80 p-2 shadow-xl backdrop-blur-md border border-border/50 z-50",
          "transition-all duration-300 hover:bg-background/90 hover:shadow-lg hover:border-primary/20",
          className,
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null

          return React.cloneElement(child as React.ReactElement<any>, {
            hovered,
            position,
            index,
            activeIndex,
            setActiveIndex,
            magnification,
            distance,
            direction,
          })
        })}
      </div>
    )
  },
)
Dock.displayName = "Dock"

const DockIcon = React.forwardRef<
  HTMLDivElement,
  DockIconProps & {
    hovered?: boolean
    position?: number
    index?: number
    activeIndex?: number | null
    setActiveIndex?: (index: number | null) => void
    magnification?: number
    distance?: number
    direction?: "left" | "right" | "middle"
  }
>(
  (
    {
      className,
      children,
      hovered,
      position,
      index,
      activeIndex,
      setActiveIndex,
      magnification = 1.5,
      distance = 100,
      direction = "middle",
      ...props
    },
    ref,
  ) => {
    const childRef = React.useRef<HTMLDivElement>(null)
    const [width, setWidth] = React.useState(0)
    const [left, setLeft] = React.useState(0)

    React.useEffect(() => {
      if (childRef.current) {
        const rect = childRef.current.getBoundingClientRect()
        setWidth(rect.width)
        setLeft(rect.left)
      }
    }, [])

    const handleMouseEnter = () => {
      if (setActiveIndex && typeof index === "number") {
        setActiveIndex(index)
      }
    }

    const handleMouseLeave = () => {
      if (setActiveIndex) {
        setActiveIndex(null)
      }
    }

    const calculateScale = () => {
      if (!hovered || typeof index !== "number" || !position) return 1

      const childPosition = left + width / 2
      const distanceFromPosition = Math.abs(position - childPosition)

      if (distanceFromPosition > distance) return 1

      const scale = 1 + (magnification - 1) * (1 - distanceFromPosition / distance)
      return scale
    }

    const scale = calculateScale()
    const isActive = activeIndex === index

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center transition-transform duration-200 px-1",
          isActive && "z-10",
          className,
        )}
        style={{
          transform: `scale(${scale})`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          ref={childRef}
          className={cn(
            "flex items-center justify-center relative",
            isActive &&
              "after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full after:opacity-70",
          )}
        >
          {children}
        </div>
      </div>
    )
  },
)
DockIcon.displayName = "DockIcon"

export { Dock, DockIcon }

