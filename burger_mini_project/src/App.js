import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BergerBuilder';
function App() {
  return (
    <div className="App">
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
    </div>
  );
}

export default App;
