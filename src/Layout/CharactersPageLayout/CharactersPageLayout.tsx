import { FC } from "react"
import classes from "./styles.module.scss"
import { Navigation } from "@/components/game/Navigation"
import { Title } from "@/components/ui/Title"
import { Slider } from "@/components/game/Slider"

interface CharactersPageLayoutProps {}

export const CharactersPageLayout: FC<CharactersPageLayoutProps> = ({}) => {
	return (
		<div className={classes.characters}>
			<div className={classes.characters__head}>
				<Navigation />
				<div className={classes.characters__title}>
					<Title>Персонаж</Title>
				</div>
			</div>
			<Slider />
		</div>
	)
}
