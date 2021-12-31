import { mongoose } from "./infra";

export class MongoDBAdapter<T> {
  constructor(
    readonly entity: mongoose.PaginateModel<mongoose.Document<T, any, any>>
  ) {}

  getAll(): mongoose.Query<mongoose.Document<T, any, T>[], mongoose.Document<T, any, T>, {}, mongoose.Document<T, any, T>> {
    try {
      return this.entity.find();
    } catch (error) {
      throw new Error("Error! " + error.message);
    }
  }

  getOne(obj: any): mongoose.Query<mongoose.Document<T, any, any>, mongoose.Document<T, any, any>, {}, mongoose.Document<T, any, any>> {
    try {
      return this.entity.findOne(obj);
    } catch (error) {
      throw new Error("Error! " + error.message);
    }
  }

  async save(obj: T): Promise<mongoose.Document<any, any, any>> {
    try {
      return await new this.entity(obj).save();
    } catch (error) {
      throw new Error("Error! " + error.message);
    }
  }

  async update(id, obj): Promise<mongoose.Document<any, any, any>> {
    try {
      await this.entity.updateOne({ _id: id }, obj);
      return this.entity.findById(id); // fim de consulta
    } catch (error) {
      throw new Error("Error! " + error.message);
    }
  }

  async delete(id): Promise<{ ok?: number; n?: number; } & { deletedCount?: number; }> {
    try {
      return this.entity.deleteOne({ _id: id });
    } catch (error) {
      throw new Error("Error! " + error.message);
    }
  }
}
