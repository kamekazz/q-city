import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import withAuthorization from 'components/Hooks/withAuthorization';
import { listOfProcess } from './listOfProcess';
import MasterLabel from './components/contacts/MasterLabel';
import MainContainer from './components/contacts/MainContainer';
import MasterPhysical from './components/contacts/MasterPhysical';
import { Paper } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '4em',
    backgroundColor: '#0a3f6311',
    height: 'calc(100vh - 4em)',
  },
  drawer: {
    marginTop: '4em',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginTop: '4em',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  drawerItem: {
    fontWeight: 700,
    fontSize: '1rem',
    opacity: '0.7',

    '&:hover': {
      opacity: 1,
      color: theme.palette.secondary.dark,
    },
  },
  mainPaper: {
    padding: 12,
    maxWidth: 700,
  },
}));

function IncomeProductReview(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [section, setSection] = useState('');
  const [status, setStatus] = useState(listOfProcess);
  const [mainData, setManiData] = useState({});
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  const changeStatueOnSection = (index, _status) => {
    setStatus([...status, (status[index].statusKey = _status)]);
  };

  const changeSection = (sectionText) => {
    handleCloseDrawer();
    setSection(sectionText);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List disablePadding>
        {listOfProcess.map((item, index) => {
          return (
            <ItemInDrawer
              key={item.title}
              title={item.title}
              section={section}
              changeSection={changeSection}
              index={index}
              statusKey={item.statusKey}
            />
          );
        })}
      </List>
    </div>
  );

  const returnContacts = (_section) => {
    switch (_section) {
      case 'Validate the master label':
        return (
          <MasterLabel
            setManiData={setManiData}
            mainData={mainData}
            changeSection={changeSection}
          />
        );
      case 'Physical inspection of the Master packaging':
        return <MasterPhysical />;
      default:
        return (
          <MainContainer
            setManiData={setManiData}
            mainData={mainData}
            changeStatueOnSection={changeStatueOnSection}
            changeSection={changeSection}
          />
        );
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Inbound Inspection Process
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.mainPaper}>{returnContacts(section)}</Paper>
      </main>
    </div>
  );
}

IncomeProductReview.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withAuthorization(IncomeProductReview);

const ItemInDrawer = ({ title, section, changeSection, index, statusKey }) => {
  const classes = useStyles();
  const theme = useTheme();

  const retuernColor = (_statu) => {
    switch (_statu) {
      case 'done':
        return theme.palette.success.main;
      case 'draff':
        return theme.palette.grey[400];
      case 'warning':
        return theme.palette.warning.main;
      default:
        return 'transparent';
    }
  };

  return (
    <ListItem
      button
      divider
      selected={section === title}
      key={title}
      onClick={() => changeSection(title, index)}
      style={{
        backgroundColor: retuernColor(statusKey),
      }}
    >
      <ListItemText
        primary={title}
        className={classes.drawerItem}
        disableTypography
        style={{
          color: section === title && theme.palette.primary.light,
        }}
      />
    </ListItem>
  );
};
