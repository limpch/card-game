import { io, Socket } from "socket.io-client"
import { roomListener } from "./listeners/room.listener"
import { errorListener } from "./listeners/error.listener"

class Wss {
	socket: Socket

	reconnectTimeout: NodeJS.Timeout | null = null

	constructor() {
		this.socket = io("ws://localhost:5000", {
			autoConnect: false,
		})
		this.serveConnection()
	}

	connect() {
		this.socket.io.opts.extraHeaders = {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		}
		this.socket.connect()
	}

	private serveConnection() {
		this.socket.on("connect", () => {
			console.log(this.socket.id)
			if (this.reconnectTimeout) clearTimeout(this.reconnectTimeout)
		})

		this.socket.on("disconnect", () => {
			this.reconnect()
		})

		this.socket.on("connect_error", error => {
			console.log(error)

			this.reconnect()
		})

		this.connectListeners()
	}

	private reconnect() {
		this.reconnectTimeout = setTimeout(() => {
			this.connect()
		}, 1000)
	}

	private connectListeners() {
		errorListener(this.socket)
		roomListener(this.socket)
	}
}

export const wss = new Wss()
