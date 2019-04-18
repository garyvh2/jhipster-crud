import { IStudent } from 'app/shared/model/student.model';
import { ISprint } from 'app/shared/model/sprint.model';
import { IProject } from 'app/shared/model/project.model';

export interface ITeam {
    id?: number;
    name?: string;
    status?: string;
    members?: IStudent[];
    sprints?: ISprint[];
    project?: IProject;
}

export class Team implements ITeam {
    constructor(
        public id?: number,
        public name?: string,
        public status?: string,
        public members?: IStudent[],
        public sprints?: ISprint[],
        public project?: IProject
    ) {}
}
