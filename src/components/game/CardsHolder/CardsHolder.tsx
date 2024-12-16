import { FC, useEffect, useMemo, useState } from "react"
import classes from "./styles.module.scss"
import { Card } from "@/components/game/Card"
import { ICardsMock } from "@/types/game"
import { useElementSize } from "@mantine/hooks"

interface CardsHolderProps {
	cardsMock: ICardsMock[]
}

export const CardsHolder: FC<CardsHolderProps> = ({ cardsMock }) => {
	const [cards, setCards] = useState<ICardsMock[]>(cardsMock)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowUp") {
				setCards(prev => [...prev, cardsMock[0]])
			} else if (e.key === "ArrowDown") {
				setCards(prev => prev.slice(1))
			}
		}

		window.addEventListener("keydown", handleKeyDown)

		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [cardsMock])

	const { ref, width } = useElementSize<HTMLDivElement>()

	const offset = useMemo(() => {
		if (!ref.current) return { x: 0, y: 8, container: 0 }
		const container = ref.current as HTMLDivElement

		const cardWidth = 90
		const containerWidth = width
		const baseOffset = 20
		const cardsCount = cards.length
		const cardsWidth = cardsCount * cardWidth

		console.log(90 - (containerWidth - cardWidth) / cardsCount)

		if (cardsWidth >= containerWidth) {
			const x = cardWidth - (containerWidth - cardWidth) / cardsCount

			container.classList.add(classes.justify_start)

			return { x, y: 8, container: 0 }
		}

		container.classList.remove(classes.justify_start)
		return { x: baseOffset, y: 8, container: baseOffset }
	}, [cards.length, width])

	return (
		<div
			className={classes.holder}
			// style={{ maxWidth: cardsMock.length * 70 + 40 }}
		>
			<div
				className={classes.holder__container}
				ref={ref}
				style={{ transform: `translateX(${offset.container}px)` }}
			>
				{cards.map((cardMock, _ind) => (
					<div
						className={classes.holder__item}
						style={{
							transform: `translateY(${_ind * offset.y}px) translateX(${_ind * -offset.x}px) `,
						}}
					>
						<Card key={_ind} data={cardMock.data} />
					</div>
				))}
			</div>
		</div>
	)
}
