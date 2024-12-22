import { FC, useState, useEffect } from "react"
import classes from "./styles.module.scss"

import { Hud } from "@/components/game/Hud"

interface PlayerProps {
	type?: "blue" | "red"
	battle?: boolean
}

export const Player: FC<PlayerProps> = ({ type = "blue", battle = false }) => {
	const [avatarSrc, setAvatarSrc] = useState<string | null>(null)
	const [bgSrc, setBgSrc] = useState<string | null>(null)

	useEffect(() => {
		const loadImages = async () => {
			try {
				if (type === "blue") {
					const avatar = await import("@/assets/players/temp/character-blue-side.png")
					const bg = await import("@/assets/players/character-blue-side-bg.svg")
					setAvatarSrc(avatar.default)
					setBgSrc(bg.default)
				} else if (type === "red") {
					const avatar = await import("@/assets/players/temp/character-red-side.png")
					const bg = await import("@/assets/players/character-red-side-bg.svg")
					setAvatarSrc(avatar.default)
					setBgSrc(bg.default)
				}
			} catch (error) {
				console.error("Error loading images:", error)
			}
		}

		loadImages()
	}, [type])

	if (!avatarSrc || !bgSrc) {
		return <div className={`${classes.player} ${classes[`player__${type}`]}`}></div>
	}

	return (
		<div className={`${classes.player} ${classes[`player__${type}`]}`}>
			<div className={classes.player__character}>
				<img
					src={bgSrc}
					alt={`${type} background`}
					className={`${classes.player__bg} ${classes[`player__bg_${type}`]}`}
				/>
				<img
					src={avatarSrc}
					alt={`${type} avatar`}
					className={`${classes.player__avatar} ${classes[`player__avatar_${type}`]}`}
				/>
			</div>
			{battle && <Hud type={type} />}
		</div>
	)
}
