import { FC } from "react"
import classes from "./styles.module.scss"
import { Navigation } from "@/components/game/Navigation"
import { Title } from "@/components/ui/Title"
import { Button } from "@/components/ui/Button"
import { Text } from "@/components/ui/Text"
import char1 from "@/assets/players/temp/char_1.png"

interface CreateGamePageProps {}

export const CreateGamePage: FC<CreateGamePageProps> = ({}) => {
	return (
		<div className={classes.create}>
			<div className={classes.create__head}>
				<Navigation />
				<div className={classes.create__title}>
					<Title>Создать игру</Title>
				</div>
			</div>
			<div className={classes.create__body}>
				<div className={classes.create__container}>
					<div className={classes.create__imgbox}>
						<img className={classes.create__image} src={char1} alt="character" />
					</div>
					<div className={classes.create__btn}>
						<Button size={"lg"} p={"24px"}>
							Пригласить
						</Button>
					</div>
				</div>
				<div className={classes.create__textbox}>
					<Text fz={19} lh={1.3} c={"primaryLight"}>
						Игра начнется сразу после того, как ваш друг перейдет по ссылке-приглашению
					</Text>
				</div>
			</div>
		</div>
	)
}
