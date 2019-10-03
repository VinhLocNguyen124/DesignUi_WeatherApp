import { CHANGE_MODE } from '../actions/types';

const initialState = true;

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_MODE:
            return !state;
        default:
            return state;
    }
}