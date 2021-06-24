import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadMainComponent } from './read-main/read-main.component';

const routes: Routes = [{ path: '', component: ReadMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
