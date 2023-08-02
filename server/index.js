import { Server } from "@logux/server";
import { createServer } from "http";

const server = new Server(
  Server.loadOptions(process, {
    subprotocol: "0.0.0",
    supports: "0.x"
  })
)

server.auth(() => true)

server.listen()
