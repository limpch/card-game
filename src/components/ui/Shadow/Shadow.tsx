import { FC, ReactNode } from 'react';
import classes from './styles.module.scss';
import { colors, TColors } from '@/config/styles.config';

interface ShadowProps {
	children?: ReactNode;
	type?: 'boxShadow' | 'filter';
	c?: TColors;
}

export const Shadow: FC<ShadowProps> = ({
	children,
	c = 'primaryDark',
	type = 'filter',
}) => {
	const shadowStyle =
		type === 'boxShadow'
			? { boxShadow: `-6px 6px ${colors[c]}` }
			: { filter: `drop-shadow(-3px 1px ${colors[c]})` };

	return (
		<div
			className={classes.shadow}
			style={shadowStyle}
		>
			{children}
		</div>
	);
};
