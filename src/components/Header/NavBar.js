import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
import BreadCrumbs from './BreadCrumbs';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

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
          "url" : "/certificates" 
        },
  "5" : {
          "icon" : <VerifiedUserIcon/>,
          "url" : "/employecertificates"
        },
  "6" : { 
          "icon" :<InfoIcon/>,
          "url" : "/examplesofworks"
        },
  "7" : { 
          "icon" : <PersonAddIcon/>,
          "url" : "/jobopenings"
        },
  "8" : { 
          "icon" : <FeedbackIcon/>,
          "url" : "/feedback"
        },
  "9" : { 
          "icon" : <ContactsIcon/>,
          "url" : "/contacts"
        },
  "10" : { 
          "icon" : <SupervisedUserCircleIcon/>,
          "url" : "/ourparther"
        }
}

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
          <BreadCrumbs/>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Главная','О компании', 'Аренда оборудования', 'Наши услуги', 'Сертификаты компании', 'Сертификаты сотрудников','Примеры работ','Вакансии', 'Обратная связь','Контакты', 'Наши партнеры'].map((text, index) => (
            <ListItem button  key={text}>
              <ListItemIcon>{icon[index].icon}</ListItemIcon> 
              <Link to={icon[index].url}>
                <ListItemText>{text}</ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}

