import { ChangeEvent, FC } from "react"
import classes from "./styles.module.scss"

interface RoomCodeInputProps {
	value: string
	setValue: (value: string) => void
}

export const RoomCodeInput: FC<RoomCodeInputProps> = ({ value, setValue }) => {
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.slice(0, 8)
		setValue(value)
	}

	return (
		<div className={classes.container}>
			<input type="text" value={value} onInput={changeHandler} placeholder="________" />
		</div>
	)
}
