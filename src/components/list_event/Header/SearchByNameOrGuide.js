import React from 'react';
import ReactDOM from "react-dom";

const SearchByNameOrGuide = () => {
    return (
        <div>
            <MyForm/>
        </div>
    );
};

function MyForm() {
    return (
        <form>
            <label>Search:
                <input type="text" placeholder="name, guide, other"/>
            </label>
        </form>
    )
}

export default SearchByNameOrGuide;