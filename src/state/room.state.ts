import { IRoomInfo } from "@/types/room"
import { create } from "zustand"
import { useNotificationsState } from "./notifications.state"

export interface IRoomState {
	room: IRoomInfo | null
	startGameTimer: number

	roomCreated: (room: IRoomInfo) => void
	roomJoined: (room: IRoomInfo) => void
	roomLeft: () => void

	playerJoined: (room: IRoomInfo) => void
	playerLeaved: (room: IRoomInfo) => void

	startGameTimerUpdated: (timer: number) => void
}

export const useRoomState = create<IRoomState>()(set => ({
	room: null,
	startGameTimer: -1,

	roomCreated: room => {
		set({ room })
		useNotificationsState.getState().addNotification(`Комната успешно создана c id: ${room.roomId}`)
	},

	roomJoined: room => {
		set({ room })
		useNotificationsState
			.getState()
			.addNotification(`Вы успешно присоединились к комнате c id: ${room.roomId}`)
	},

	roomLeft: () => {
		set({ room: null })
		useNotificationsState.getState().addNotification("Вы покинули комнату")
	},

	playerJoined: room => {
		set({ room })
		useNotificationsState.getState().addNotification("Присоединился второй игрок")
	},

	playerLeaved: room => {
		set({ room })
		useNotificationsState.getState().addNotification("Игрок покинул комнату")
	},

	startGameTimerUpdated: timer => {
		set({ startGameTimer: timer })
		useNotificationsState
			.getState()
			.addNotification(`Таймер игрока обновлен, осталось: ${timer} секунд`)
	},
}))
