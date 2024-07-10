import {Project} from "./Project";

export interface ProjectInformation {
    project: Project,
    introduction: string,
    description: string,
    languages: string[],
    big_image?: string
}