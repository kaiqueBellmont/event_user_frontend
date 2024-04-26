import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ThemeContext from "../../context/themeContext";
import { Box, IconButton, List, Menu, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { notificationsMock } from "../../utils/mocks/notification";

type notificationListProps = {
  anchorElNotification: null | HTMLElement;
  handleCloseNotification: () => void;
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>;
  notifications: any[];
};

export default function NotificationList(props: notificationListProps) {
  const {
    anchorElNotification,
    handleCloseNotification,
    setNotifications,
    notifications,
  } = props;
  const theme = React.useContext(ThemeContext);

  console.log(notifications);

  const deleteNotification = (id: number) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
  };

  return (
    <Menu
      sx={{
        mt: "45px",
        "& .MuiMenu-paper": {
          backgroundColor: theme.darkBlue,
          scrollbarWidth: "thin",
          scrollbarColor: "#4d4d4d #071330",
        },
      }}
      id="menu-notifications"
      anchorEl={anchorElNotification}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={
        notifications &&
        notifications.length > 0 &&
        Boolean(anchorElNotification)
      }
      onClose={handleCloseNotification}
    >
      <List
        dense={true}
        sx={{
          width: "100%",
          maxWidth: 300,
          maxHeight: 300,
          padding: 0,
        }}
      >
        {/* {notifications.map((not) => (
          <MenuItem key={not.id} onClick={() => {}}>
            <ListItem
              alignItems="center"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: theme.blueGray,
                height: "auto",
                textWrap: "pretty",
                width: "100%",
                borderRadius: "10px",
                padding: "10px",
                zIndex: 10,
                "&:hover": {
                  cursor: "pointer !important",
                },
              }}
            >
              <Box
                onClick={() => {
                  console.log("clicked");
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    cursor: "pointer !important",
                  },
                }}
              >
                <ListItemAvatar
                  sx={{
                    "&:hover": {
                      cursor: "pointer !important",
                    },
                  }}
                >
                  <Avatar alt="User" src={not.image} />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    display: "inline",
                    color: "white",
                    fontSize: "1.8rem",
                  }}
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: "inline",
                          "&:hover": {
                            cursor: "pointer !important",
                          },
                          color: "white",
                        }}
                        component="span"
                        variant="subtitle1"
                        color="white"
                      >
                        Evento Atualizado!
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: "inline",
                          "&:hover": {
                            cursor: "pointer !important",
                          },
                          color: "white",
                        }}
                        component="span"
                        variant="subtitle2"
                        color="text.primary"
                      >
                        por {not.notifiedBy} at{" "}
                        {new Date().toLocaleTimeString()}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </Box>
              <IconButton
                size="small"
                aria-label="delete"
                aria-haspopup="true"
                onClick={() => {
                  deleteNotification(not.id);
                }}
                color="inherit"
                sx={{
                  zIndex: 100,
                }}
              >
                <DeleteIcon color="error" />
              </IconButton>
            </ListItem>
          </MenuItem>
        ))} */}
      </List>
    </Menu>
  );
}
