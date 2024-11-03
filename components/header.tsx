import Profile from "@/components/profile"

import ModeToggle from "./mode-toggle"

const Header = () => {
  return (
    <header className="flex flex-col gap-5 text-foreground">
      <div className="w-full justify-between flex-row flex">
        <div className="flex flex-row items-center gap-5">
          <Profile type="BOT" className="size-10" />
          <h1 className="font-bold text-xl">AskMeAboutRAG</h1>
        </div>
        <div className="flex flex-row gap-5">
          <ModeToggle />
        </div>
      </div>
      <p className="text-base font-semibold">
        How much do you know about your-self? neither LLMs do?
      </p>
    </header>
  )
}

export default Header
