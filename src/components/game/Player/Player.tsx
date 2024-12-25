import { FC, useState } from "react"
import classes from "./styles.module.scss"
import avatar from "@/assets/players/temp/character-blue-side.png"
import bg from "@/assets/players/character-blue-side-bg.svg"

import { Hud } from "@/components/game/Hud"

interface PlayerProps {
	battle?: boolean
}

export const Player: FC<PlayerProps> = ({ battle = false }) => {
	return (
		<div className={classes.player}>
			<div className={classes.player__character}>
				<img src={bg} alt={`Player background`} className={classes.player__bg} />
				<img src={avatar} alt={`Player avatar`} className={classes.player__avatar} />
			</div>
			{battle && <Hud type={"player"} />}
		</div>
	)
}
