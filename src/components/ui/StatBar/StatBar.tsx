import { FC } from "react"
import classes from "./styles.module.scss"
import HealIcon from "@/assets/icons/heal.svg?react"
import ShieldsIcon from "@/assets/icons/shields.svg?react"
import { colors, rem } from "@/config/styles.config"

interface StatBarProps {
	children?: React.ReactNode
	type?: "health" | "shields"
	scale?: number
	scaleX?: number
	scaleY?: number
	fz?: string | number
}

const sizes = {
	health: {
		w: 200,
		h: 32,
		bd: 8,
		fz: 19,
	},
	shields: {
		w: 140,
		h: 22,
		bd: 6,
		fz: 13,
	},
}

export const StatBar: FC<StatBarProps> = ({
	children,
	type = "health",
	scale = 1,
	scaleX,
	scaleY,
	fz,
}) => {
	return (
		<div
			className={`${classes.stat} ${classes[`${type}`]}`}
			style={{
				width: rem(sizes[type].w * (scaleX ? scaleX : scale)),
				height: rem(sizes[type].h * (scaleY ? scaleY : scale)),
			}}
		>
			<div
				className={classes.stat__bar}
				style={{
					borderRight: `${rem(sizes[type].bd * (scaleX ? scaleX : scale))} solid ${
						type === "health" ? colors["brightRed"] : colors["brightBlue"]
					}`,
				}}
			></div>
			<div className={classes.stat__container}>
				{type === "health" ? (
					<HealIcon width={rem(11 * scale)} height={rem(9 * scale)} />
				) : (
					<ShieldsIcon width={rem(7 * scale)} height={rem(8 * scale)} />
				)}

				<p
					className={classes.stat__value}
					style={{
						fontSize: rem(fz ? fz : sizes[type].fz),
					}}
				>
					{children}
				</p>
			</div>
		</div>
	)
}
