import { FC } from "react"
import classes from "./styles.module.scss"

interface HudProps {
	children?: React.ReactNode
}

export const Hud: FC<HudProps> = ({ children }) => {
	return (
		<div className={classes.hud}>
			<div className={classes.hud__container}></div>
		</div>
	)
}
