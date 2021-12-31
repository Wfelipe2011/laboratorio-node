import { mongoose } from "./infra";
export interface IFormularios{
  name: string,
  email: string,
  cpf: string
}

const FormulariosEntity = {
  name: {
    type: String,
    required: true,
    // minlength: 3,
    // maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  }
};

export const Formularios = mongoose.model(
  "formularios",
  new mongoose.Schema(FormulariosEntity)
);
