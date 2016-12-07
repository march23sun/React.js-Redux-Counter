import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import SubCounter from './components/SubCounter'
import counter from './reducers'
import { increnment } from './action'

const store = createStore(counter)
const rootEl = document.getElementById('root')

function func1() {
  store.dispatch(increnment(true));
}

const test = ()=>{

  let i=store.getState();
  console.log("test:"+i.num);

}

const render = () => {

  ReactDOM.render(

    <div>

  <Counter
    MyState={store.getState()}
    onIncrement={func1}
    onDecrement={() => store.dispatch({type:'INCREMENT'})}
  />
  <SubCounter
  MyState={store.getState()}
  onRestart={() => store.dispatch({type:'SET_ZERO'})}
  />

    </div>

  ,
  rootEl
);



}

render()
store.subscribe(render);
store.subscribe(test);
