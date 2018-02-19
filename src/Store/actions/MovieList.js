import axios from 'axios';


export const setMovieList=(movieList,pageNum)=>{

    return{
        type:"SET_MOVIELIST",
        movieList:movieList,
        activePage:pageNum
    };
};
export const startFetch=()=>{
    return{
        type:"START_FETCH_MOVIELIST"
    };
}
export const initMoviesList = (pageNum) =>{

    return dispatch=>{
        dispatch(startFetch())
        let api ="a64861ae8330e04f57cad056f843569a";
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=" + api + "&language=en-US&page=" + pageNum;
        axios.get(url).then(res=>{
            console.log("displatchrd")
            dispatch(setMovieList(res.data.results,pageNum));      
              
        }).catch(err=>{console.log(err);
         // this.setState({loading:false,error:err})
         
    });
    }
}