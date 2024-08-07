import { Check, X } from "@phosphor-icons/react";

export default function AnswerSoal({ isCorrect, answer }) {
    return (
        <div className="flex gap-1 items-center">
            {isCorrect ? <Check color="green" /> : <X color="red" />}
            <p>{answer}</p>
        </div>
    );
}
