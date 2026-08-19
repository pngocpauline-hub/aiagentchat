interface ChatMessageProps {
  role: "user" | "assistant"
  content: string
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  if (role === "user") {
    return (
      <div className="flex justify-end mb-6">
        <div className="max-w-[75%] rounded-2xl bg-card border border-border px-4 py-3 text-[15px] leading-relaxed text-foreground shadow-sm">
          {content}
        </div>
      </div>
    )
  }

  return (
    <div className="mb-6">
      <div className="max-w-[75%] text-[15px] leading-relaxed text-foreground whitespace-pre-wrap">
        {content}
      </div>
    </div>
  )
}