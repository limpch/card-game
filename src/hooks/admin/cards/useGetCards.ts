import { useCardsState } from "@/state/cards.state"
import { useEffect } from "react"

export const useGetCards = () => {
	const getCards = useCardsState(state => state.getCards)

	useEffect(() => {
		getCards()
	}, [])
}
