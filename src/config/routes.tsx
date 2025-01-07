import { IRoute } from "@/types/routes"
import { lazy } from "react"

const HomePage = lazy(() => import("@/pages/HomePage"))
const StartPage = lazy(() => import("@/pages/StartPage"))
const StoragePage = lazy(() => import("@/pages/StoragePage"))
const CharactersPage = lazy(() => import("@/pages/CharactersPage"))
const RoomPage = lazy(() => import("@/pages/RoomPage"))
const ConnectToRoomPage = lazy(() => import("@/pages/ConnectToRoomPage"))
const BattlePage = lazy(() => import("@/pages/BattlePage"))

class RouterConfig {
	routes: IRoute[] = [
		{
			path: "/",
			component: <HomePage />,
			slug: "home",
		},
		{
			path: "/start",
			component: <StartPage />,
			slug: "play-menu",
		},
		{
			path: "/storage",
			component: <StoragePage />,
			slug: "storage",
		},
		{
			path: "/character",
			component: <CharactersPage />,
			slug: "character",
		},
		{
			path: "/room",
			component: <RoomPage />,
			slug: "room",
		},
		{
			path: "/connect",
			component: <ConnectToRoomPage />,
			slug: "connect",
		},
		{
			path: "/battle",
			component: <BattlePage />,
			slug: "battle",
		},
	]

	getRouteBySlug(slug: string) {
		return this.routes.find(route => route.slug === slug)
	}
}

export const routerConfig = new RouterConfig()
