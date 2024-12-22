import classes from "./styles.module.scss"
import { Outlet } from "react-router-dom"

export const HomePage = () => {
	return (
		<div className={classes.home}>
			<Outlet />
		</div>
	)
}
