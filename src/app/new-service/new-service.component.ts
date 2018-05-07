import { Component } from '@angular/core';
import { NewServiceCall } from './new-serv.service'
import { error } from 'selenium-webdriver';

@Component({
    selector: 'new-serv',
    templateUrl: './new-service.component.html'
})
export class NewServeComponent {
    public resVar: any;
    constructor(private newServiceCall: NewServiceCall) { }

    public getServiceCall() {
        let dumVar = 1;
        this.resVar = "check";
        this.newServiceCall.getDataFromDiffApp().subscribe((res: Response) => {
            this.resVar = res;
        },
            (error: any) => {

            })
    }
}