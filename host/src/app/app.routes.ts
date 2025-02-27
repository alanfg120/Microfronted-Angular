import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

  
export const routes: Routes = [
    {
        path: "mf1",
        loadComponent : () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './Component'
        })
        .then(m => {
            return m.AppComponent
        })
    },
    {
        path: "mf2/:username",
        loadComponent : () => import('mf2/Component').then(m => m.AppComponent)
    },
    {
        path: "mf3/:username",
        loadComponent : () => import('mf3/Component').then(m => m.AppComponent)
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "mf1"
    }
  
];
