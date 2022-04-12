import { useState } from "react"
import "../styles/ListItem.css"
import { Item } from "../types/Item"

interface IProps {
    item: Item
    click: (id: number, done: boolean) => void
}

export default function ListItem(props: IProps) {
    const [isChecked, setIsCheked] = useState(props.item.done)

    return (
        <div className="content">
            <input
                type={"checkbox"}
                checked={isChecked}
                onClick={() => props.click(props.item.id, !isChecked)}
                onChange={(e) => setIsCheked(e.target.checked)}
            />
            <label
                style={{
                    textDecoration: `${isChecked ? 'line-through' : 'initial'}`
                }}
            >{props.item.name}</label>
        </div>
    )
}