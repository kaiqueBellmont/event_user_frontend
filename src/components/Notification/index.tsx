import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ThemeContext from "../../context/themeContext";

export default function AlignItem() {
  const theme = React.useContext(ThemeContext);

  return (
    <ListItem
      alignItems="center"
      sx={{
        backgroundColor: theme.mistyBlue,
        height: "auto",
        textWrap: "pretty",
        width: "100%",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        sx={{ display: "inline" }}
        primary="Brunch this weekend?"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}