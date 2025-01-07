import classes from "./styles.module.scss"
import { Navigation } from "@/components/game/Navigation"
import { Title } from "@/components/ui/Title"
import { Button } from "@/components/ui/Button"
import { ScrollArea } from "@/components/ui/ScrollArea"
import { useState } from "react"
import Deck from "@/components/game/Deck"
import Storage from "@/components/game/Storage"
import { motion } from "motion/react"
import { useUserState } from "@/state/user.state"

export const StoragePage = () => {
	const deck = useUserState(state => state.user?.decks[0] || null)
	const [page, setPage] = useState<"deck" | "storage">("deck")

	if (!deck) return <div>Loading...</div>

	return (
		<div className={classes.storage}>
			<div className={classes.storage__head}>
				<Navigation />
				<div className={classes.storage__title}>
					<Title>Моя колода</Title>
				</div>
				<div className={classes.storage__tabs}>
					<Button
						onClick={() => setPage("deck")}
						bg={page === "deck" ? "primaryLight" : "shadowBlue"}
					>
						Колода
					</Button>
					<Button
						onClick={() => setPage("storage")}
						bg={page === "storage" ? "primaryLight" : "shadowBlue"}
					>
						Склад
					</Button>
				</div>
			</div>
			<div className={classes.subWindows}>
				<motion.div animate={{ x: page === "deck" ? 0 : "-100%" }}>
					<ScrollArea>
						<Deck cards={deck.cards} />
					</ScrollArea>
				</motion.div>
				<motion.div animate={{ x: page === "storage" ? "-100%" : 0 }}>
					<ScrollArea>
						<Storage />
					</ScrollArea>
				</motion.div>
			</div>
			<div className={classes.storage__confirm}>
				<div className={`${classes.storage__counter} ${deck.cards.length < 20 && classes.error}`}>
					<p>{deck.cards.length}/20</p>
				</div>
				<Button
					bg={deck.cards.length < 20 ? "shadowBlue" : "primaryLight"}
					disable={deck.cards.length !== 20}
				>
					Подтвердить
				</Button>
			</div>
		</div>
	)
}
