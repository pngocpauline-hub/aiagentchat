import { useState } from "react"
import { ChatMessage } from "@/components/ChatMessage"
import { ChatComposer } from "@/components/ChatComposer"

interface Message {
  role: "user" | "assistant"
  content: string
}

function App() {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSend = (content: string) => {
    setMessages((prev) => [...prev, { role: "user", content }])
    // Hook your AI API call here, then append the assistant reply:
    // setMessages((prev) => [...prev, { role: "assistant", content: reply }])
  }

  return (
    <div className="flex h-screen flex-col bg-background">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 pt-10">
          {messages.length === 0 ? (
            <div className="flex h-[60vh] items-center justify-center">
              <h1 className="text-2xl font-medium text-foreground">
                What can I help with?
              </h1>
            </div>
          ) : (
            messages.map((m, i) => (
              <ChatMessage key={i} role={m.role} content={m.content} />
            ))
          )}
        </div>
      </div>
      <ChatComposer onSend={handleSend} />
    </div>
  )
}

export default App