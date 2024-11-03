"use client"

import React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "./ui/button"

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ModeToggle
