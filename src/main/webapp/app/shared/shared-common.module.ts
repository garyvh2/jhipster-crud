import { NgModule } from '@angular/core';

import { WorkflowSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WorkflowSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WorkflowSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WorkflowSharedCommonModule {}
