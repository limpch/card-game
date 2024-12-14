import { FC } from 'react';
import classes from './styles.module.scss';
import { rem } from '@/config/styles.config';
import { colors } from '@/config/styles.config';

import DotIcon from '@/assets/icons/card/dot.svg?react';
import HitIcon from '@/assets/icons/card/hit.svg?react';
import HealIcon from '@/assets/icons/card/heal.svg?react';
import CooldownIcon from '@/assets/icons/card/cooldown.svg?react';
import { ICardData } from '@/types/game';

interface CardStatsProps {
	data: ICardData;
}

export const CardStats: FC<CardStatsProps> = ({ data }) => {
	return (
		<div className={classes.stats}>
			{data.points && (
				<div
					className={classes.stats__points}
					style={{
						color: colors['primaryDark'],
					}}
				>
					<p>{data.points}</p>
				</div>
			)}

			<div className={classes.stats__container}>
				{data.stats.map(stat => (
					<div className={classes.stats__item}>
						<p className={classes.stats__value}>{stat.value}</p>
						<div className={classes.stats__icon}>
							{stat.type === 'dot' ? (
								<DotIcon
									width={rem('5px')}
									height={rem('7px')}
								/>
							) : stat.type === 'hit' ? (
								<HitIcon
									width={rem('6px')}
									height={rem('7px')}
								/>
							) : stat.type === 'heal' ? (
								<HealIcon
									width={rem('7px')}
									height={rem('6px')}
								/>
							) : (
								<CooldownIcon
									width={rem('5px')}
									height={rem('7px')}
								/>
							)}
						</div>
					</div>
				))}
			</div>
			{/* <div className={classes.stats__icon}>
				<HitIcon
					width={rem('6px')}
					height={rem('7px')}
				/>
			</div>
			<div className={classes.stats__icon}>
				<HealIcon
					width={rem('7px')}
					height={rem('6px')}
				/>
			</div>
			<div className={classes.stats__icon}>
				<CooldownIcon
					width={rem('5px')}
					height={rem('7px')}
				/>
			</div> */}
		</div>
	);
};
