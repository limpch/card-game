import classes from "./styles.module.scss"
import { BattleLayout } from "@/Layout/BattleLayout"

export const BattlePage = () => {
	return (
		<div className={classes.battle}>
			<BattleLayout />
		</div>
	)
}
