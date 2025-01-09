import { useNotificationsState } from "@/state/notifications.state"
import { Socket } from "socket.io-client"

export const errorListener = (socket: Socket) => {
	socket.on("error", (error: string) => {
		useNotificationsState.getState().addNotification(error)
	})
}
