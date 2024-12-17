import $api from "@/http"
import { ICharacter } from "@/types/character"
import { ISuccessResponse } from "@/types/response"

class CharactersService {
	async getCharacters() {
		const response = await $api.get<ISuccessResponse<ICharacter[]>>("/characters")
		return response.data.data
	}
}

export const charactersService = new CharactersService()
