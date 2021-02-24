import constants from './constants';

const initialState = {
    counter:0,
    results:[]
}

const reducer = (state = initialState,action) =>{

    switch (action.type) {
        case constants.increment:
            return{
                ...state,
                counter: state.counter + 1
            }
        case constants.decrement:
            return{
                ...state,
                counter: state.counter - 1
            }
        case constants.add:
            return{
                ...state,
                counter: state.counter + action.payload.value
            }
        case constants.sub:
            return{
                ...state,
                counter: state.counter - action.payload.value
            }
        case constants.store_result:
            return{
                ...state,
                results: state.results.concat({id:Math.random(),value:state.counter})
            }
        case constants.delete_result:
            const newArr = [...state.results]
            const newNewArr = newArr.filter((ele)=> ele.id!==action.payload)
            return{
                ...state,
                results: newNewArr
            }
        default:
            return state;
    }
}

export default reducer;