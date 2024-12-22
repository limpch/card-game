import { IRoute } from "@/types/routes"
import { lazy } from "react"

const HomePage = lazy(() => import("@/pages/HomePage"))
const StoragePage = lazy(() => import("@/pages/StoragePage"))
const StartMenuLayout = lazy(() => import("@/Layout/StartMenuLayout"))
const DeckLayout = lazy(() => import("@/Layout/DeckLayout"))
const StorageLayout = lazy(() => import("@/Layout/StorageLayout"))
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
			],
		},
		{
			path: "/storage",
			component: <StoragePage />,
			slug: "storage",
			children: [
				{
					path: "",
					component: <DeckLayout />,
					slug: "storage-deck",
				},
				{
					path: "/storage/store",
					component: <StorageLayout />,
					slug: "store",
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
