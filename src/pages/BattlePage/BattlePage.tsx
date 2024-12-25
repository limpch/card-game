import classes from "./styles.module.scss"
import { ICardsMock } from "@/types/game"
import { CardsHolder } from "@/components/game/CardsHolder"
import { Player } from "@/components/game/Player"
import { Card } from "@/components/game/Card"
import { Enemy } from "@/components/game/Enemy"

const cardsMock: ICardsMock[] = [
	{
		id: 0,
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

export const BattlePage = () => {
	return (
		<div className={classes.battle}>
			<Enemy />
			<Player battle={true} />
			<div className={classes.battle__deck}>
				<Card data={{ type: "disable" }} index={0}>
					16/20
				</Card>
			</div>
			<CardsHolder cardsMock={cardsMock} />
		</div>
	)
}
