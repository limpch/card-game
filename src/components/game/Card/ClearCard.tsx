import { FC } from "react"
import classes from "./styles.module.scss"
import { colors } from "@/config/styles.config"
import { Shadow } from "@/components/ui/Shadow"
import CardDecor from "@/assets/icons/card-decor.svg?react"

interface ClearCardProps {
	children?: React.ReactNode
	type?: "default" | "dark"
}

export const ClearCard: FC<ClearCardProps> = ({ children, type = "default" }) => {
	return (
		<div className={classes.card}>
			<Shadow type={"boxShadow"}>
				<div
					className={classes.card__container}
					style={{
						backgroundColor: type === "default" ? colors["primaryBlue"] : colors["shadowBlue"],
						color: colors["primaryLight"],
					}}
				>
					<div className={classes.card__bg}>
						<CardDecor width={"100%"} height={"100%"} />
					</div>

					<div className={classes.card__textbox}>
						<p className={classes.card__text}>{children}</p>
					</div>
				</div>
			</Shadow>
		</div>
	)
}
