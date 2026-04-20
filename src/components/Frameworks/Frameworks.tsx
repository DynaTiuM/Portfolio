import ItemList from "../ItemList/ItemList";
import {getFrameworks} from "../../services/frameworks";

const Frameworks = () => {
    return (
        <ItemList items={getFrameworks()} />
    );
};

export default Frameworks;
