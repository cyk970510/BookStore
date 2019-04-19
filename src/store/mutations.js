export default {
  changeId (state, id) {
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
  },
  ShowLand (state) {
    state.showLand = true
  },
  hideLand (state) {
    state.showLand = false
  }
}
