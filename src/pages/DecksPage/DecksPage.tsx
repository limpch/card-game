import { NavLink } from "react-router-dom"
import classes from "./styles.module.scss"
import { Title } from "@/components/ui/Title"
import { routerConfig } from "@/config/routes"

export const DecksPage = () => {
	return (
		<div className={classes.container}>
			<Title>
				<NavLink to={routerConfig.getRouteBySlug("home")}>{"<"}</NavLink>
				<p>Колоды</p>
			</Title>
		</div>
	)
}
