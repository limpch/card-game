import { cardsService } from "@/services/cards.service"
import { ICard } from "@/types/cards"
import { create } from "zustand"

export interface ICardsState {
	cards: ICard[]

	getCards: () => Promise<void>
}

export const useCardsState = create<ICardsState>()(set => ({
	cards: [],

	getCards: async () => {
		const response = await cardsService.getCards()
		set({ cards: response.data })
	},
}))
