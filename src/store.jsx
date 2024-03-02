import {createStore} from "redux";
import rootred from "./redux/reducers/main";

const store = createStore(
    rootred
);

export default store


//jo v data ho hm store file se get kerne kaa kaam krenge 
//index .js file ke andaar hm stroejs fie call carlenge 
//store pure component ke andar use karna isliy hame index.html me call kar liya hai 
