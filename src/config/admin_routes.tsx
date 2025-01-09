import { IRoute } from "@/types/routes"
import { lazy } from "react"

const AdminHomePage = lazy(() => import("@/pages/admin/AdminPage"))
const AdminCardPage = lazy(() => import("@/pages/admin/AdminCardPage"))
const AdminCardCreatePage = lazy(() => import("@/pages/admin/AdminCreateCardPage"))
const AdminCardEditPage = lazy(() => import("@/pages/admin/AdminEditCardPage"))

class AdminRouterConfig {
	routes: IRoute[] = [
		{
			path: "/",
			component: <AdminHomePage />,
			slug: "home",
		},
		{
			path: "/cards",
			component: <AdminCardPage />,
			slug: "cards",
		},
		{
			path: "/cards/create",
			component: <AdminCardCreatePage />,
			slug: "cards-create",
		},
		{
			path: "/cards/edit/:id",
			component: <AdminCardEditPage />,
			slug: "cards-edit",
		},
	]

	getRouteBySlug(slug: string) {
		return this.routes.find(route => route.slug === slug)
	}
}

export const adminRouterConfig = new AdminRouterConfig()
