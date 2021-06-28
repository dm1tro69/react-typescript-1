import {combineReducers} from "redux";
import CellsReducers from "./cellsReducer"

const reducers = combineReducers({
    cells: CellsReducers
})

export default reducers

export type RootState = ReturnType<typeof reducers>
