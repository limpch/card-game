import classes from "./styles.module.scss"
import { Link, useLocation } from "react-router-dom"
import { Navigation } from "@/components/game/Navigation"
import { Title } from "@/components/ui/Title"
import { Button } from "@/components/ui/Button"
import { ScrollArea } from "@/components/ui/ScrollArea"
import { useState } from "react"
import Deck from "@/components/game/Deck"
import Storage from "@/components/game/Storage"

export const StoragePage = () => {
	const location = useLocation()
	const [cards, setCards] = useState(8)
	const [page, setPage] = useState(0)

	return (
		<div className={classes.storage}>
			<div className={classes.storage__head}>
				<Navigation />
				<div className={classes.storage__title}>
					<Title>Моя колода</Title>
				</div>
				<div className={classes.storage__tabs}>
					<Button
						onClick={() => {
							setPage(0)
						}}
						bg={page === 0 ? "primaryLight" : "shadowBlue"}
					>
						Колода
					</Button>
					<Button
						onClick={() => {
							setPage(1)
						}}
						bg={page === 1 ? "primaryLight" : "shadowBlue"}
					>
						Склад
					</Button>
				</div>
			</div>
			<ScrollArea>{page === 0 ? <Deck /> : <Storage />}</ScrollArea>
			<div className={classes.storage__confirm}>
				<div className={`${classes.storage__counter} ${cards < 20 && classes.error}`}>
					<p>{cards}/20</p>
				</div>
				<Button bg={cards < 20 ? "shadowBlue" : "primaryLight"} disable={cards !== 20}>
					Подтвердить
				</Button>
			</div>
		</div>
	)
}
