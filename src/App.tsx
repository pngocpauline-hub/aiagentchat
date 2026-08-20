import { useState } from "react"
import { ChatMessage } from "@/components/ChatMessage"
import { ChatComposer } from "@/components/ChatComposer"
import { Sidebar } from "@/components/Sidebar"
import { AuthPage } from "@/components/AuthPage"

interface Message {
  role: "user" | "assistant"
  content: string
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handleSend = (content: string) => {
    setMessages((prev) => [...prev, { role: "user", content }])
  }

  if (!isAuthenticated) {
    return <AuthPage onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="relative flex-1 flex flex-col overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 680 400"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e9d9fb" />
              <stop offset="50%" stopColor="#dce6fb" />
              <stop offset="100%" stopColor="#d7e9fb" />
            </linearGradient>
            <radialGradient id="glowA" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a97ee0" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a97ee0" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glowB" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6fa3ec" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#6fa3ec" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="680" height="400" fill="url(#bgGrad2)" />
          <circle cx="110" cy="90" r="120" fill="url(#glowA)" />
          <circle cx="570" cy="310" r="140" fill="url(#glowB)" />
          <circle cx="430" cy="70" r="90" fill="url(#glowB)" />
          <circle cx="200" cy="330" r="100" fill="url(#glowA)" />
          <g fill="#8a4fd1">
            <path d="M90 50 L98 74 L122 78 L102 94 L108 118 L90 105 L72 118 L78 94 L58 78 L82 74 Z" />
          </g>
          <g fill="#3f7fdb">
            <path d="M310 30 L316 48 L334 51 L320 63 L324 81 L310 71 L296 81 L300 63 L286 51 L304 48 Z" />
          </g>
          <g fill="#9a5fe0">
            <path d="M545 110 L552 132 L574 135 L557 149 L562 171 L545 159 L528 171 L533 149 L516 135 L538 132 Z" />
          </g>
          <g fill="#3f7fdb">
            <path d="M620 190 L625 205 L640 207 L628 217 L631 232 L620 224 L609 232 L612 217 L600 207 L615 205 Z" />
          </g>
          <g fill="#9a5fe0">
            <path d="M60 240 L65 254 L79 256 L68 265 L71 279 L60 271 L49 279 L52 265 L41 256 L55 254 Z" />
          </g>
          <g fill="#3f7fdb">
            <path d="M450 260 L457 280 L477 283 L461 295 L465 315 L450 304 L435 315 L439 295 L423 283 L443 280 Z" />
          </g>
          <g fill="#8a4fd1">
            <path d="M230 190 L235 204 L249 206 L238 215 L241 229 L230 221 L219 229 L222 215 L211 206 L225 204 Z" />
          </g>
          <g fill="#3f7fdb">
            <path d="M150 150 L154 162 L166 164 L157 172 L160 184 L150 177 L140 184 L143 172 L134 164 L146 162 Z" />
          </g>
          <g fill="#9a5fe0">
            <path d="M400 340 L404 351 L415 353 L407 360 L410 371 L400 365 L390 371 L393 360 L385 353 L396 351 Z" />
          </g>
          <g fill="#ffffff">
            <circle cx="240" cy="100" r="3" />
            <circle cx="380" cy="150" r="2.6" />
            <circle cx="500" cy="90" r="3" />
            <circle cx="600" cy="260" r="2.6" />
            <circle cx="340" cy="230" r="2.4" />
            <circle cx="130" cy="290" r="2.6" />
            <circle cx="480" cy="340" r="2.4" />
            <circle cx="270" cy="60" r="2.4" />
            <circle cx="40" cy="180" r="2.6" />
            <circle cx="560" cy="180" r="2.4" />
            <circle cx="180" cy="230" r="2.2" />
            <circle cx="330" cy="330" r="2.4" />
          </g>
        </svg>

        <div className="relative flex-1 overflow-y-auto">
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
        <div className="relative">
          <ChatComposer onSend={handleSend} />
        </div>
      </div>
    </div>
  )
}

export default App
