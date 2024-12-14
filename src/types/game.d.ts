export type CardStatType = 'dot' | 'hit' | 'heal' | 'cooldown';
export type CardType = 'dot' | 'hit' | 'heal';

export interface ICardStat {
	type: CardStatType;
	value: number;
}

export interface ICardData {
	points?: number;
	type: CardType;
	stats: ICardStat[];
}
