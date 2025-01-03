import { FC } from "react"
import classes from "./styles.module.scss"
import { Card } from "../Card"
import { Text } from "@/components/ui/Text"

interface ActionProps {}

export const Action: FC<ActionProps> = ({}) => {
	return (
		<div className={classes.action}>
			<div className={classes.action__container}>
				<div className={classes.action__card}>
					<Card
						index={0}
						data={{
							type: "hit",
							points: 10,
							stats: [
								{ type: "dot", value: 3 },
								{ type: "heal", value: 2 },
							],
						}}
					/>
				</div>

				<div className={classes.action__description}>
					<div className={classes.action__textbox}>
						<Text fz={28} lh={1.3} c={"lightBlue"}>
							Рубящий удар
						</Text>
						<Text fz={20} lh={1} fw={500} c={"primaryLight"}>
							Наносит 2-4 урона
						</Text>
					</div>
				</div>
			</div>
		</div>
	)
}
