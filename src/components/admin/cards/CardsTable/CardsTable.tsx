import { FC, useMemo } from "react"
import { useCardsState } from "@/state/cards.state"
import { Table } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import { useNavigate } from "react-router-dom"

interface CardsTableProps {
	filter: string
}

export const CardsTable: FC<CardsTableProps> = ({ filter }) => {
	const navigate = useNavigate()
	const cards = useCardsState(state => state.cards)

	const [debouncedFilter] = useDebouncedValue(filter, 300)

	const filteredCards = useMemo(() => {
		return cards
			.filter(card => card.name.includes(filter))
			.map(element => (
				<Table.Tr
					key={element.id}
					style={{ cursor: "pointer" }}
					onClick={() => navigate(`/admin/cards/edit/${element.id}`)}
				>
					<Table.Td>{element.id}</Table.Td>
					<Table.Td>{element.name}</Table.Td>
					<Table.Td>{element.price}</Table.Td>
					<Table.Td>{element.active ? "Да" : "Нет"}</Table.Td>
				</Table.Tr>
			))
	}, [cards, debouncedFilter])

	return (
		<Table highlightOnHover>
			<Table.Thead>
				<Table.Tr>
					<Table.Th>ID</Table.Th>
					<Table.Th>Название</Table.Th>
					<Table.Th>Цена</Table.Th>
					<Table.Th>Активна</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>{filteredCards}</Table.Tbody>
		</Table>
	)
}
