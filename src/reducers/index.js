export default (state = {num:0}, action) => {
console.log(action + ","+action.type)

  switch (action.type) {
    case 'INCREMENT':

      return { num: state.num+1};
    case 'DECREMENT':

      return { num: state.num-1};

    case 'SET_ZERO':
      return { num: 0};
    default:
      console.log('default');
      return { num: state.num}
  }
}


