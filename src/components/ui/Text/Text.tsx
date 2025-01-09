import { FC } from "react"
import classes from "./styles.module.scss"
import { colors, rem, TColors } from "@/config/styles.config"

interface TextProps {
	children?: React.ReactNode
	type?: "stat" | "default"
	fz?: string | number
	fw?: number
	c?: TColors
	lh?: string | number
}

export const Text: FC<TextProps> = ({
	children,
	type = "default",
	fz = "11px",
	fw = 700,
	c = "primaryLight",
	lh = 1,
}) => {
	return (
		<div
			className={`${classes.textbox} ${classes[`textbox_${type}`]}`}
			style={{ fontSize: rem(fz), color: colors[c], lineHeight: lh, fontWeight: fw }}
		>
			<p>{children}</p>
		</div>
	)
}
