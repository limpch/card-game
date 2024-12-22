import { FC } from "react"
import classes from "./styles.module.scss"

interface GridProps {
	children?: React.ReactNode
}

export const Grid: FC<GridProps> = ({ children }) => {
	return <div className={classes.grid}>{children}</div>
}
