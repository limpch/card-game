import { FC, useState } from "react"
import classes from "./styles.module.scss"
import { Navigation } from "@/components/game/Navigation"
import { Title } from "@/components/ui/Title"
import { Text } from "@/components/ui/Text"
import { Player } from "@/components/game/Player"
import { RoomCodeInput } from "@/components/ui/RoomCodeInput"
import { Button } from "@/components/ui/Button"
import { roomService } from "@/services/room.service"

interface ConnectToRoomPageProps {}

export const ConnectToRoomPage: FC<ConnectToRoomPageProps> = ({}) => {
	const [code, setCode] = useState<string>("")

	const connect = () => {
		roomService.joinRoom(code)
	}

	return (
		<div className={classes.create}>
			<div className={classes.create__head}>
				<Navigation />
				<div className={classes.create__title}>
					<Title>Присоединиться</Title>
				</div>
			</div>
			<div className={classes.create__body}>
				<Text fz={19} mb={8}>
					Введите код:
				</Text>
				<RoomCodeInput value={code} setValue={setCode} />
				<Button onClick={connect} disable={code.length !== 8}>
					Присоединиться
				</Button>
			</div>
			<Player battle={true} />
		</div>
	)
}
