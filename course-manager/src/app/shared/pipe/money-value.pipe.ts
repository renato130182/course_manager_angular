import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'moneyValue'
})

export class MoneyValue implements PipeTransform{
   transform(value: any, args: any) {
     return 'R$' + args.toString().replace('.',',');   
   }
}