import { ADD_HORDE, RESET_FACTION } from "../actions/actions";

const initialState = { data: [] };

// const oldReducer = async (state = initialState, action) => {
//     console.log( 'reducer in action' );
//     switch(action.type){
//         case ADD_HORDE:
//             const options = {
//                 method: 'GET',
//                 url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/horde',
//                 headers: {
//                   'X-RapidAPI-Key': '740ee6a4d7mshdd547fa2a8ebc6bp151af8jsn3fcc147bf69c',
//                   'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
//                 }
//               };
              
//               try {
//                 const response = await axios.request(options);
//                 console.log(response.data);
//                 const withImages = response.data.filter( item => item.img );
//                 console.log(withImages)
//                 return { ...state, data: withImages }
//               } catch (error) {
//                 console.error(error);
//               }
//               break;
//         default:
//             return state;
//     }
// }

const reducer = (state = initialState, action) => {
    console.log( 'reducer in action' );
    switch(action.type){
        case ADD_HORDE:
            return { ...state, data: action.payload };
        case RESET_FACTION:
            return initialState
        default:
            return state;
    } 
}
export default reducer;