export type Program = {
    name: string,
    completed: boolean,
    start: Date,
    id: number,
    active: boolean
    monday: Day,
    tuesday: Day,
    wednesday: Day,
    thursday: Day,
    friday: Day,
    saturday: Day,
    sunday: Day
}

export type Lift = {
    name: string,
}
export type Day = {
    name: string,
    lifts: Array<Lift>
}

export interface NavItem {
    url: string;
    text: string;
}