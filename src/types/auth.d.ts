import { IUserDeck } from "./deck"

export interface ILoginResponse {
	token: string
	user: IUser
}

export interface IUser {
	id: number
	activeCharacter: null
	activeCharacterId: null
	allows_write_to_pm: boolean
	cards: number[]
	characters: number[]
	coins: number
	createdAt: string
	decks: IUserDeck[]
	first_name: string
	is_premium: boolean
	language_code: string
	last_name: string
	photo_url: string
	role: string
	telegramLogin: string
	updatedAt: string
	username: string
}
