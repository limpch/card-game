import classes from "./styles.module.scss"
import { Button } from "@/components/ui/Button"
import { Player } from "@/components/game/Player"
import { rem } from "@/config/styles.config"
import gameLogo from "@/assets/game-logo.png"
import { ClearCard } from "@/components/game/Card"
import { Link } from "react-router-dom"

export const HomePage = () => {
	return (
		<div className={classes.home}>
			<div className={classes.home__logobox}>
				<img width={346} height={200} src={gameLogo} alt="Mages deck logo" />
			</div>
			<Player />
			<Link to="/storage">
				<div className={classes.home__deck}>
					<div className={classes.home__card}>
						<ClearCard />
					</div>
					<div className={classes.home__card}>
						<ClearCard />
					</div>
					<div className={classes.home__card}>
						<ClearCard>
							Моя
							<br />
							колода
						</ClearCard>
					</div>
				</div>
			</Link>
			<div className={classes.home__character}>
				<Link to="/character">
					<Button size="md">Персонаж</Button>
				</Link>
			</div>
			<div className={classes.home__start}>
				<Link to="/start">
					<Button size="lg" p={`${rem("16px")} ${rem("54px")}`}>
						Играть
					</Button>
				</Link>
			</div>
		</div>
	)
}
