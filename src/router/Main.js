import { Switch, Route } from 'react-router-dom';
import indexAboutCompany from '../Pages/AboutCompany/AboutCompany';
import ExampleWork from '../Pages/Service/ExampleWork';
import MainPage from '../Pages/Main/Main';
import Admin from '../Pages/Admin/Admin';
import Service from '../Pages/Service/Service';

const Main = () => (
  <main>
    <Switch>
      <Route path="/service" component={Service} />
      <Route path='/aboutcompany' component={indexAboutCompany}/>
      <Route path='/service/:id' component={ExampleWork}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/' component={MainPage}/>
    </Switch>
  </main>
)

export default Main;