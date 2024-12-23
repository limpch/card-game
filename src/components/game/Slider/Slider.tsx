import { FC, useState } from "react"
import classes from "./styles.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import ChevronNext from "@/assets/icons/chevron-next.svg?react"
import ChevronPrev from "@/assets/icons/chevron-prev.svg?react"

import charBlue from "@/assets/players/temp/character-blue-side.png"
import charRed from "@/assets/players/temp/character-red-side.png"
import char1 from "@/assets/players/temp/char_1.png"

interface SliderProps {}

const charData = [
	{ id: 0, src: charBlue },
	{ id: 1, src: charRed },
	{ id: 2, src: char1 },
]

export const Slider: FC<SliderProps> = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => {
		setCurrentIndex(prev => (prev + 1) % charData.length)
	}

	const prevSlide = () => {
		setCurrentIndex(prev => (prev - 1 + charData.length) % charData.length)
	}

	return (
		<div className={classes.slider}>
			<div className={classes.slider__frame}>
				<AnimatePresence>
					<motion.img
						key={charData[currentIndex].id}
						src={charData[currentIndex].src}
						initial={{ x: 300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -300, opacity: 0 }}
						className={classes.slider__image}
					/>
					<div>stats</div>
				</AnimatePresence>
			</div>
			<div className={classes.slider__navigation}>
				<button onClick={prevSlide} className={classes.slider__navbtn}>
					<ChevronPrev width={54.53} height={66.87} />
				</button>
				<button onClick={nextSlide} className={classes.slider__navbtn}>
					<ChevronNext width={54.53} height={66.87} />
				</button>
			</div>
		</div>
	)
}
