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
import CardDecor from '@/assets/icons/card/card-decor.svg?react';

const cardColors = {
	default: 'primaryBlue',
	heal: 'primaryRed',
	dot: 'primaryGreen',
	hit: 'primaryBlue',
	darkBg: 'primaryDark',
} as const;

interface CardProps {
	data: ICardData;
	children?: React.ReactNode;
}

export const Card: FC<CardProps> = ({ data, children }) => {
	const cardColor: TColors = data ? cardColors[data.type] : 'primaryBlue';

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
						<CardDecor
							width={'100%'}
							height={'100%'}
						/>
					</div>

					{data.type === 'default' ? (
						<div className={classes.card__text}>{children}</div>
					) : (
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
					)}

					{data.stats && <CardStats data={data} />}
				</div>
			</Shadow>
		</div>
	);
};
