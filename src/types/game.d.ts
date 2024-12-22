export type CardStatType = "dot" | "hit" | "heal" | "cooldown"
export type CardType = "default" | "disable" | "dot" | "hit" | "heal"

export interface ICardStat {
	type: CardStatType
	value: number
}

export interface ICardData {
	points?: number
	type: CardType
	stats?: ICardStat[]
}

export interface ICardsMock {
	id: number
	data: ICardData
}
