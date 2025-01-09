import { FC } from "react"
import { Search } from "@/components/admin/ui/Search"
import { Button, Group, Stack, Title } from "@mantine/core"
import { useGetCards } from "@/hooks/admin/cards/useGetCards"
import { useInputState } from "@mantine/hooks"
import { CardsTable } from "@/components/admin/cards/CardsTable"
import { useNavigate } from "react-router-dom"

interface AdminCardPageProps {}

export const AdminCardPage: FC<AdminCardPageProps> = ({}) => {
	useGetCards()
	const navigate = useNavigate()

	const [search, setSearch] = useInputState("")

	return (
		<Stack>
			<Group justify="space-between" mb={20}>
				<Title>Карты</Title>
				<Button onClick={() => navigate("/admin/cards/create")}>Добавить карту</Button>
			</Group>
			<Search value={search} setValue={setSearch} />
			<CardsTable filter={search} />
		</Stack>
	)
}
