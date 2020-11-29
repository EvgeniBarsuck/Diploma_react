import { Switch, Route } from 'react-router-dom';
import indexAboutCompany from '../components/main/AboutCompany/indexAboutCompany'

const Main = () => (
  <main>
    <Switch>
      <Route path='/aboutcompany' component={indexAboutCompany}/>
      <Route path='/service/:id'/>
    </Switch>
  </main>
)

export default Main;