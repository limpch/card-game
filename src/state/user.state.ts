import { authService } from "@/services/auth.service"
import { IUser } from "@/types/auth"
import { create } from "zustand"

export interface IUserState {
	user: IUser | null
	isLoading: boolean

	getUser: () => Promise<void>
	setLoading: (isLoading: boolean) => void
}

export const useUserState = create<IUserState>()(set => ({
	user: null,
	isLoading: true,

	getUser: async () => {
		const tgUserData = `query_id=AAG8mPg8AAAAALyY-DwvlPXo&user=%7B%22id%22%3A1022924988%2C%22first_name%22%3A%22%D0%A0%D0%BE%D0%BC%D0%B0%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22limp%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FG-CB20QhDJTt0rvLNNeZ9pKoo5J4rSxm3azCs819Z5k.svg%22%7D&auth_date=1734272356&signature=63d1oA10XPbNixRQ43ZscOoc2G9I1JzxQ2xOzcMuVAsxt8m8QGBSNMpTfnPbAQuf2BQiSK5QyUCVN20AZpp5Dg&hash=f7b6ee819e9f6556a7bddb7fda48ff223a8bf3360b73ccdf9145b202d46eb2f5`
		const response = await authService.login(tgUserData)
		set({ user: response.user })
	},

	setLoading: (isLoading: boolean) => set({ isLoading }),
}))
