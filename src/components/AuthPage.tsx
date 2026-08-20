import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AuthPageProps {
  onAuthenticated: () => void
}

export function AuthPage({ onAuthenticated }: AuthPageProps) {
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      setError("Enter an email and password first")
      return
    }
    setError("")
    // Hook your backend auth call here (login or signup based on `mode`)
    onAuthenticated()
  }

  return (
    <div className="flex h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-medium text-foreground text-center mb-1">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-sm text-muted-foreground text-center mb-6">
          {mode === "login"
            ? "Log in to continue"
            : "Sign up to get started"}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          <Button type="submit" className="w-full mt-2">
            {mode === "login" ? "Log in" : "Sign up"}
          </Button>
        </form>

        <p className="text-sm text-muted-foreground text-center mt-6">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login")
              setError("")
            }}
            className="text-accent hover:underline font-medium"
          >
            {mode === "login" ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  )
}