import { charactersService } from "@/services/characters.service"
import { ICharacter } from "@/types/character"
import { create } from "zustand"

export interface ICharactersState {
	characters: ICharacter[]

	getCharacters: () => Promise<void>
}

export const useCharactersState = create<ICharactersState>()(set => ({
	characters: [],

	getCharacters: async () => {
		const response = await charactersService.getCharacters()
		set({ characters: response.data })
	},
}))
