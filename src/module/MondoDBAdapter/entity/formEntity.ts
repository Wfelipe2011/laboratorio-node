import { mongoose } from "../infra";

export class FormEntity {
 
  public data: mongoose.PaginateModel<mongoose.Document<any, any, any>>;
  private entity = {
    name: {
      type: String,
      required: true,
      uppercase: true,
      minlength: 3,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      min: 1,
      max: 9999,
      unique: true,
    },
    cpf: {
      type: String,
      default: true,
      required: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  };

  constructor() {
    mongoose.model("formularios", new mongoose.Schema(this.entity));
    this.data = mongoose.model("formularios");
  }

  static use() {
    const entity = new FormEntity();
    return entity.data;
  }
}
