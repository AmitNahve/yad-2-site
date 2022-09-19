import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'stringShortrn'
})
export class StringShortenPipe implements PipeTransform{
    transform(value: string,length: number ) {
       if(value.length > length){
           return value.slice(0, length) + "..."
       }
       return value;
    }

}

