import { FC } from "react"
import classes from "./styles.module.scss"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/Button"

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = ({}) => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate("/")
	}

	return (
		location.pathname !== "/" && (
			<div className={classes.navigation}>
				<Button size="md" onClick={handleGoBack}>
					Назад
				</Button>
			</div>
		)
	)
}
