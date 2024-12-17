import $api from "@/http"
import { ILoginResponse } from "@/types/auth"
import { ISuccessResponse } from "@/types/response"

class AuthService {
	async login(telegramLogin: string) {
		const response = await $api.post<ISuccessResponse<ILoginResponse>>("/auth/login", {
			telegramLogin,
		})

		localStorage.setItem("token", response.data.data.token)
		$api.defaults.headers.Authorization = `Bearer ${response.data.data.token}`

		return response.data.data
	}
}

export const authService = new AuthService()
