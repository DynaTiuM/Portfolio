import {InternProject} from "./InternProject";

export interface Internship {
    id: number;
    image: string;
    period: string;
    info: string;
    background_symbol: string;
    internProjects: InternProject[];
}