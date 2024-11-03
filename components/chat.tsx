import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Chat = () => {
  return (
    <div className="h-full w-full grid grid-rows-[1fr_auto]">
      <div>chat</div>
      <div className="flex w-full items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  )
}

export default Chat
