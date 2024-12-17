import { ReactNode } from "react"
import classes from "./styles.module.scss"

interface TitleProps {
	children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
	return <div className={classes.title}>{children}</div>
}
