import { IRoute } from "@/types/routes"
import { lazy } from "react"

const HomePage = lazy(() => import("@/pages/HomePage"))
const StartPage = lazy(() => import("@/pages/StartPage"))
const StoragePage = lazy(() => import("@/pages/StoragePage"))
const Deck = lazy(() => import("@/components/game/Deck"))
const Storage = lazy(() => import("@/components/game/Storage"))
const CharactersPage = lazy(() => import("@/pages/CharactersPage"))
const BattlePage = lazy(() => import("@/pages/BattlePage"))
const TestPage = lazy(() => import("@/pages/TestPage"))

// const PlayMenu = lazy(() => import("@/pages/PlayMenu"))
// const CharacterMenu = lazy(() => import("@/pages/CharacterMenu"))
// const DeckPage = lazy(() => import("@/pages/DeckPage"))

// {
// 	path: "character",
// 	component: <CharacterMenu />,
// 	slug: "character-menu",
// },

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
			path: "/battle",
			component: <BattlePage />,
			slug: "battle",
		},
		{
			path: "/test",
			component: <TestPage />,
			slug: "test",
		},
	]

	getRouteBySlug(slug: string) {
		return this.routes.find(route => route.slug === slug)
	}
}

export const routerConfig = new RouterConfig()
