import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'period',
                loadChildren: './period/period.module#WorkflowPeriodModule'
            },
            {
                path: 'project',
                loadChildren: './project/project.module#WorkflowProjectModule'
            },
            {
                path: 'team',
                loadChildren: './team/team.module#WorkflowTeamModule'
            },
            {
                path: 'student',
                loadChildren: './student/student.module#WorkflowStudentModule'
            },
            {
                path: 'story',
                loadChildren: './story/story.module#WorkflowStoryModule'
            },
            {
                path: 'sprint',
                loadChildren: './sprint/sprint.module#WorkflowSprintModule'
            },
            {
                path: 'review',
                loadChildren: './review/review.module#WorkflowReviewModule'
            },
            {
                path: 'period',
                loadChildren: './period/period.module#WorkflowPeriodModule'
            },
            {
                path: 'project',
                loadChildren: './project/project.module#WorkflowProjectModule'
            },
            {
                path: 'team',
                loadChildren: './team/team.module#WorkflowTeamModule'
            },
            {
                path: 'student',
                loadChildren: './student/student.module#WorkflowStudentModule'
            },
            {
                path: 'story',
                loadChildren: './story/story.module#WorkflowStoryModule'
            },
            {
                path: 'sprint',
                loadChildren: './sprint/sprint.module#WorkflowSprintModule'
            },
            {
                path: 'review',
                loadChildren: './review/review.module#WorkflowReviewModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkflowEntityModule {}
