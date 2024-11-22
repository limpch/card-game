import classes from "./styles.module.scss"

interface GameLayoutProps {
	children: React.ReactNode
}

export const GameLayout = ({ children }: GameLayoutProps) => {
	return <div className={classes.container}>{children}</div>
}
