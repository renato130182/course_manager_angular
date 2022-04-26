import { NgModule } from "@angular/core";
import { MoneyValue } from "./money-value.pipe";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
    declarations:[
        ReplacePipe,
        MoneyValue
    ],
    exports:[
        ReplacePipe,
        MoneyValue
    ]
})

export class AppPipeModule{

}