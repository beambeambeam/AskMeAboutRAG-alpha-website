type MOCK_CHAT = {
  chat: string
  author: "BOT" | "USER"
  time: Date
}[]

const MOCK_CHAT: MOCK_CHAT = [
  {
    chat: "Hi! How can I assist you today?",
    author: "BOT",
    time: new Date("2023-11-05T10:00:00"),
  },
  {
    chat: "Hi, I wanted to discuss using large language models with patient medical records. Is that feasible?",
    author: "USER",
    time: new Date("2023-11-05T10:01:15"),
  },
  {
    chat: "Absolutely! LLMs can provide support in processing and interpreting medical records. What are you looking to achieve?",
    author: "BOT",
    time: new Date("2023-11-05T10:01:45"),
  },
  {
    chat: "Mainly looking to enhance data retrieval and make clinical decision support more efficient. Do LLMs handle sensitive data well?",
    author: "USER",
    time: new Date("2023-11-05T10:02:20"),
  },
  {
    chat: "Great goals! Handling sensitive data is a key consideration. LLMs can be configured to respect privacy by anonymizing records and ensuring compliance with data regulations.",
    author: "BOT",
    time: new Date("2023-11-05T10:03:00"),
  },
  {
    chat: "Sounds good. How would I go about training the model on a specific medical dataset?",
    author: "USER",
    time: new Date("2023-11-05T10:03:40"),
  },
  {
    chat: "You would need a dataset of de-identified records. Then, the model can be fine-tuned on this data, helping it learn relevant medical terminology and patient patterns.",
    author: "BOT",
    time: new Date("2023-11-05T10:04:15"),
  },
  {
    chat: "How long does fine-tuning typically take, and what resources are required?",
    author: "USER",
    time: new Date("2023-11-05T10:04:55"),
  },
  {
    chat: "It depends on the dataset size and the model. For medical records, expect several hours to days on high-performance GPUs, depending on the model's complexity.",
    author: "BOT",
    time: new Date("2023-11-05T10:05:30"),
  },
  {
    chat: "Alright, once the model is trained, how would it be integrated with an electronic health record (EHR) system?",
    author: "USER",
    time: new Date("2023-11-05T10:06:10"),
  },
  {
    chat: "You'd typically use an API to bridge the EHR and the LLM. This setup allows the model to process queries in real-time while the EHR securely stores patient data.",
    author: "BOT",
    time: new Date("2023-11-05T10:06:45"),
  },
  {
    chat: "I see. And is there a way to limit what the model can access from the EHR at any time?",
    author: "USER",
    time: new Date("2023-11-05T10:07:10"),
  },
  {
    chat: "Definitely. Access controls and permissions are set to restrict the LLM’s queries to necessary information only, ensuring data minimization and privacy compliance.",
    author: "BOT",
    time: new Date("2023-11-05T10:07:45"),
  },
  {
    chat: "That's helpful. Is it also possible to track the LLM's outputs for audit purposes?",
    author: "USER",
    time: new Date("2023-11-05T10:08:20"),
  },
  {
    chat: "Yes, most setups allow logging of queries and responses, providing an audit trail. This is especially useful for compliance and quality assurance.",
    author: "BOT",
    time: new Date("2023-11-05T10:08:50"),
  },
  {
    chat: "Alright, that gives me a clearer picture. Thanks for the info!",
    author: "USER",
    time: new Date("2023-11-05T10:09:10"),
  },
  {
    chat: "You're very welcome! Let me know if there’s anything else I can help you with.",
    author: "BOT",
    time: new Date("2023-11-05T10:09:25"),
  },
  {
    chat: "Sure thing. Have a great day!",
    author: "USER",
    time: new Date("2023-11-05T10:09:40"),
  },
]

export default MOCK_CHAT
