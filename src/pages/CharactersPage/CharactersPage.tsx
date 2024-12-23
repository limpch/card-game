import { FC } from "react"
import classes from "./styles.module.scss"
import { CharactersPageLayout } from "@/Layout/CharactersPageLayout"

interface CharactersPageProps {}

export const CharactersPage: FC<CharactersPageProps> = ({}) => {
	return (
		<div className={classes.container}>
			<CharactersPageLayout />
		</div>
	)
}
