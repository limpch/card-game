import { FC } from "react"
import classes from "./styles.module.scss"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { rem } from "@/config/styles.config"
import { Title } from "@/components/ui/Title"

interface StartMenuLayoutProps {}

export const StartMenuLayout: FC<StartMenuLayoutProps> = ({}) => {
	return (
		<div className={classes.start}>
			<div className={classes.start__title}>
				<Title>Играть</Title>
			</div>
			<div className={classes.start__buttons}>
				<Link to="/battle">
					<Button w={"100%"} maw={rem("400px")} size="lg">
						Быстрая игра
					</Button>
				</Link>
				<Link to="/battle">
					<Button w={"100%"} maw={rem("400px")} size="lg">
						Создать игру
					</Button>
				</Link>
				<Link to="/battle">
					<Button w={"100%"} maw={rem("400px")} size="lg">
						Присоединиться
					</Button>
				</Link>
			</div>
		</div>
	)
}
