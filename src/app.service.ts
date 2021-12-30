import { Injectable } from "@nestjs/common";
import { MongoDBAdapter } from "./module/MondoDBAdapter";
import { FormEntity } from "./module/MondoDBAdapter/entity/formEntity";
@Injectable()
export class AppService {
  entity: MongoDBAdapter;
  constructor() {
    this.entity = new MongoDBAdapter(FormEntity);
  }

  async getHello() {
    // const data = await this.entity.save({
    //   name: 'Anderson',
    //   email: 'andersonmotta@gmail.com',
    //   cpf: '123456'
    // });
    const data = await this.entity.find();
    console.log(data);

    return data;
  }
}
