import { FC, ReactNode } from 'react';
import classes from './styles.module.scss';

interface ShadowProps {
	children?: ReactNode;
	c?: string;
}

export const Shadow: FC<ShadowProps> = ({ children, c }) => {
	return (
		<div
			className={classes.shadow}
			style={{ '--shadow-color': c } as React.CSSProperties}
		>
			{children}
		</div>
	);
};
