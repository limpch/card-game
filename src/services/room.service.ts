import { wss } from "@/wss/wss"

class RoomService {
	private slug: string = "room"

	createRoom() {
		wss.socket.emit(this.slug + ":create")
	}

	joinRoom(roomId: string) {
		wss.socket.emit(this.slug + ":join", roomId)
	}

	leaveRoom() {
		wss.socket.emit(this.slug + ":leave")
	}
}

export const roomService = new RoomService()
