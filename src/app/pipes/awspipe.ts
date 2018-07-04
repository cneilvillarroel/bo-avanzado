import { Pipe, PipeTransform } from '@angular/core';
import { GLOBAL } from '../services/api/global';


@Pipe({ name: 'aws' })
export class AwsPipe implements PipeTransform {

    url: String = GLOBAL.aws_repo;

    constructor() {}
    transform(img: any, folder: any) { 
    
    return this.url+folder+'/'+img;

    }
} 
