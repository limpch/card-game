import { IRoute } from '@/types/routes';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/HomePage'));
const BattlePage = lazy(() => import('@/pages/BattlePage'));

class RouterConfig {
	routes: IRoute[] = [
		{
			path: '/',
			component: <HomePage />,
			slug: 'home',
		},
		{
			path: '/battle',
			component: <BattlePage />,
			slug: 'battle',
		},
	];

	getRouteBySlug(slug: string) {
		return this.routes.find(route => route.slug === slug);
	}
}

export const routerConfig = new RouterConfig();
