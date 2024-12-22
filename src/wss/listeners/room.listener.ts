import { IRoomInfo } from "@/types/room"
import { useRoomState } from "@/state/room.state"
import { Socket } from "socket.io-client"

export const roomListener = (socket: Socket) => {
	socket.on("room:created", (room: IRoomInfo) => {
		const roomCreated = useRoomState.getState().roomCreated
		roomCreated(room)
	})

	socket.on("room:joined", (room: IRoomInfo) => {
		const roomJoined = useRoomState.getState().roomJoined
		roomJoined(room)
	})

	socket.on("room:update:joined", (room: IRoomInfo) => {
		const playerJoined = useRoomState.getState().playerJoined
		playerJoined(room)
	})

	socket.on("room:update:leaved", (room: IRoomInfo) => {
		const playerLeaved = useRoomState.getState().playerLeaved
		playerLeaved(room)
	})

	socket.on("room:update:startTimer", (timer: number) => {
		const playerTimerUpdated = useRoomState.getState().startGameTimerUpdated
		playerTimerUpdated(timer)
	})
}
