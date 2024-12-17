import { IRoute } from "@/types/routes"
import { lazy } from "react"

const HomePage = lazy(() => import("@/pages/HomePage"))
const BattlePage = lazy(() => import("@/pages/BattlePage"))

// const PlayMenu = lazy(() => import("@/pages/PlayMenu"))
// const CharacterMenu = lazy(() => import("@/pages/CharacterMenu"))
// const DeckPage = lazy(() => import("@/pages/DeckPage"))

class RouterConfig {
	routes: IRoute[] = [
		{
			path: "/",
			component: <HomePage />,
			slug: "home",
			// children: [
			// 	{
			// 		path: "play",
			// 		component: <PlayMenu />,
			// 		slug: "play-menu",
			// 	},
			// 	{
			// 		path: "character",
			// 		component: <CharacterMenu />,
			// 		slug: "character-menu",
			// 	},
			// 	{
			// 		path: "deck",
			// 		component: <DeckPage />,
			// 		slug: "deck-page",
			// 	},
			// ],
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
