export interface ICardBase {
	id: number
	icon: string
	name: string
	description: string
	color: string
	specifications: string
	price: number
	active: boolean
}

export interface ICard extends ICardBase {
	specifications: ICardSpecifications
}

export type TCardEffects =
	| "fire"
	| "water"
	| "poison"
	| "bleed"
	| "blind"
	| "stun"
	| "heal"
	| "shield"
	| "hit"

export interface ICardEffect {
	type: TCardEffects
	damage: [number, number] | null
	duration: number
	value: number
}

export interface ICardSpecifications {
	cost: number
	effect: ICardEffect[]
}
