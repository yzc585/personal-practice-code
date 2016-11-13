export default function buildReducer(spec) {
  const initialState = spec.initialState
  const boundPathname = spec.boundPathname
  return (state = initialState, action) => {
    if (boundPathname && action.pathname && boundPathname !== action.pathname) {
      return state
    }
    const type = action.type
    if (type in spec) {
      return spec[type](state, action)
    }
    return state
  }
}
