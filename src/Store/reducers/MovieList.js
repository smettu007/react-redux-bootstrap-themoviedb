
const initialState ={
    movieList:null,
    activePage:1,
    error:null,
    loading:false
}

const reducer = (state = initialState,action)=>{

    switch(action.type){

        case "SET_MOVIELIST":
            return {...state,
                movieList:action.movieList,
                activePage:Number(action.activePage),
                loading:false
            }
        case "START_FETCH_MOVIELIST":
            return {
                ...state,
                loading:true
            }
        default:   return state;
    }

 
}
export default reducer;