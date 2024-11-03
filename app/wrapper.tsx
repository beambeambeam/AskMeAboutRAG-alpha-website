"use client"

import { useCookies } from "react-cookie"

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  const [cookies, setCookie] = useCookies(["uuid"])

  if (!cookies.uuid) {
    setCookie("uuid", Math.random().toString(36).slice(2))
  }

  return <>{children}</>
}
