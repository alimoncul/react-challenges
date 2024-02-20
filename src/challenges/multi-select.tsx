import { useRef, useState } from "react";
import Title from "../components/Title";
import DescriptionsJSON from '../descriptions.json';
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import { ReactComponent as Cross } from '../assets/cross.svg';
import { ReactComponent as NotFound } from '../assets/not-found.svg';
import { ReactComponent as VerticalLine } from '../assets/vertical-line.svg';

const apiUrl = "https://rickandmortyapi.com/api/character/?name=";

type Response = {
    id: number;
    image: string;
    name: string;
    episode: string[];
}

type SearchRef = {
    value: string
}

export default function MultiSelect() {
    const [selected, setSelected] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState<Response[]>([]);
    const [optionsVisible, setOptionsVisible] = useState(false);
    const searchRef = useRef(null);

    const fetchData = async (text: string) => {
        if (text?.length) {
            setIsLoading(true);
            const resp = await fetch(apiUrl + encodeURIComponent(text));
            const toJSON = await resp.json();
            setOptions(toJSON.results);
            setIsLoading(false);
        } else {
            setOptions([]);
            setIsLoading(false);
        }
    };

    const removeSelectedHandler = (text: string) => {
        setSelected(selected.filter((s) => s !== text));
    }

    const handleSelection = (text: string) => {
        if (selected.includes(text)) {
            setSelected(selected.filter((s) => s !== text));
        } else {
            setSelected([...selected, text]);
        }

        setOptionsVisible(false);
    }

    const handleReset = () => {
        setSelected([]);
        setOptionsVisible(false);
        setOptions([]);

        //@ts-ignore
        if (searchRef.current && searchRef.current.value) {
            //@ts-ignore
            searchRef.current.value = ""
        }
    }

    const getFormattedOption = (option: string, episodes = 0) => {
        //@ts-ignore
        const searchInput = searchRef.current.value;
        const index = option.toLowerCase().indexOf(searchInput.toLowerCase());
        if (index !== -1) {
            return (
                <div className="d-flex flex-column">
                    <span className="fs-4 row-cols-auto">
                        {option.substring(0, index)}
                        <strong>{option.substring(index, index + searchInput.length)}</strong>
                        {option.substring(index + searchInput.length)}
                    </span>
                    <span className="row-cols-auto fs-6 text-start">Episodes: {episodes}</span>
                </div>
            );
        }
        return option;
    };

    return (
        <div className="App">
            <header className="App-header">
                <Title description={DescriptionsJSON.multiSelect} />
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="d-flex bg-white position-relative rounded-2 flex-wrap" style={{ minWidth: 600, maxWidth: 600, padding: 2, paddingRight: 60 }}>
                        {selected?.map((s, index) =>
                            <div key={"ml-spans-" + s} className="d-flex col-md-auto gap-2 m-1 p-1 rounded-2 justify-content-center" onClick={() => removeSelectedHandler(s)} style={{ cursor: "pointer", outline: "none", background: "rgb(210, 210, 210)" }}>
                                <span className="fs-6 align-self-center col-md-auto text-dark">{s}</span>
                                <Cross className="fs-5 align-self-center col-md-auto" style={{ width: 12, height: 12 }} />
                            </div>
                        )}
                        <input className="d-flex form-control shadow-none col-md" style={{ border: 0, minWidth: 100 }} onFocus={() => setOptionsVisible(true)} onBlur={() => setTimeout(() => setOptionsVisible(false), 100)} onChange={(e) => fetchData(e.target.value)} ref={searchRef}></input>
                        <div className="position-absolute p-2 d-flex align-items-center justify-content-center gap-1 h-100" style={{ width: 60, right: 0, top: 0 }}>
                            <Cross onClick={() => handleReset()} style={{ width: 12, height: 12, cursor: "pointer" }} />
                            <VerticalLine style={{ width: 12 }} />
                            <DownArrow style={{ width: 16, height: 16 }} />
                        </div>
                        <ul className={`col-12 list-group w-100 ${optionsVisible ? "" : "d-none"}`} style={{ maxHeight: 320, overflow: "scroll", overflowX: "hidden" }}>
                            {
                                options ? options?.map((option) => {
                                    return <li className="list-group-item d-flex align-items-center" key={"ml-li-" + option.id} onClick={() => handleSelection(option.name)}>
                                        <input className="form-check-input" type="checkbox" readOnly={true} checked={selected.includes(option.name)}></input>
                                        <img className="mx-3 rounded-2" src={option.image} alt="new" style={{ width: 60, height: 60 }} />
                                        {getFormattedOption(option.name, option.episode.length)}
                                    </li>
                                }) : <li className="list-group-item d-flex align-items-center justify-content-center gap-4" key={"ml-li-not-found"}>
                                    <NotFound style={{ width: 64, height: 64 }} />
                                    <span className="fs-3 text-center">Nothing found!</span>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}