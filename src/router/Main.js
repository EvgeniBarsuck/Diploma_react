import { Switch, Route } from 'react-router-dom';
import indexAboutCompany from '../components/indexAboutCompany'

const Main = () => (
  <main>
    <Switch>
      <Route path='/aboutcompany' component={indexAboutCompany}/>
    </Switch>
  </main>
)

export default Main;