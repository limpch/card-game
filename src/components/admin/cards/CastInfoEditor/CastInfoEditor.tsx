import { Dispatch, FC, SetStateAction, useCallback } from "react"
import { Group, Select, Stack } from "@mantine/core"
import { Button } from "@mantine/core"
import { Checkbox } from "@mantine/core"
import { Input } from "@mantine/core"
import { Title } from "@mantine/core"
import { ICardAction, ICardEffect, ICastInfo } from "@/types/cards"

interface CastInfoEditorProps {
	catsInfo: ICastInfo
	setCatsInfo: Dispatch<SetStateAction<ICastInfo>>
	title?: string
}

const effects = ["fire", "ice", "electric", "poison", "heal"]

const actions = ["damage", "heal", "armor"]

const clearAction = {
	action: "damage",
	value: 0,
	ignoreArmor: false,
	type: "",
}

const clearEffect = {
	effect: "",
	value: 0,
	duration: 0,
}

export const CastInfoEditor: FC<CastInfoEditorProps> = ({ catsInfo, setCatsInfo, title }) => {
	const removeTargetAction = useCallback((index: number) => {
		setCatsInfo(prev => ({
			...prev,
			actions: prev.actions.filter((_, i) => i !== index),
		}))
	}, [])

	const changeTargetAction = useCallback((index: number, key: keyof ICardAction, value: any) => {
		setCatsInfo(prev => ({
			...prev,
			actions: prev.actions.map((action, i) =>
				i === index ? { ...action, [key]: value } : action
			),
		}))
	}, [])

	const changeTargetEffect = useCallback((index: number, key: keyof ICardEffect, value: any) => {
		setCatsInfo(prev => ({
			...prev,
			effects: prev.effects.map((effect, i) =>
				i === index ? { ...effect, [key]: value } : effect
			),
		}))
	}, [])

	return (
		<>
			<Title order={3}>{title}</Title>
			<Stack gap={8}>
				<Title order={5}>Урон</Title>

				{catsInfo.actions.map((action, index) => (
					<Group key={index} wrap="nowrap" align="flex-end">
						<Input.Wrapper label="Действие">
							<Select
								value={action.action}
								data={actions}
								onChange={val => changeTargetAction(index, "action", val)}
							/>
						</Input.Wrapper>
						<Input.Wrapper label="Значение (2, 2-3)">
							<Input
								value={action.value}
								onChange={val => changeTargetAction(index, "value", val.currentTarget.value)}
							/>
						</Input.Wrapper>
						<Input.Wrapper label="Тип урона">
							<Select
								value={action.type}
								data={effects}
								onChange={val => changeTargetAction(index, "type", val)}
							/>
						</Input.Wrapper>
						<Checkbox
							checked={action.ignoreArmor}
							label="Игнорировать броню"
							onChange={() => changeTargetAction(index, "ignoreArmor", !action.ignoreArmor)}
						/>
						<Button onClick={() => removeTargetAction(index)} bg={"red"}>
							Удалить
						</Button>
					</Group>
				))}

				<Button
					onClick={() => {
						setCatsInfo(prev => ({
							...prev,
							actions: [...prev.actions, clearAction],
						}))
					}}
				>
					Добавить
				</Button>
			</Stack>

			<Stack gap={8}>
				<Title order={5}>Эффекты</Title>

				{catsInfo.effects.map((effect, index) => (
					<Group key={index} wrap="nowrap" align="flex-end">
						<Input.Wrapper label="Эффект">
							<Select
								value={effect.effect}
								data={effects}
								onChange={val => changeTargetEffect(index, "effect", val)}
							/>
						</Input.Wrapper>
						<Input.Wrapper label="Значение (2, 2-3)">
							<Input
								value={effect.value}
								onChange={val => changeTargetEffect(index, "value", val.currentTarget.value)}
							/>
						</Input.Wrapper>
						<Input.Wrapper label="Длительность">
							<Input
								value={effect.duration}
								onChange={val => changeTargetEffect(index, "duration", val.currentTarget.value)}
							/>
						</Input.Wrapper>
						<Button onClick={() => removeTargetAction(index)} bg={"red"}>
							Удалить
						</Button>
					</Group>
				))}

				<Button
					onClick={() => {
						setCatsInfo(prev => ({
							...prev,
							effects: [...prev.effects, clearEffect],
						}))
					}}
				>
					Добавить
				</Button>
			</Stack>
		</>
	)
}
