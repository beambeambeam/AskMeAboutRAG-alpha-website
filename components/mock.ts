type MOCK_CHAT = {
  chat: string
  author: "BOT" | "USER"
  time: Date
}[]

const MOCK_CHAT: MOCK_CHAT = [
  {
    chat: "Hello there! How can I help you?",
    author: "BOT",
    time: new Date(),
  },
]

export default MOCK_CHAT
