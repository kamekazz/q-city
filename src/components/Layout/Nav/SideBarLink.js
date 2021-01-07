import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { NavLink } from "react-router-dom";

const SideBarLink = (props) => {
  const { to } = props;
  return (
    <NavLink to={to} activeClassName="selected">
      <List>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Create Report"} />
        </ListItem>
      </List>
    </NavLink>
  );
};
export default SideBarLink;
