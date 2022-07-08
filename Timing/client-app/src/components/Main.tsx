import React from "react";
import data  from "../data";
import Place from "./Place";

function Main(): JSX.Element {
    const places = data.map(item => <Place {...item} />);
    return (
        <main>
            <div className="places--container">
                {places}
            </div>
        </main>
    )
}

export default Main