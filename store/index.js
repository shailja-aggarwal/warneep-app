export const state = () => ({
    listItem: [],
    isAddNewShift: false,
  })
  

  
  export const mutations = {
    updateDatesList(state, val) {
      state.listItem.push(val)
    },
    updateAddNewShift(state, val) {
        state.isAddNewShift = val
      }
  }
  
