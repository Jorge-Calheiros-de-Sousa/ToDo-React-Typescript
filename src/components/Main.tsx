import "../styles/Main.css"

interface IProps {
    children: any
}

export default function Main(props: IProps) {
    return (
        <main className="main">
            {props.children}
        </main>
    )
}
