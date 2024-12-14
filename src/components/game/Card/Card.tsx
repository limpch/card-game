import { FC } from 'react';
import classes from './styles.module.scss';
import { rem } from '@/config/styles.config';
import { colors, TColors } from '@/config/styles.config';
import { ICardData } from '@/types/game';

import { Shadow } from '@/components/ui/Shadow';
import { CardStats } from '@/components/game/CardStats/CardStats';

import DotIcon from '@/assets/icons/card/dot.svg?react';
import HitIcon from '@/assets/icons/card/hit.svg?react';
import HealIcon from '@/assets/icons/card/heal.svg?react';
import CarDecor from '@/assets/icons/card/card-decor.svg?react';

const cardColors = {
	heal: 'primaryRed',
	dot: 'primaryGreen',
	hit: 'primaryBlue',
	darkBg: 'primaryDark',
} as const;

interface CardProps {
	data: ICardData;
}

export const Card: FC<CardProps> = ({ data }) => {
	const cardColor: TColors = cardColors[data.type];

	return (
		<div className={classes.card}>
			<Shadow type={'boxShadow'}>
				<div
					className={classes.card__container}
					style={{
						backgroundColor: colors[cardColor],
						color: colors['primaryLight'],
					}}
				>
					<div className={classes.card__bg}>
						<CarDecor
							width={'100%'}
							height={'100%'}
						/>
					</div>
					<div className={classes.card__icon}>
						<Shadow
							c={cardColor}
							type={'filter'}
						>
							{data.type === 'dot' ? (
								<DotIcon
									width={rem('39')}
									height={rem('60px')}
								/>
							) : data.type === 'hit' ? (
								<HitIcon
									width={rem('42.19px')}
									height={rem('53.04px')}
								/>
							) : (
								<HealIcon
									width={rem('42.77px')}
									height={rem('42.77px')}
								/>
							)}
						</Shadow>
					</div>
					<CardStats data={data} />
				</div>
			</Shadow>
		</div>
	);
};
