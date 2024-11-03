import Profile from "@/components/profile"

const Header = () => {
  return (
    <header className="flex flex-col gap-5 text-black dark:text-white">
      <div className="flex flex-row items-center gap-5">
        <Profile type="BOT" className="size-10" />
        <h1 className="font-bold text-xl">AskMeAboutRAG</h1>
      </div>
      <p className="text-base font-semibold">
        How much do you know about your-self? neither LLMs do?
      </p>
    </header>
  )
}

export default Header
