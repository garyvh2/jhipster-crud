import { ITeam } from 'app/shared/model/team.model';
import { IPeriod } from 'app/shared/model/period.model';

export interface IProject {
    id?: number;
    name?: string;
    numStudent?: number;
    schedule?: string;
    status?: string;
    teams?: ITeam[];
    period?: IPeriod;
}

export class Project implements IProject {
    constructor(
        public id?: number,
        public name?: string,
        public numStudent?: number,
        public schedule?: string,
        public status?: string,
        public teams?: ITeam[],
        public period?: IPeriod
    ) {}
}
