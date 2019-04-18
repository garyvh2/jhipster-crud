import { Moment } from 'moment';
import { IStory } from 'app/shared/model/story.model';
import { ITeam } from 'app/shared/model/team.model';

export interface ISprint {
    id?: number;
    name?: string;
    startDate?: Moment;
    endDate?: Moment;
    status?: string;
    stories?: IStory[];
    team?: ITeam;
}

export class Sprint implements ISprint {
    constructor(
        public id?: number,
        public name?: string,
        public startDate?: Moment,
        public endDate?: Moment,
        public status?: string,
        public stories?: IStory[],
        public team?: ITeam
    ) {}
}
