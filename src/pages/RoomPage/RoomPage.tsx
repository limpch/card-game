import { FC, useMemo } from "react"
import classes from "./styles.module.scss"
import { Navigation } from "@/components/game/Navigation"
import { Title } from "@/components/ui/Title"
import { Button } from "@/components/ui/Button"
import { Text } from "@/components/ui/Text"
import { Player } from "@/components/game/Player"
import { useRoomState } from "@/state/room.state"
import { useUserState } from "@/state/user.state"
import { Enemy } from "@/components/game/Enemy"

interface RoomPageProps {}

export const RoomPage: FC<RoomPageProps> = ({}) => {
	const room = useRoomState(state => state.room)
	const user = useUserState(state => state.user)

	if (!room || !user) return <div>Loading...</div>

	const me = useMemo(() => {
		return room.players.find(player => player?.id === user.id)
	}, [room])

	const enemy = useMemo(() => {
		return room.players.find(player => player?.id !== user.id) || null
	}, [room])

	return (
		<div className={classes.create}>
			<div className={classes.create__head}>
				<Navigation />
				<div className={classes.create__title}>
					<Title>Создать игру</Title>
				</div>
			</div>
			{!enemy ? (
				<div className={classes.create__body}>
					<Text fz={24} mb={24}>
						Ожидание подключения
					</Text>
					<Text fz={19} mb={8}>
						Код комнаты:
					</Text>
					<Text fz={40}>{room?.roomId}</Text>
				</div>
			) : (
				<Enemy />
			)}
			<Player battle={true} />
		</div>
	)
}
