import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'charts',
                data: { breadcrumb: 'Charts' },
                loadChildren: () =>
                    loadRemoteModule({
                        type: 'module',
                        remoteEntry: 'http://localhost:4200/remoteEntry.js',
                        exposedModule: './ChartsDemoModule',
                    }).then((m) => m.ChartsDemoModule),
            },
            {
                path: '',
                data: { breadcrumb: 'Charts' },
                loadChildren: () =>
                    loadRemoteModule({
                        type: 'module',
                        remoteEntry: 'http://localhost:4200/remoteEntry.js',
                        exposedModule: './ChartsDemoModule',
                    }).then((m) => m.ChartsDemoModule),
            },
            { path: '**', redirectTo: '/notfound' },
        ]),
    ],
    exports: [RouterModule],
})
export class UIkitRoutingModule {}
