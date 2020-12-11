import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SubjectIcon from '@material-ui/icons/Subject';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ContactsIcon from '@material-ui/icons/Contacts';
import WorkIcon from '@material-ui/icons/Work';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';

const icon = {
  "0" : { 
          "icon" : <HomeIcon/>,
          "url" : "/"
        },
  "1" : { 
          "icon" : <HelpIcon/>,
          "url" : "/aboutcompany"
        },
  "2" : { 
          "icon" :<SubjectIcon/>,
          "url" : "/requipmentrental"
        },
  "3" : {
          "icon" : <WorkIcon/>,
          "url" : "/service"
        },
  "4" : {
          "icon" : <VerifiedUserIcon/>,
          "url" : "/employecertificates"
        },
  "5" : { 
          "icon" :<InfoIcon/>,
          "url" : "/examplesofworks"
        },
  "6" : { 
          "icon" : <PersonAddIcon/>,
          "url" : "/jobopenings"
        },
  "7" : { 
          "icon" : <FeedbackIcon/>,
          "url" : "/feedback"
        },
  "8" : { 
          "icon" : <ContactsIcon/>,
          "url" : "/contacts"
        },
  "9" : { 
          "icon" : <SupervisedUserCircleIcon/>,
          "url" : "/ourparther"
        }
}

export default function NavBarLinks(){
  return ['Главная','О компании', 'Аренда оборудования', 'Наши услуги', 'Сертификаты сотрудников','Примеры работ','Вакансии', 'Обратная связь','Контакты', 'Наши партнеры'].map((text, index) => (
              <ListItem button  key={text}>
                <ListItemIcon>{icon[index].icon}</ListItemIcon> 
                <Link to={icon[index].url}>
                  <ListItemText>{text}</ListItemText>
                </Link>
              </ListItem>
        ));
}