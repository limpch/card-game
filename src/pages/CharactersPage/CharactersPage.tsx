import { FC } from "react"
import classes from "./styles.module.scss"
import { Navigation } from "@/components/game/Navigation"
import { Title } from "@/components/ui/Title"
import { CharactersSlider } from "@/components/game/CharactersSlider"

import char1 from "@/assets/players/temp/char_1.png"
import char2 from "@/assets/players/temp/char_2.png"
import char3 from "@/assets/players/temp/char_3.png"
import { ICharacter } from "@/types/character"

interface CharactersPageProps {}

const charData: ICharacter[] = [
	{ id: 0, image: char1, description: "description", name: "name" },
	{ id: 1, image: char2, description: "description", name: "name" },
	{ id: 2, image: char3, description: "description", name: "name" },
]

export const CharactersPage: FC<CharactersPageProps> = ({}) => {
	const selectHandler = (id: number) => {
		console.log(id)
	}

	return (
		<div className={classes.characters}>
			<div className={classes.characters__head}>
				<Navigation />
				<div className={classes.characters__title}>
					<Title>Персонаж</Title>
				</div>
			</div>
			<CharactersSlider characters={charData} selectHandler={selectHandler} />
		</div>
	)
}
