import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Badge, List, useMediaQuery } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThemeContext from "../../context/themeContext";
import { useNavigate } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchBar from "@mkyy/mui-search-bar";
import notificationsMock from "../../utils/mocks/notification";
import AlignItem from "../Notification";
import "/home/kaique/projects/personal/event_user_frontend/src/GlobalListStyles.css";

interface Page {
  path: string;
  placeholder: string;
}

const pages: Page[] = [
  {
    path: "/users",
    placeholder: "Usuários",
  },
  {
    path: "/events",
    placeholder: "Eventos",
  },
  {
    path: "/reports",
    placeholder: "Relatórios",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const theme = React.useContext(ThemeContext);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    console.log(value);
  };

  const [textFieldValue, setTextFieldValue] = React.useState("");

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElNotification, setAnchorElNotification] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNotificationMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNotification = () => {
    setAnchorElNotification(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        alignSelf: "flex-start",
        backgroundColor: theme.darkBlue,
        color: "white",
        boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {!isSmallScreen && (
            <img
              src="/Logo-Freelaw-Branca.webp"
              alt="FreeLaw Logo"
              style={{
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
          )}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.placeholder}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ":hover": {
                cursor: "default",
                marginBottom: "1px",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => navigate(page.path)}
                sx={{
                  color: "white",
                  borderBottom: "1px solid transparent",
                  display: "block",
                  ":hover": {
                    cursor: "pointer",
                    borderBottom: "1px solid white",
                  },
                  transition: "border-color 0.3s ease-in-out", // Transição suave
                }}
              >
                {page.placeholder}
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ mr: 2 }}
            size="large"
            aria-label="Filter events"
            aria-controls="filter"
            aria-haspopup="true"
            onClick={handleOpenNotificationMenu}
            color="inherit"
          >
            <FilterAltIcon />
          </IconButton>
          <SearchBar
            value={textFieldValue}
            onChange={(newValue) => setTextFieldValue(newValue)}
            onSearch={() => {
              handleSearch(textFieldValue);
            }}
            style={{
              backgroundColor: "white",
              color: "darkblue",
              marginRigth: "10px",
            }}
          />

          <Box sx={{ mr: 3 }}>
            <Tooltip title={"Notificações"}>
              <IconButton
                size="large"
                aria-label="mostra notificações"
                color="inherit"
                onClick={handleOpenNotificationMenu}
              >
                <Badge badgeContent={notificationsMock.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
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
              open={Boolean(anchorElNotification)}
              onClose={handleCloseNotification}
            >
              <List
                dense={true}
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  height: 300,
                }}
              >
                {notificationsMock.map((not) => (
                  <MenuItem key={not.id} onClick={handleCloseNotification}>
                    <AlignItem />
                  </MenuItem>
                ))}
              </List>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Kaique"
                  sx={{ bgcolor: "white", color: "#071330" }}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
