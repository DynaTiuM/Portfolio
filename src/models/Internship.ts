import {InternProject} from "./InternProject";

export interface Internship {
    id: number;
    name: string;
    period: string;
    info: string;
    internProject: InternProject;
}