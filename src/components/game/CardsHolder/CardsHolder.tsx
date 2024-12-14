import { FC } from 'react';
import classes from './styles.module.scss';
import { Card } from '@/components/game/Card';
import { ICardData } from '@/types/game';

interface CardsHolderProps {}
interface ICardsMock {
	id: number;
	data: ICardData;
}

const cardsMock: ICardsMock[] = [
	{
		id: 0,
		data: {
			type: 'hit',
			points: 10,
			stats: [
				{ type: 'dot', value: 3 },
				{ type: 'heal', value: 2 },
			],
		},
	},
	{
		id: 1,
		data: {
			type: 'hit',
			points: 10,
			stats: [
				{ type: 'dot', value: 3 },
				{ type: 'heal', value: 2 },
			],
		},
	},
	{
		id: 2,
		data: {
			type: 'hit',
			points: 10,
			stats: [
				{ type: 'dot', value: 3 },
				{ type: 'heal', value: 2 },
			],
		},
	},
	{
		id: 3,
		data: {
			type: 'hit',
			points: 10,
			stats: [
				{ type: 'dot', value: 3 },
				{ type: 'heal', value: 2 },
			],
		},
	},
	{
		id: 4,
		data: {
			type: 'hit',
			points: 10,
			stats: [
				{ type: 'dot', value: 3 },
				{ type: 'heal', value: 2 },
			],
		},
	},
	{
		id: 5,
		data: {
			type: 'hit',
			points: 10,
			stats: [
				{ type: 'dot', value: 3 },
				{ type: 'heal', value: 2 },
			],
		},
	},
	{
		id: 6,
		data: {
			type: 'heal',
			points: 5,
			stats: [
				{ type: 'dot', value: 3 },
				{ type: 'heal', value: 2 },
			],
		},
	},
	{
		id: 7,
		data: {
			type: 'dot',
			points: 10,
			stats: [
				{ type: 'heal', value: 3 },
				{ type: 'cooldown', value: 2 },
			],
		},
	},
];

export const CardsHolder: FC<CardsHolderProps> = ({}) => {
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
