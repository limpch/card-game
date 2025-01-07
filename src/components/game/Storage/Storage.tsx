import { FC } from "react"
import classes from "./styles.module.scss"
import { Grid } from "@/components/game/Grid"
import PlusIcon from "@/assets/icons/plus.svg?react"
import { Card } from "@/components/game/Card"
import { useCardsState } from "@/state/cards.state"

interface StorageProps {}

export const Storage: FC<StorageProps> = ({}) => {
	const cards = useCardsState(state => state.cards)

	return (
		<div className={classes.storage}>
			<Grid>
				{cards.map((card, _ind) => (
					<div key={_ind} className={classes.storage__card}>
						<Card card={card} />
						<button className={classes.storage__button}>
							<PlusIcon width={32} height={32} />
						</button>
					</div>
				))}
			</Grid>
		</div>
	)
}
