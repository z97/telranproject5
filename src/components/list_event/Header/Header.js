import React from 'react';
import SearchByNameOrGuide from "./SearchByNameOrGuide";
import SearchByDateRange from "./SearchByDateRange";
import SearchByPlace from "./SearchByPlace";
import SearchByLevel from "./SearchByLevel";

const Header = () => {
    return (
        <div>
            <SearchByNameOrGuide/>
            <SearchByDateRange/>
            <SearchByPlace/>
            <SearchByLevel/>
        </div>
    );
};

export default Header;