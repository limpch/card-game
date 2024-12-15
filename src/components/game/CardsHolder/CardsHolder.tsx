import { FC } from 'react';
import classes from './styles.module.scss';
import { Card } from '@/components/game/Card';
import { ICardsMock } from '@/types/game';

interface CardsHolderProps {
	cardsMock: ICardsMock[];
}

export const CardsHolder: FC<CardsHolderProps> = ({ cardsMock }) => {
	return (
		<div
			className={classes.holder}
			// style={{ maxWidth: cardsMock.length * 70 + 40 }}
		>
			<div className={classes.holder__container}>
				{cardsMock.map(cardMock => (
					<div
						className={classes.holder__item}
						style={{
							transform: `translateY(${cardMock.id * 8}px) translateX(${
								cardMock.id * 34
							}px) skewY(-8deg)`,
						}}
					>
						<Card
							key={cardMock.id}
							data={cardMock.data}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
