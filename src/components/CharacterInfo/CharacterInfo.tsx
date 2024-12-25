import { FC } from "react"
import classes from "./styles.module.scss"
import { StatBar } from "@/components/ui/StatBar"
import { ActionPointsBar } from "@/components/ui/ActionPointsBar"
import { Text } from "@/components/ui/Text"

interface CharacterInfoProps {}

export const CharacterInfo: FC<CharacterInfoProps> = ({}) => {
	return (
		<div className={classes.info}>
			<StatBar type={"health"} scale={1.4} fz={"28.5px"}>
				30/30
			</StatBar>
			<ActionPointsBar points={6} />
			<Text fz={19} lh={1.3} c={"primaryLight"}>
				Базовый по всем показателям персонаж
			</Text>
		</div>
	)
}
