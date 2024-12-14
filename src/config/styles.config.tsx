export const colors = {
	primaryLight: '#fff',
	primaryDark: '#0d1625',
	primaryRed: '#c71f5d',
	brightRed: '#ffbad3',
	primaryBlue: '#0058EB',
	lightBlue: '#0e82ee',
	shadowBlue: '#053585',
	brightBlue: '#b6dcff',
	primaryOrange: '#ff7c36',
	primaryGreen: '#3da47b',
	crystal: '#00ff88',
};

export const fontSizes = {
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px',
	xl: '20px',
	xxl: '24px',
};

export type TColors = keyof typeof colors;
export type TFontSizes = keyof typeof fontSizes;

interface IButtonProps {
	color: TColors;
	backgroundColor: TColors;
	fontSize: TFontSizes;
}

export const Button = ({ color, backgroundColor, fontSize }: IButtonProps) => {
	return (
		<button
			style={{
				color: colors[color],
				backgroundColor: colors[backgroundColor],
				fontSize: fontSizes[fontSize],
			}}
		>
			Click me
		</button>
	);
};

interface ITitleProps {
	color: TColors;
	fontSize: TFontSizes;
}

export const Title = ({ color, fontSize }: ITitleProps) => {
	return (
		<h1 style={{ color: colors[color], fontSize: fontSizes[fontSize] }}>
			Click me
		</h1>
	);
};
