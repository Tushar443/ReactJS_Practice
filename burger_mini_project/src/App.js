import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BergerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './Containers/Orders/Orders';
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch >
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
