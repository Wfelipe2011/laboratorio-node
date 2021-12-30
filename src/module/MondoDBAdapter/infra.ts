import * as mongoose from "mongoose";
export { mongoose };

export class MongoDBConect {
  static async startMongo() {
    await mongoose
      .connect(
        `mongodb+srv://Wilson:${process.env.PASSWORD_DATABASE}@cluster0.d07wk.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        }
      )
      .then(() => {
        console.log("Conectado ao Banco MongoDB");
      })
      .catch((error) => {
        console.log(`${error}: Erro ao conectar!`);
      });
  }
}
