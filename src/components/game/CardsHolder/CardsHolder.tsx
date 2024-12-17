import { FC, useEffect, useMemo, useState } from "react"
import classes from "./styles.module.scss"
import { Card } from "@/components/game/Card"
import { ICardsMock } from "@/types/game"
import { useElementSize } from "@mantine/hooks"
import { AnimatePresence, motion } from "motion/react"

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

	const cardWidth = useMemo(() => {
		const cardWidth = 70

		if (!ref.current) return cardWidth
		const cardsCount = cards.length
		const cardsWidth = cardsCount * cardWidth

		if (cardsWidth >= width) {
			const x = width / cardsCount
			return x
		}

		return cardWidth
	}, [cards.length, width])

	const padding = useMemo(() => {
		const padding = 90 - cardWidth
		return padding < 40 ? 40 : padding
	}, [cardWidth])

	return (
		<div
			className={classes.holder}
			// style={{ maxWidth: cardsMock.length * 70 + 40 }}
		>
			<div className={classes.holder__container} ref={ref} style={{ padding: `20px ${padding}px` }}>
				<AnimatePresence>
					{cards.map((cardMock, _ind) => (
						<motion.div
							className={classes.holder__item}
							style={{
								transform: `translateY(${_ind * -8}px)`,
								width: cardWidth,
							}}
							key={_ind}
							initial={{ x: 300, width: 0, y: _ind * 8 }}
							animate={{ x: 0, width: cardWidth }}
							exit={{ width: 0 }}
						>
							<Card key={_ind} data={cardMock.data} index={_ind} />
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	)
}
