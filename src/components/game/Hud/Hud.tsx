import { FC } from "react"
import classes from "./styles.module.scss"
import { StatBar } from "@/components/ui/StatBar"
import { Text } from "@/components/ui/Text"
import { ActionPointsBar } from "@/components/ui/ActionPointsBar"

interface HudProps {
	type?: "blue" | "red"
}

export const Hud: FC<HudProps> = ({ type = "blue" }) => {
	return (
		<div className={`${classes.hud} ${classes[`hud_${type}`]}`}>
			<div className={classes.hud__container}>
				<div className={`${classes.hud__info} ${classes[`hud__info_${type}`]}`}>
					<Text c={"primaryRed"}>2x Регенерация</Text>
					<Text c={"primaryGreen"}>2x Яд</Text>
					<Text c={"primaryOrange"}>2x Уязв. к огню</Text>
					<Text c={"primaryRed"}>2x Огонь</Text>
					<Text c={"primaryGreen"}>2x Яд</Text>
					<Text c={"primaryOrange"}>2x Огонь</Text>
					<Text c={"primaryOrange"}>2x Уязв. к огню</Text>
					<Text c={"primaryRed"}>2x Регенерация</Text>
				</div>
				<div className={`${classes.hud__group}  ${classes[`hud__group_${type}`]}`}>
					<StatBar type={"health"}>27/30</StatBar>
					<div className={classes.hud__shields}>
						<StatBar type={"shields"}>6/8</StatBar>
					</div>
				</div>
				<div className={`${classes.hud__group}  ${classes[`hud__group_${type}`]}`}>
					<ActionPointsBar points={4} />
				</div>
			</div>
		</div>
	)
}
