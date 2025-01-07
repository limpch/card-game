import { FC } from "react"
import classes from "./styles.module.scss"
import { Grid } from "@/components/game/Grid"
import RemoveIcon from "@/assets/icons/remove.svg?react"
import { Card } from "@/components/game/Card"
import { ICard } from "@/types/cards"

interface DeckProps {
	cards: ICard[]
}

export const Deck: FC<DeckProps> = ({ cards }) => {
	return (
		<div className={classes.deck}>
			<div className={classes.deck__container}>
				<Grid>
					<Card
						card={{
							active: true,
							color: "primaryLight",
							description: "dasdasdas",
							icon: "",
							id: 0,
							name: "dasdasdsa",
							price: 0,
							specifications: {
								ap: 2,
							},
						}}
					/>
					{cards.map((card, _ind) => (
						<div key={_ind} className={classes.deck__card}>
							<Card card={card} />
							<button className={classes.deck__button}>
								<RemoveIcon width={32} height={32} />
							</button>
						</div>
					))}
				</Grid>
			</div>
		</div>
	)
}
