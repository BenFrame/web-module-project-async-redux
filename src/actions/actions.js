export const ADD_HORDE = 'ADD_HORDE'
export const RESET_FACTION = 'RESET_FACTION'

export const addHorde = ( data ) => {
    console.log(' adding horde' )
    return({type:ADD_HORDE, payload: data })
}
export const resetFaction = () => {
    return({type:RESET_FACTION})
}