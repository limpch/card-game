import { FC, useState } from "react"
import classes from "./styles.module.scss"
import { Grid } from "@/components/game/Grid"
import RemoveIcon from "@/assets/icons/remove.svg?react"
import { Card } from "@/components/game/Card"
import { ICardsMock } from "@/types/game"

const cardsMock: ICardsMock[] = [
	{
		id: 0,
		data: {
			type: "hit",
			points: 2,
			stats: [
				{ type: "dot", value: 3 },
				{ type: "heal", value: 2 },
			],
		},
	},
	{
		id: 1,
		data: {
			type: "hit",
			points: 10,
			stats: [
				{ type: "dot", value: 3 },
				{ type: "heal", value: 2 },
			],
		},
	},
	{
		id: 2,
		data: {
			type: "hit",
			points: 10,
			stats: [
				{ type: "dot", value: 3 },
				{ type: "heal", value: 2 },
			],
		},
	},
	{
		id: 3,
		data: {
			type: "hit",
			points: 10,
			stats: [
				{ type: "dot", value: 3 },
				{ type: "heal", value: 2 },
			],
		},
	},
	{
		id: 4,
		data: {
			type: "hit",
			points: 10,
			stats: [
				{ type: "dot", value: 3 },
				{ type: "heal", value: 2 },
			],
		},
	},
	{
		id: 5,
		data: {
			type: "hit",
			points: 10,
			stats: [
				{ type: "dot", value: 3 },
				{ type: "heal", value: 2 },
			],
		},
	},
	{
		id: 6,
		data: {
			type: "heal",
			points: 5,
			stats: [
				{ type: "dot", value: 3 },
				{ type: "heal", value: 2 },
			],
		},
	},
	{
		id: 7,
		data: {
			type: "dot",
			points: 10,
			stats: [
				{ type: "heal", value: 3 },
				{ type: "cooldown", value: 2 },
			],
		},
	},
]

interface DeckProps {}

export const Deck: FC<DeckProps> = ({}) => {
	const [cards, setCards] = useState<ICardsMock[]>(cardsMock)
	return (
		<div className={classes.deck}>
			<div className={classes.deck__container}>
				<Grid>
					{cards.map((cardMock, _ind) => (
						<div key={_ind} className={classes.deck__card}>
							<Card data={cardMock.data} index={_ind} />
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
