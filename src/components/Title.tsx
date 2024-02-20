import { Link } from 'react-router-dom';

function Title(props: {
    description: {
        self: string
        title: string
        difficulty: string,
        file: string,
        description: string
    }
}): JSX.Element {
    let classToAssign = "";
    let glow = false;

    switch (props.description.difficulty) {
        case "EASY":
            classToAssign = "text-success"
            break;
        case "MEDIUM":
            classToAssign = "text-warning"
            break;
        case "HARD":
            classToAssign = "text-danger"
            break;
        case "IMPOSSIBLE":
            classToAssign = "text-danger"
            glow = true
            break;
        default:
            classToAssign = "text-danger"
    }
    return (
        <div className="Title">
            <Link to="/react-challenges" className="fs-2 float-end mb-2">← Menu</Link>
            <div className="card text-start bg-dark mb-4">
                <div className="card-header bg-dark fs-4">
                    {props.description.title}
                    <span className={`badge badge-primary badge-pill ${classToAssign}`} style={{ textShadow: glow ? "0 0 10px #FF0000" : "" }}>{props.description.difficulty}</span>
                    <span className="badge badge-primary fs-6 float-end">{props.description.file}</span>
                </div>
                <div className="card-body bg-dark">
                    <p className="card-text bg-dark fs-6">{props.description.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Title;
