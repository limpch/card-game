import { FC, TouchEvent, useRef } from "react"
import classes from "./styles.module.scss"
import { colors } from "@/config/styles.config"
import { Shadow } from "@/components/ui/Shadow"
import { CardStats } from "@/components/game/CardStats/CardStats"
import { ICard } from "@/types/cards"
import CardDecor from "@/assets/icons/card-decor.svg?react"

interface CardProps {
	card: ICard
}

export const Card: FC<CardProps> = ({ card }) => {
	const refTimer = useRef<NodeJS.Timeout | null>(null)

	const touchStart = () => {
		let isLongTouch = false
		refTimer.current = setTimeout(() => {
			console.log("Long touch detected")
			isLongTouch = true
			// ADD DRAG AND DROP TO CARD
		}, 200)

		const touchEnd = () => {
			if (refTimer.current) clearTimeout(refTimer.current)
			refTimer.current = null

			if (!isLongTouch) {
				// ADD OPEN ACTION TO CARD
				console.log("Open card action")
			}

			document.removeEventListener("touchend", touchEnd)
		}

		document.addEventListener("touchend", touchEnd)
	}

	const touchEnd = (e: TouchEvent) => {
		e.preventDefault()
	}

	return (
		<div className={classes.card} onTouchStart={touchStart} onTouchEnd={touchEnd}>
			<Shadow type={"boxShadow"}>
				<div
					className={classes.card__container}
					style={{
						backgroundColor: colors[card.color],
						color: colors["primaryLight"],
					}}
				>
					<div className={classes.card__bg}>
						<CardDecor width={"100%"} height={"100%"} />
					</div>

					<div className={classes.card__icon}>
						<Shadow c={card.color} type={"filter"}>
							<img src={card.icon} alt={card.name} />
						</Shadow>
					</div>

					{/* {card.stats && <CardStats data={card} />} */}
				</div>
			</Shadow>
		</div>
	)
}
