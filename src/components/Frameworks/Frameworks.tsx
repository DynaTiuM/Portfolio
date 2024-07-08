import React from 'react';
import ItemList from "../ItemList/ItemList";
import {getFrameworks} from "../../services/frameworks";

const ProgrammingLanguages = () => {
    return (
        <ItemList items={getFrameworks()} />
    );
};

export default ProgrammingLanguages;
