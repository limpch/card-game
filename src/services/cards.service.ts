import $api from "@/http"
import { ICard } from "@/types/cards"
import { ISuccessResponse } from "@/types/response"

class CardsService {
	async getCards() {
		const response = await $api.get<ISuccessResponse<ICard[]>>("/cards")
		return response.data.data
	}
}

export const cardsService = new CardsService()
