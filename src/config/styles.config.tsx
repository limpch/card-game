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

export type TColors = keyof typeof colors;

export const fontSizes = {
	xs: rem('12px'),
	sm: rem('14px'),
	md: rem('16px'),
	lg: rem('19px'),
	xl: rem('28px'),
	xxl: rem('38px'),
};

export type TFontSizes = keyof typeof fontSizes;

export function rem(px: number | string, base: number = 16): string {
	let numericPx: number = typeof px === 'string' ? parseFloat(px) : px;
	return numericPx / base + 'rem';
}
