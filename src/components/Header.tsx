import "../styles/Header.css"

interface IProps {
    titulo: string
}

export default function Header(props: IProps) {
    return (
        <header className="header">
            <h1>
                {props.titulo}
            </h1>
        </header>
    )
}