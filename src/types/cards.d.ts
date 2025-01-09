import { TColors } from "@/config/styles.config"

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

export interface ICardSpecifications {
	ap: number

	onTarget?: ICastInfo

	onCaster?: ICastInfo
}

export interface ICastInfo {
	actions: ICardAction[]
	effects: ICardEffect[]
}

export interface ICardAction {
	action: TActions
	value: number
	type?: TEffects
	ignoreArmor?: boolean
}

export interface ICardEffect {
	effect: TEffects
	duration: number
	value: number
}
