import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routerConfig } from "./config/routes"
import { Suspense } from "react"
import { GameLayout } from "./Layout/GameLayout/GameLayout"

const App = () => {
	return (
		<GameLayout>
			<BrowserRouter>
				<Routes>
					{routerConfig.routes.map(route => (
						<Route key={route.slug} path={route.path} element={route.component}>
							{route.children?.map(child => (
								<Route
									key={child.slug}
									path={child.path}
									element={<Suspense fallback={"loading..."}>{child.component}</Suspense>}
								/>
							))}
						</Route>
					))}
				</Routes>
			</BrowserRouter>
		</GameLayout>
	)
}

export default App
