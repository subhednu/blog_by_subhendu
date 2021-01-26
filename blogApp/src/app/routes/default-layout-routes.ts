import { Routes } from '@angular/router';

export const DEFAULT_ROUTES: Routes = [
    {
        /**
         * Path: The reference URL path is blank.
         * LoadChildren: This function importing CmsModule resides in /app/cms/cms.module.ts
         */
        path: '',
        loadChildren: () => import('../cms/cms.module').then(m => m.CmsModule)
    },

        /**
         * Path: The reference URL is auth.
         * LoadChildren: This function importing AuthModule resides in /app/auth/auth.module.ts
         */

    {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
    },
]