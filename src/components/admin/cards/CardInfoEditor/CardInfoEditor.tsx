import { FC } from "react"
import { UseFormReturnType } from "@mantine/form"
import { Divider } from "@mantine/core"
import { Checkbox, ColorPicker, Group, Input, Stack } from "@mantine/core"
import { RichEditor } from "../../ui/RichEditor"

interface INewCardInfo {
	name: string
	description: string
	price: string
	icon: string
	color: string
	ap: string
}

interface CardInfoEditorProps {
	form: UseFormReturnType<INewCardInfo>

	isActive: boolean
	setActive: (value: boolean) => void
	isPublic: boolean
	setPublic: (value: boolean) => void
}

export const CardInfoEditor: FC<CardInfoEditorProps> = ({
	form,
	isActive,
	setActive,
	isPublic,
	setPublic,
}) => {
	return (
		<>
			<Group>
				<Checkbox checked={isActive} onChange={() => setActive(!isActive)} label="Активна" />
				<Checkbox checked={isPublic} onChange={() => setPublic(!isPublic)} label="Публичная" />
			</Group>
			<Input.Wrapper label="Название">
				<Input {...form.getInputProps("name")} />
			</Input.Wrapper>
			<RichEditor
				content={form.values.description}
				onChange={val => form.setFieldValue("description", val)}
			/>
			<Input.Wrapper label="Цена">
				<Input {...form.getInputProps("price")} type="number" />
			</Input.Wrapper>
			<Input.Wrapper label="Цвет">
				<Stack>
					<Group>
						<Input {...form.getInputProps("color")} />
					</Group>
					<ColorPicker {...form.getInputProps("color")} fullWidth format="rgba" />
				</Stack>
			</Input.Wrapper>

			<Input.Wrapper label="Иконка">
				<Input {...form.getInputProps("icon")} />
			</Input.Wrapper>

			<Divider />

			<Input.Wrapper label="Очки действия">
				<Input {...form.getInputProps("ap")} type="number" />
			</Input.Wrapper>
		</>
	)
}
