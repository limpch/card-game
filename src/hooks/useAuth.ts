import { useCardsState } from "@/state/cards.state"
import { useCharactersState } from "@/state/characters.state"
import { useUserState } from "@/state/user.state"
import { wss } from "@/wss/wss"
import { useEffect } from "react"

export const useAuth = () => {
	const isLoading = useUserState(state => state.isLoading)
	const setLoading = useUserState(state => state.setLoading)

	const getUser = useUserState(state => state.getUser)
	const getCards = useCardsState(state => state.getCards)
	const getCharacters = useCharactersState(state => state.getCharacters)

	const getData = async () => {
		await getUser()
		await getCards()
		await getCharacters()

		wss.connect()

		setLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	return { isLoading }
}
