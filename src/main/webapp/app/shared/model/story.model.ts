import { IReview } from 'app/shared/model/review.model';
import { IStudent } from 'app/shared/model/student.model';
import { ISprint } from 'app/shared/model/sprint.model';

export interface IStory {
    id?: number;
    code?: string;
    name?: string;
    description?: string;
    status?: string;
    reviews?: IReview[];
    developers?: IStudent[];
    sprint?: ISprint;
}

export class Story implements IStory {
    constructor(
        public id?: number,
        public code?: string,
        public name?: string,
        public description?: string,
        public status?: string,
        public reviews?: IReview[],
        public developers?: IStudent[],
        public sprint?: ISprint
    ) {}
}
