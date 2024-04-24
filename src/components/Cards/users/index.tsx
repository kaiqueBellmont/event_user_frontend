import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea, Tooltip } from "@mui/material";
import ThemeContext from "../../../context/themeContext";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function UserCard() {
  const theme = React.useContext(ThemeContext);

  return (
    <Tooltip title={"Clique para editar"} placement="top">
      <Card sx={{ maxWidth: 345, bgcolor: theme.midnightBlue }}>
        <CardActionArea>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                alignContent: "center",
                mb: 3,
              }}
            >
              <Avatar
                alt="Kaique"
                sx={{
                  bgcolor: theme.mistyBlue,
                  color: theme.darkBlue,
                  height: 56,
                  width: 56,
                  mr: 2,
                }}
                src="/static/images/avatar/2.jpg"
              />
              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{
                  color: "#fff",
                  textWrap: "pretty",
                }}
              >
                Kaique Cairan Chaves Costa
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <MarkEmailUnreadIcon
                sx={{
                  color: "#fff",
                  mr: 1,
                }}
              />

              <Typography
                gutterBottom
                variant="subtitle1"
                sx={{
                  color: "#fff",
                  textWrap: "pretty",
                }}
              >
                kaiquebellmont@gmail.com
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
}
