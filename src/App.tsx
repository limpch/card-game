import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { routerConfig } from "./config/routes"
import { Suspense } from "react"
import { AnimatePresence } from "motion/react"
import { Layout } from "./components/Layout"
import { AdminLayout } from "./components/admin/AdminLayout"
import { adminRouterConfig } from "./config/admin_routes"

const App = () => {
	return (
		<BrowserRouter>
			<AnimatedRoutes />
		</BrowserRouter>
	)
}

const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<AnimatePresence mode="wait" initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route element={<Layout />}>
					{routerConfig.routes.map(route => (
						<Route
							key={route.slug}
							path={route.path}
							element={<Suspense fallback={"loading..."}>{route.component}</Suspense>}
						>
							{route.children?.map(child => (
								<Route
									key={child.slug}
									path={child.path}
									element={<Suspense fallback={"loading..."}>{child.component}</Suspense>}
								/>
							))}
						</Route>
					))}
				</Route>

				<Route path="/admin" element={<AdminLayout />}>
					{adminRouterConfig.routes.map(route => (
						<Route
							key={route.slug}
							path={"/admin/" + route.path}
							element={<Suspense fallback={"loading..."}>{route.component}</Suspense>}
						/>
					))}
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default App
