import { NgModule } from '@angular/core';
import {NewServeComponent} from './new-service.component';
import {NewServiceCall} from './new-serv.service';

@NgModule({
    declarations: [
        NewServeComponent
      ],
      imports: [
      ],
      providers: [NewServiceCall]
})
export class NewServiceModule { }