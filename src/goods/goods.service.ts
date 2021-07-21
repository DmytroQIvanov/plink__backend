import { Injectable } from '@nestjs/common';
const fs = require('fs')

@Injectable()
export class GoodsService {
    getGoods() {
        let result =[]
        fs.readFile('./goods.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("File read failed:", err)
                return
            }
            // console.log('File data:', jsonString) 
        result = jsonString;
        console.log(result)
        return jsonString

        })
        // return result
      }
}
