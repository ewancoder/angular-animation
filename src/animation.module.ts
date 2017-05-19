import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule
    ]
})
export class AnimationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AnimationModule,
            providers: []
        }
    }
}
