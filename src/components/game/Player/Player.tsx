import { FC } from "react"
import classes from "./styles.module.scss"
import avatar from "@/assets/players/temp/character-blue-side.png"
import bg from "@/assets/players/character-blue-side-bg.svg"

import { Hud } from "@/components/game/Hud"
import { useUserState } from "@/state/user.state"

interface PlayerProps {
	battle?: boolean
}

export const Player: FC<PlayerProps> = ({ battle = false }) => {
	const activeCharacter = useUserState(state => state.activeCharacter)

	return (
		<div className={classes.player}>
			<div className={classes.player__character}>
				<img src={bg} alt={`Player background`} className={classes.player__bg} />
				<img
					src={activeCharacter?.image || avatar}
					alt={`Player avatar`}
					className={classes.player__avatar}
				/>
			</div>
			{battle && <Hud type={"player"} />}
		</div>
	)
}
