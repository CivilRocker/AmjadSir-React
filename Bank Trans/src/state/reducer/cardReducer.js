export const cardReducer=(state={cards:[], trans:[]},action)=>{
        switch(action.type){
            case "addcard":
                return{
                    ...state,
                    cards:action.payload
                }
            case "addtrans":{
                return{
                    ...state,
                    trans:action.payload
                }
            }
                default:
                return state
        }
        return state
}