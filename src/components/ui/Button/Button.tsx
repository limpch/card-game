import { FC } from "react"
import classes from "./styles.module.scss"
import { colors, TColors, rem } from "@/config/styles.config"

interface ButtonProps {
	children: React.ReactNode
	size?: TButtonSizes
	bg?: TColors
	c?: TColors
	p?: string
	w?: string
	maw?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const buttonSizes = {
	sm: rem("12px"),
	md: rem("19px"),
	lg: rem("38px"),
}

const buttonPadding = {
	sm: rem("12px"),
	md: rem("12px"),
	lg: rem("16px"),
}

export type TButtonSizes = keyof typeof buttonSizes
export type TbuttonPadding = keyof typeof buttonSizes

export const Button: FC<ButtonProps> = ({
	children,
	size = "md",
	bg = "primaryLight",
	c = "primaryDark",
	p,
	w,
	maw,
	onClick,
}) => {
	return (
		<div
			className={classes.button}
			style={{
				width: w ? w : "fit-content",
				maxWidth: maw ? maw : "none",
			}}
		>
			<button
				type="button"
				onClick={onClick}
				style={{
					backgroundColor: colors[bg],
					color: colors[c],
					fontSize: buttonSizes[size],
					padding: p ? p : buttonPadding[size],
					width: w ? w : "fit-content",
				}}
			>
				<p>{children}</p>
			</button>
		</div>
	)
}
