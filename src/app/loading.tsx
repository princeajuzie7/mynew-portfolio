import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dot-pattern">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
        <div className="relative bg-card/50 backdrop-blur-sm p-6 rounded-full border border-border/50">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
        </div>
      </div>
      <p className="mt-4 text-muted-foreground">Loading...</p>
    </div>
  )
}

