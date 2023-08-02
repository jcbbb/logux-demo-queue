import { CrossTabClient, log } from "@logux/client"

const userId = "69";
const token = "token-69";

const client = new CrossTabClient({
  subprotocol: "0.0.0",
  server: "ws://127.0.0.1:31337",
  userId,
  token
})

log(client)

client.start()
