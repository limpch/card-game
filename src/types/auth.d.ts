export interface ILoginResponse {
	token: string
	user: IUser
}

export interface IUser {
	id: number
	role: string
	telegramLogin: string
	createdAt: string
	cards: number[]
	characters: number[]
}
