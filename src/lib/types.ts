export type Program = {
    name: string,
    completed: boolean,
    start: Date,
    id: number,
    active: boolean
}

export interface NavItem {
    url: string;
    text: string;
}