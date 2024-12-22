import { FC, useMemo } from "react"
import classes from "./styles.module.scss"
import CrystalIcon from "@/assets/icons/crystal.svg?react"
import { colors, rem } from "@/config/styles.config"

interface ActionPointsBarProps {
	points: number
	maxPoints?: number
}

export const ActionPointsBar: FC<ActionPointsBarProps> = ({ points, maxPoints = 6 }) => {
	const crystals = useMemo(() => Array.from({ length: maxPoints }), [maxPoints])

	return (
		<div className={classes.action}>
			{crystals.map((_, index) => (
				<CrystalIcon
					key={index}
					color={index < points ? colors["crystal"] : ""}
					width={rem("11.43px")}
					height={rem("26.3px")}
					className={classes.crystal}
				/>
			))}
		</div>
	)
}
