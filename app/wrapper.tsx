"use client"

import { useCookies } from "react-cookie"

import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  const [cookies, setCookie] = useCookies(["uuid"])
  const { toast } = useToast()

  if (!cookies.uuid) {
    setCookie("uuid", Math.random().toString(36).slice(2))
    toast({
      title: "Welcome! ✨",
      description: "This site uses cookies 🍪 to enhance your experience.",
    })
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
