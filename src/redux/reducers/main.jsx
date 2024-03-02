//

import {combineReducers} from "redux"
import { cartreducer } from "./Reducer"


const rootred = combineReducers({
    cartreducer
})

export default rootred


//multiple reducer  ko handle krne keliy main js file create kiya gya hai 
//reage aur reduce karenge 
//sare recduece ko add kar denge aur call krenge