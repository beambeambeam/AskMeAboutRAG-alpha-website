import Header from "@/components/header"

export default function Home() {
  return (
    <div className="grid w-full grid-cols-5 gap-5 h-screen">
      <main className="col-span-2 col-end-4 px-5 mt-4">
        <Header />
      </main>
    </div>
  )
}
