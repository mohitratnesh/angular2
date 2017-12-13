import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'sortnumber'
})

export class SortNumberPipe implements PipeTransform{
    transform(value: any[], args: string) :any {
        if(args === 'asc'){
            return value.sort();
        }else if(args==='desc'){
            return value.sort().reverse();
        }
    
    } 
}