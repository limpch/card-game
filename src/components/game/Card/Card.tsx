import { FC } from "react"
import classes from "./styles.module.scss"

interface CardProps {
	index: number
}

export const Card: FC<CardProps> = ({ index }) => {
	return (
		<div
			className={classes.container}
			style={{ transform: `translateY(${index * 10}px) translateX(${index * 70}px)` }}
		>
			Card
		</div>
	)
}
