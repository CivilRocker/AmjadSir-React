export const loanReducer = (state = {cats: []}, action) => {
    switch (action.type) {
        case "addcat": //type:addCats==> published mode
            return {
                ...state,
                cats: action.payload,
            }
            default:
                return state;
    }    
}