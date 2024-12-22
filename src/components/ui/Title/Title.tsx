import { ReactNode } from "react"
import classes from "./styles.module.scss"

interface TitleProps {
	children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
	return (
		<div className={classes.title}>
			<h1 className={classes.title__text}>{children}</h1>
		</div>
	)
}
