import { Componente5Component } from './componentes/componente5/componente5.component';
import { Componente4Component } from './componentes/componente4/componente4.component';
import { Componente3Component } from './componentes/componente3/componente3.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"",component:Componente1Component},
  {path:"componente2",component:Componente2Component},
  {path:"componente3",component:Componente3Component},
  {path:"componente4",component:Componente4Component},
  {path:"componente5",component:Componente5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
