import { IRoute } from "@/types/routes"
import { lazy } from "react"

const HomePage = lazy(() => import("@/pages/HomePage"))
const StartMenuLayout = lazy(() => import("@/Layout/StartMenuLayout"))
const DeckStoreLayout = lazy(() => import("@/Layout/DeckStoreLayout"))
const MainMenuLayout = lazy(() => import("@/Layout/MainMenuLayout"))
const BattlePage = lazy(() => import("@/pages/BattlePage"))

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
			children: [
				{
					path: "",
					component: <MainMenuLayout />,
					slug: "main-menu",
				},
				{
					path: "play",
					component: <StartMenuLayout />,
					slug: "play-menu",
				},
				{
					path: "deck",
					component: <DeckStoreLayout />,
					slug: "deck-menu",
				},
			],
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
