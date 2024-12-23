import { FC } from "react"
import classes from "./styles.module.scss"
import { Link, useLocation } from "react-router-dom"
import { Navigation } from "@/components/game/Navigation"
import { Title } from "@/components/ui/Title"
import { Button } from "@/components/ui/Button"
import { ScrollArea } from "@/components/ui/ScrollArea"
import { useState } from "react"

interface StoragePageLayoutProps {
	children?: React.ReactNode
}

export const StoragePageLayout: FC<StoragePageLayoutProps> = ({ children }) => {
	const location = useLocation()
	const [cards, setCards] = useState(8)

	return (
		<div className={classes.storage}>
			<div className={classes.storage__head}>
				<Navigation />
				<div className={classes.storage__title}>
					<Title>Моя колода</Title>
				</div>
				<div className={classes.storage__tabs}>
					<Link to={"/storage"}>
						<Button bg={location.pathname === "/storage" ? "primaryLight" : "shadowBlue"}>
							Колода
						</Button>
					</Link>
					<Link to={"/storage/store"}>
						<Button bg={location.pathname === "/storage/store" ? "primaryLight" : "shadowBlue"}>
							Склад
						</Button>
					</Link>
				</div>
			</div>
			<ScrollArea>{children}</ScrollArea>
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
