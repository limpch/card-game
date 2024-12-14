import { FC } from 'react';
import classes from './styles.module.scss';
import { Card } from '@/components/game/Card';

interface CardsHolderProps {}

const cardsMock = [0];

export const CardsHolder: FC<CardsHolderProps> = ({}) => {
	return (
		<div
			className={classes.container}
			style={{ maxWidth: cardsMock.length * 70 + 40 }}
		>
			{cardsMock.map(index => (
				<Card
					key={index}
					index={index}
				/>
			))}
		</div>
	);
};
