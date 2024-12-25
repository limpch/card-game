import { FC } from "react"
import classes from "./styles.module.scss"
import avatar from "@/assets/players/temp/character-red-side.png"
import bg from "@/assets/players/character-red-side-bg.svg"
import { Hud } from "../Hud"

interface EnemyProps {}

export const Enemy: FC<EnemyProps> = ({}) => {
	return (
		<div className={classes.enemy}>
			<div className={classes.enemy__character}>
				<img
					src={bg}
					alt={`Enemy background`}
					className={classes.enemy__bg}
				/>
				<img src={avatar} alt={`Enemy avatar`} className={classes.enemy__avatar} />
			</div>
			<Hud type={"enemy"} />
		</div>
	)
}
