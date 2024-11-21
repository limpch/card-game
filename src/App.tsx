import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routerConfig } from "./config/routes"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routerConfig.routes.map(route => (
					<Route key={route.slug} path={route.path} element={route.component}>
						{route.children?.map(child => (
							<Route key={child.slug} path={child.path} element={child.component} />
						))}
					</Route>
				))}
			</Routes>
		</BrowserRouter>
	)
}

export default App

