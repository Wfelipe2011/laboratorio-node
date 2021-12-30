//npm install ibm-watson
import * as NaturalLanguageUnderstandingV1 from "ibm-watson/natural-language-understanding/v1";
import { ConfigWatson } from "./watson.contants";

export class WatsonNaturalLanguageAdapter {
  private watson: NaturalLanguageUnderstandingV1;
  private configAnalize: NaturalLanguageUnderstandingV1.AnalyzeParams = {
    features: {
      categories: {
        limit: 10,
      },
      keywords: {
        limit: 10,
      },
    },
  };

  constructor() {
    this.watson = new NaturalLanguageUnderstandingV1(ConfigWatson);
  }

  static async analyze(text: string, language: string = "pt") {
    const { entity, configAnalize } = WatsonNaturalLanguageAdapter.start(text, language);
    try {
      const { result } = await entity.watson.analyze(configAnalize);
      return result;
    } catch (error) {
      console.error(error);
      throw new Error("Erro na consulta ibm!");
    }
  }

  private static start(text: string, language: string) {
    const entity = new WatsonNaturalLanguageAdapter();
    const configAnalize = entity.getConfigAnalize(text, language);
    return { entity, configAnalize };
  }

  private getConfigAnalize(text: string, language: string) {
    return {
      ...this.configAnalize,
      text,
      language,
    };
  }
}
