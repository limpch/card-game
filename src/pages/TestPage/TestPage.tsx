import { useAuth } from "@/hooks/useAuth"
import classes from "./styles.module.scss"
import { Button } from "@/components/ui/Button"
import { roomService } from "@/services/room.service"

export const TestPage = () => {
	useAuth()

	const clickHandler = () => roomService.createRoom()

	return (
		<div className={classes.home}>
			<Button onClick={clickHandler}>Создать комнату</Button>
		</div>
	)
}
