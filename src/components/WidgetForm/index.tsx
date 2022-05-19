import { useState } from "react";

import bugImagesURL from "../../assets/bug.svg";
import ideaImagesURL from "../../assets/idea.svg";
import thoughtImagesURL from "../../assets/thought.svg";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImagesURL,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImagesURL,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImagesURL,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);

  function handleFeedbackReset() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 relative rounded-2xl mb-4 p-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestart={handleFeedbackReset}/>
      )}

      <footer>Feito com ♥ por Gabriel</footer>
    </div>
  );
}
