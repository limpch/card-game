import { FC } from "react"
import classes from "./styles.module.scss"
import { Button } from "@/components/ui/Button"
import { Link, useNavigate } from "react-router-dom"
import { rem } from "@/config/styles.config"
import { Title } from "@/components/ui/Title"
import { roomService } from "@/services/room.service"

interface StartMenuLayoutProps {}

export const StartMenuLayout: FC<StartMenuLayoutProps> = ({}) => {
	const navigate = useNavigate()

	const createRoom = () => {
		roomService.createRoom()
		navigate(`/room`)
	}

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
				<Button w={"100%"} maw={rem("400px")} size="lg" onClick={createRoom}>
					Создать игру
				</Button>
				<Link to="/battle">
					<Button w={"100%"} maw={rem("400px")} size="lg">
						Присоединиться
					</Button>
				</Link>
			</div>
		</div>
	)
}
