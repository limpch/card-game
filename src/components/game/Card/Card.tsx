import { FC } from 'react';
import classes from './styles.module.scss';
import { Shadow } from '@/components/ui/Shadow';
import { colors, TColors } from '@/config/styles.config';

import BlobIcon from '@/assets/icons/blob.svg?react';

interface CardProps {
	index: number;
	color: TColors;
}

export const Card: FC<CardProps> = ({ index, color }) => {
	return (
		<div
			className={classes.container}
			style={{
				backgroundColor: colors[color],
				// transform: `translateY(${index * 10}px) translateX(${index * 70}px)`,
			}}
		>
			<Shadow c={'green'}>
				<BlobIcon
					width='40'
					height='61'
					color='#FFFFFF'
				/>
			</Shadow>
			Card
		</div>
	);
};
