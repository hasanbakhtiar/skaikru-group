import { addProduct } from "./tools/actions/shopAction";
import shopStore from "./tools/store/shopStore"

const store = shopStore();

store.subscribe(() => {
    console.log(store.getState());

})

store.dispatch(addProduct({myPhoto:"1.jpg",myTitle:"Oppo",myPrice:1000,myDesc:'super'}));
store.dispatch(addProduct({myPhoto:"2.jpg",myTitle:"Samsung",myPrice:1400,myDesc:'best'}));


const App = () => {
    return (
        <div>App</div>
    )
}

export default App