import { ArrowLeft } from "phosphor-react";
import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: feedbackType;
  onFeedbackRestart: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestart }: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <>
      <header className="flex items-center gap-2 text-xl">
        <button
          onClick={() => onFeedbackRestart()}
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="h-4 w-4"></ArrowLeft>
        </button>

        <img
          src={feedbackTypeInfo.image.source}
          alt={feedbackTypeInfo.image.alt}
          className="h-6 w-6"
        />
        <span className="text-xl leading-6">{feedbackTypeInfo.title}</span>

        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="w-full min-w-[304px] min-h-[112px] text-sm bg-transparent placeholder-zinc-400 text-zinc-100 rounded-md border-1 border-zinc-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo... "
        />
      </form>

      <footer className="flex gap-2 mt-2">
        <button
          type="submit"
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300"
        >
          Enviar feedback
        </button>
      </footer>
    </>
  );
}
