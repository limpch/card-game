import { FC } from 'react';
import classes from './styles.module.scss';
import { GameLayout } from '@/Layout/GameLayout';
import { Button } from '@/components/ui/Button';
import { Player } from '@/components/game/Player';

import gameLogo from '@/assets/game-logo.png';
import { Card } from '@/components/game/Card';

interface MainMenuLayoutProps {}

export const MainMenuLayout: FC<MainMenuLayoutProps> = ({}) => {
	return (
		<GameLayout>
			<div className={classes.menu}>
				<div className={classes.menu__logobox}>
					<img
						width={346}
						height={200}
						src={gameLogo}
						alt='Mages deck logo'
					/>
				</div>
				<Player />
				<div className={classes.menu__start}>
					<Button size='lg'>Играть</Button>
				</div>
				<div className={classes.menu__deck}>
					<div className={classes.menu__card}>
						<Card data={{ type: 'default' }} />
					</div>
					<div className={classes.menu__card}>
						<Card data={{ type: 'default' }} />
					</div>
					<div className={classes.menu__card}>
						<Card data={{ type: 'default' }}>
							Моя
							<br />
							колода
						</Card>
					</div>
				</div>
				<div className={classes.menu__character}>
					<Button size='md'>Персонаж</Button>
				</div>
			</div>
		</GameLayout>
	);
};
