import { FC, useState } from "react"
import classes from "./styles.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import ChevronNext from "@/assets/icons/chevron-next.svg?react"
import ChevronPrev from "@/assets/icons/chevron-prev.svg?react"

import char1 from "@/assets/players/temp/char_1.png"
import char2 from "@/assets/players/temp/char_2.png"
import char3 from "@/assets/players/temp/char_3.png"
import { CharacterInfo } from "@/components/CharacterInfo"
import { Button } from "@/components/ui/Button"

interface SliderProps {}

const charData = [
	{ id: 0, src: char1 },
	{ id: 1, src: char2 },
	{ id: 2, src: char3 },
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
					<motion.div
						key={charData[currentIndex].id}
						initial={{ translateX: "100%", opacity: 0 }}
						animate={{ translateX: 0, opacity: 1 }}
						exit={{ translateX: "-100%", opacity: 0 }}
						className={classes.slider__slide}
					>
						<div className={classes.slider__imgbox}>
							<img className={classes.slider__image} src={charData[currentIndex].src} alt="" />
						</div>
						<div>
							<CharacterInfo />
						</div>
					</motion.div>
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
			<Button>Выбрать</Button>
		</div>
	)
}
