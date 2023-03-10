export type Program = {
	name: string;
	completed: boolean;
	start: Date;
	id: number;
	active: boolean;
	days: Array<Day>;
	monday: boolean;
	tuesday: boolean;
	wednesday: boolean;
	thursday: boolean;
	friday: boolean;
	saturday: boolean;
	sunday: boolean;
	duration: number;
	template: string;
};
export type Category = {
	name: string;
	active: boolean;
};

export type Lift = {
	name: string;
};
export type Day = {
	name: string;
	lifts: Array<Lift>;
	active: boolean;
	categories: Array<Category>;
	label: string;
};

export interface NavItem {
	url: string;
	text: string;
	icon: string;
}
