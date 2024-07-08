import React from 'react';
import ItemList from "../ItemList/ItemList";
import {getProgrammingLanguages} from "../../services/programmingLanguages";

const ProgrammingLanguages = () => {

    return (
        <ItemList items={getProgrammingLanguages()} />
    );
};

export default ProgrammingLanguages;
