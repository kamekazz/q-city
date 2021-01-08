import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBarLink = (props) => {
  const { to, children, text } = props;
  return (
    <StyledLink
      to={to}
      activeStyle={{
        fontWeight: "bold",
        color: "red",
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>{children}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </List>
    </StyledLink>
  );
};
export default SideBarLink;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
