import "../styles/Container.css"

interface IProps {
    children: any
}

export default function Container(props: IProps) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}