import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'note/:id', component: NoteComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
