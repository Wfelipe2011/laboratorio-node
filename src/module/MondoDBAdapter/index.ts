import { FormEntity } from "./entity/formEntity";

export class MongoDBAdapter {
  private formEntity: FormEntity["data"];
  constructor(Entity) {
    this.formEntity = Entity.use();
  }

  async find() {
    return await this.formEntity.find();
  }

  async save(obj) {
    return await this.formEntity.create(obj);
  }

  async findByName(value) {
    return await this.formEntity.find({ name: value });
  }
}
