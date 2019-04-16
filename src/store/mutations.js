export default {
  changeid (state, id) {
    state.footerID = id
    try {
      localStorage.footID = id
    } catch (e) {
    }
  },
  changeLandId (state, ID) {
    state.LandID = ID
  },
  changeLandState (state, is) {
    state.isShow = is
  }
}
