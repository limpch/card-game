import { FC } from "react"
import classes from "./styles.module.scss"
import HealIcon from "@/assets/icons/heal.svg?react"
import ShieldsIcon from "@/assets/icons/shields.svg?react"
import { rem } from "@/config/styles.config"

interface StatBarProps {
	children?: React.ReactNode
	type?: "health" | "shields"
}

export const StatBar: FC<StatBarProps> = ({ children, type = "health" }) => {
	return (
		<div className={`${classes.stat} ${classes[`${type}`]}`}>
			<div className={classes.stat__bar}></div>
			<div className={classes.stat__container}>
				{type === "health" ? (
					<HealIcon width={rem("11px")} height={rem("9px")} />
				) : (
					<ShieldsIcon width={rem("7px")} height={rem("8px")} />
				)}

				<p className={classes.stat__value}>{children}</p>
			</div>
		</div>
	)
}
