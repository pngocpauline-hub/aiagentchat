import { useState, useRef } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatComposerProps {
  onSend: (message: string) => void
}

export function ChatComposer({ onSend }: ChatComposerProps) {
  const [value, setValue] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = () => {
    if (!value.trim()) return
    onSend(value)
    setValue("")
    if (textareaRef.current) textareaRef.current.style.height = "auto"
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    e.target.style.height = "auto"
    e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-6">
      <div className="flex items-end gap-2 rounded-3xl border border-border bg-card px-4 py-3 shadow-sm">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Reply..."
          rows={1}
          className="flex-1 resize-none bg-transparent text-[15px] leading-relaxed text-foreground placeholder:text-muted-foreground focus:outline-none max-h-[200px]"
        />
        <button
          onClick={handleSend}
          disabled={!value.trim()}
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
            value.trim()
              ? "bg-accent hover:opacity-90 text-accent-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  )
}