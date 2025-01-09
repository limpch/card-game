import { FC, useState } from "react"
import { Button, Divider, Stack, Title } from "@mantine/core"
import { Form, useForm } from "@mantine/form"
import { ICastInfo } from "@/types/cards"
import "@mantine/tiptap/styles.css"
import { CastInfoEditor } from "@/components/admin/cards/CastInfoEditor"
import { CardInfoEditor } from "@/components/admin/cards/CardInfoEditor"

interface AdminCreateCardPageProps {}

export const AdminCreateCardPage: FC<AdminCreateCardPageProps> = ({}) => {
	const [isActive, setActive] = useState(true)
	const [isPublic, setPublic] = useState(true)

	const [targetCatsInfo, setTargetCatsInfo] = useState<ICastInfo>({
		actions: [],
		effects: [],
	})

	const [casterCatsInfo, setCasterCatsInfo] = useState<ICastInfo>({
		actions: [],
		effects: [],
	})

	const form = useForm({
		initialValues: {
			name: "",
			description: "",
			price: "0",
			icon: "",
			color: "#ffffff",
			ap: "2",
		},
	})

	const submitHandler = (values: typeof form.values) => {
		const newCard = {
			id: 2,
			name: values.name,
			description: values.description,
			price: Number(values.price),
			icon: values.icon,
			color: values.color,
			active: isActive,
			public: isPublic,
			specifications: {
				ap: Number(values.ap),
				onCaster: casterCatsInfo,
				onTarget: targetCatsInfo,
			},
		}

		console.log(newCard)
	}

	return (
		<Stack>
			<Title>Создание карты</Title>
			<Form form={form} onSubmit={submitHandler}>
				<Stack>
					<CardInfoEditor
						form={form}
						isActive={isActive}
						setActive={setActive}
						isPublic={isPublic}
						setPublic={setPublic}
					/>

					<Title>Инфа о касте</Title>
					<CastInfoEditor
						catsInfo={targetCatsInfo}
						setCatsInfo={setTargetCatsInfo}
						title="На цель"
					/>
					<Divider />
					<CastInfoEditor
						catsInfo={casterCatsInfo}
						setCatsInfo={setCasterCatsInfo}
						title="На кастера"
					/>

					<Button type="submit" variant="outline">
						Создать
					</Button>
				</Stack>
			</Form>
		</Stack>
	)
}
