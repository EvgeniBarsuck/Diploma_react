import { Switch, Route } from 'react-router-dom';
import indexAboutCompany from '../Pages/AboutCompany/AboutCompany';
import ExampleWork from '../Pages/Service/ExampleWork'

const Main = () => (
  <main>
    <Switch>
      <Route path='/aboutcompany' component={indexAboutCompany}/>
      <Route path='/service/:id' component={ExampleWork}/>
    </Switch>
  </main>
)

export default Main;