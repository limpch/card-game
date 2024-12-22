import { Button } from "@/components/ui/Button"
import classes from "./styles.module.scss"
import { Outlet, useNavigate, useNavigationType } from "react-router-dom"

export const HomePage = () => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate("/")
	}
	return (
		<div className={classes.home}>
			{location.pathname !== "/" && (
				<div className={classes.home__navigation}>
					<Button size="md" onClick={handleGoBack}>
						Назад
					</Button>
				</div>
			)}
			<Outlet />
		</div>
	)
}
