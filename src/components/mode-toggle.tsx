"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[8rem] rounded-lg border border-border/50 bg-background/95 backdrop-blur-sm p-2"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
          {theme === "light" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
          {theme === "dark" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <span>System</span>
          {theme === "system" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

