import { FC, memo, useState } from "react"
import classes from "./styles.module.scss"
import { motion } from "framer-motion"
import ChevronNext from "@/assets/icons/chevron-next.svg?react"
import ChevronPrev from "@/assets/icons/chevron-prev.svg?react"
import { CharacterInfo } from "@/components/game/CharacterInfo"
import { Button } from "@/components/ui/Button"
import { ICharacter } from "@/types/character"

interface CharactersSliderProps {
	selectHandler: (id: number) => void
	characters: ICharacter[]
}

export const CharactersSlider: FC<CharactersSliderProps> = memo(({ selectHandler, characters }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => setCurrentIndex(prev => (prev + 1) % characters.length)

	const prevSlide = () =>
		setCurrentIndex(prev => (prev - 1 + characters.length) % characters.length)

	return (
		<div className={classes.slider}>
			<motion.div className={classes.slider__frame} animate={{ x: currentIndex * -100 + "%" }}>
				{characters.map(char => (
					<div key={char.id} className={classes.slider__slide}>
						<div className={classes.slider__imgbox}>
							<img className={classes.slider__image} src={char.image} alt="character" />
						</div>
						<div>
							<CharacterInfo />
						</div>
					</div>
				))}
			</motion.div>
			<div className={classes.slider__navigation}>
				<button onClick={prevSlide} className={classes.slider__navbtn}>
					<ChevronPrev width={54.53} height={66.87} />
				</button>
				<button onClick={nextSlide} className={classes.slider__navbtn}>
					<ChevronNext width={54.53} height={66.87} />
				</button>
			</div>
			<Button onClick={() => selectHandler(characters[currentIndex].id)}>Выбрать</Button>
		</div>
	)
})
