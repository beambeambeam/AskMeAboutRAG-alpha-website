import Header from "@/components/header"

export default function Home() {
  return (
    <div className="grid w-full grid-cols-5 gap-5 h-screen">
      <main className="col-span-3 col-start-2 px-5 mt-4">
        <Header />
      </main>
    </div>
  )
}
