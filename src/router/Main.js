import { Switch, Route } from 'react-router-dom';
import indexAboutCompany from '../components/main/AboutCompany/AboutCompany';
import ExampleWork from '../components/main/Service/ExampleWork/ExampleWork'

const Main = () => (
  <main>
    <Switch>
      <Route path='/aboutcompany' component={indexAboutCompany}/>
      <Route path='/service/:id' component={ExampleWork}/>
    </Switch>
  </main>
)

export default Main;