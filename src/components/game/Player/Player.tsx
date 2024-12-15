import { FC } from 'react';
import classes from './styles.module.scss';
import { rem } from '@/config/styles.config';
import CharacterBlueSide from '@/assets/players/character-blue-side.svg?react';
import CharacterBlueSideBg from '@/assets/players/character-blue-side-bg.svg?react';

interface PlayerProps {
	type?: 'blue' | 'red';
	battle?: boolean;
}

export const Player: FC<PlayerProps> = ({ type = 'blue', battle = false }) => {
	return (
		<div className={classes.player + ' ' + classes[`player__${type}`]}>
			<div className={classes.player__character}>
				{type === 'blue' ? (
					<>
						<CharacterBlueSideBg
							width={rem('375px')}
							height={rem('266px')}
							className={classes.player__bg + ' ' + classes.player__bg_blue}
						/>
						<CharacterBlueSide
							width={rem('174px')}
							height={rem('295px')}
							className={
								classes.player__avatar + ' ' + classes.player__avatar_blue
							}
						/>
					</>
				) : (
					<></>
				)}
			</div>
			{battle && 'ui'}
		</div>
	);
};
