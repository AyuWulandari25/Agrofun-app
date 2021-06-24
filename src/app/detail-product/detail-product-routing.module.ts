import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadDetailComponent } from './read-detail/read-detail.component';

const routes: Routes = [{ path: 'detail', component: ReadDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProductRoutingModule {}
