

const reducer = (state, action ) => {
    const { type, payload } = action

  const actionsMap = {
    
  }

  return actionsMap[type](state, payload)
}



export default reducer