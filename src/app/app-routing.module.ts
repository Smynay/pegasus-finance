import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { HomeComponent } from "./views/home/home.component";
import { PoolComponent } from "./views/pool/pool.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  // { path: "pool", component: PoolComponent },
  { path: "pool/:id", component: PoolComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
