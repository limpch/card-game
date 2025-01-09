export interface ISuccessResponse<T> {
	data: T
	meta?: {
		total: number
	}
}
