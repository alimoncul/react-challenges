import { Link } from 'react-router-dom';

function MLink(props: {
    description: {
        self: string
        title: string
        difficulty: string
    }
}): JSX.Element {
    let classToAssign = "";
    let glow = false;

    if (props.description.difficulty === "EASY") {
        classToAssign = "text-success"
    }
    else if (props.description.difficulty === "MEDIUM") {
        classToAssign = "text-warning"
    }
    else if (props.description.difficulty === "HARD") {
        classToAssign = "text-danger"
    } else if (props.description.difficulty === "IMPOSSIBLE") {
        classToAssign = "text-danger"
        glow = true;
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
            <Link to={`/${props.description.self}`}>
                {props.description.title}
            </Link>
            <span className={`badge badge-primary badge-pill ${classToAssign}`} style={{ textShadow: glow ? "0 0 10px #FF0000" : "" }}>
                {props.description.difficulty}
            </span>
        </li>
    )
}

export default MLink;
