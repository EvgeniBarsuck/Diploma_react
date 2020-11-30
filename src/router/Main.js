import { Switch, Route } from 'react-router-dom';
import indexAboutCompany from '../components/main/AboutCompany/AboutCompany';
import Service from '../components/main/Service/ExampleWork'

const Main = () => (
  <main>
    <Switch>
      <Route path='/aboutcompany' component={indexAboutCompany}/>
      <Route path='/service/:id' component={Service}/>
    </Switch>
  </main>
)

export default Main;