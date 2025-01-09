import { FC } from "react"
import { Group, Input } from "@mantine/core"

interface SearchProps {
	label?: string
	placeholder?: string
	value: string
	setValue: (value: string | React.ChangeEvent<any> | null | undefined) => void
}

export const Search: FC<SearchProps> = ({
	label = "Поиск",
	placeholder = "Введите название",
	value,
	setValue,
}) => {
	return (
		<Group wrap="nowrap" align="flex-end">
			<Input.Wrapper label={label} w="100%">
				<Input value={value} onChange={setValue} placeholder={placeholder} />
			</Input.Wrapper>
		</Group>
	)
}
