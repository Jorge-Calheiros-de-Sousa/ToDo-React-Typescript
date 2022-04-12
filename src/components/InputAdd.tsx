import { useState } from "react"
import "../styles/InputAdd.css"

type Props = {
    onEnter: (taskname: string) => void
}

export default function InputAdd({ onEnter }: Props) {
    const [inputText, setInputText] = useState<string>("")

    function handleKeyUp(e: any) {
        if (e.code === "Enter" && inputText !== "") {
            onEnter(inputText);
            setInputText("");
        }
    }

    return (
        <div className="container-input">
            <div className="image">+</div>
            <input
                type={"text"}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={"Adicione uma tarefa"}
                onKeyUp={handleKeyUp}
            />
        </div>
    )
}