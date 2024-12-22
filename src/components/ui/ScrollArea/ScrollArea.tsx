import { FC } from "react"
import classes from "./styles.module.scss"

interface ScrollAreaProps {
	children?: React.ReactNode
}

export const ScrollArea: FC<ScrollAreaProps> = ({ children }) => {
	return (
		<div className={classes.scrollarea}>
			<div className={classes.scrollarea__scroll}>{children}</div>
		</div>
	)
}
