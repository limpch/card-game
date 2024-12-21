import { FC } from "react"
import classes from "./styles.module.scss"
import HealIcon from "@/assets/icons/heal.svg?react"
import { rem } from "@/config/styles.config"

interface HealthBarProps {
	children?: React.ReactNode
}

export const HealthBar: FC<HealthBarProps> = ({ children }) => {
	return (
		<div className={classes.health}>
			<div className={classes.health__container}>
				<HealIcon width={rem("42.77px")} height={rem("42.77px")} />
				<p className={classes.health__value}>27/30</p>
			</div>
			<div className={classes.health__bar}></div>
		</div>
	)
}
