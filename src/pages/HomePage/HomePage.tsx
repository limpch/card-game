import classes from "./styles.module.scss"
import { Outlet } from "react-router-dom"
import { Navigation } from "@/components/game/Navigation"

export const HomePage = () => {
	return (
		<div className={classes.home}>
			<Navigation />
			<Outlet />
		</div>
	)
}
