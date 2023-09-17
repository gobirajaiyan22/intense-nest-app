import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(count: Number): Int32Array[] {
    let result = [];
    let i;
    console.log("Counting numbers till : ", count);
    for(i = 1; i <= count; i++){
        result.push(i);
    }
    console.log("Counting done")
    return result;
  }
}
