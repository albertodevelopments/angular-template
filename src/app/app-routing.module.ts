/** Angular core */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CanLoad } from '@angular/router'

/** App imports */
import { AuthGuard } from '@core/index'

const routes: Routes = [
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
