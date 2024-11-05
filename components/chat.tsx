import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightIcon } from "@/components/animated/arrow-right"

const Chat = () => {
  return (
    <div className="h-full w-full grid grid-rows-[1fr_auto]">
      <div>chat</div>
      <div className="flex w-full items-center space-x-2">
        <Input type="text" placeholder="Ask me!" />
        <Button type="submit" size="icon">
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  )
}

export default Chat
