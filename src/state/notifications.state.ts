import { create } from "zustand"

export interface INotificationsState {
	notifications: string[]

	addNotification: (notification: string) => void
}

export const useNotificationsState = create<INotificationsState>()(set => ({
	notifications: [],
	addNotification: notification => {
		set(state => ({ notifications: [...state.notifications, notification] }))
		console.log(notification)
	},
}))
