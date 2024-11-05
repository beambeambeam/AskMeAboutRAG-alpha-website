import Chat from "@/components/chat"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="grid w-full grid-cols-5 gap-5 h-screen bg-light dark:bg-dark bg-cover bg-no-repeat bg-top">
      <main className="col-span-3 col-start-2 px-5 my-12 grid grid-rows-[autu_1fr] gap-6">
        <Header />
        <Chat />
      </main>
    </div>
  )
}
