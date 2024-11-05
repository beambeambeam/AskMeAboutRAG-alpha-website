"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightIcon } from "@/components/animated/arrow-right"

import MOCK_CHAT from "./mock"

const Chat = () => {
  return (
    <div className="h-full w-full grid grid-rows-[1fr_auto] gap-10">
      <div
        className="h-[calc(100vh-16rem)] overflow-y-auto overflow-x-hidden no-scrollbar"
        ref={(el) => {
          if (el) {
            el.scrollTop = el.scrollHeight
          }
        }}
      >
        {MOCK_CHAT.map((item, index) => {
          return (
            <div className="text-3xl" key={index}>
              <div>{item.author}</div>
              <div>{item.chat}</div>
            </div>
          )
        })}
      </div>
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
