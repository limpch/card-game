export interface IRoomInfo {
	players: [RoomPlayerInfoType, RoomPlayerInfoType]
	roomId: string
}

export type RoomPlayerInfoType = IRoomPlayerInfo | null
