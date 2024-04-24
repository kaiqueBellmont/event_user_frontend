import * as React from "react";
import { styled } from "@mui/material/styles";

import PersonIcon from "@mui/icons-material/Person";
import SpeedDial, { SpeedDialProps } from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreateUserModal from "../modals/createUser";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export default function CustomSpeedDial() {
  const actions = [
    { icon: <CloseIcon />, name: "Fechar", actionFunc: () => setOpen(false) },
    {
      icon: <PersonIcon />,
      name: "Usuario",
      actionFunc: () => setCreateUserModalOpen(true),
    },
    { icon: <CalendarMonthIcon />, name: "Evento" },
    { icon: <BarChartIcon />, name: "Relatório" },
  ];

  const [direction, setDirection] =
    React.useState<SpeedDialProps["direction"]>("left");
  const [createUserModalOpen, setCreateUserModalOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpenCloseChange = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <StyledSpeedDial
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onOpen={() => setOpen(true)}
      sx={{
        position: "fixed",
        mb: 5,
        mr: 5,
      }}
      open={open}
      ariaLabel="SpeedDial playground example"
      hidden={false}
      icon={<SpeedDialIcon />}
      direction={direction}
    >
      {actions.map((action) => (
        <SpeedDialAction
          sx={{ color: "white", backgroundColor: "#071330" }}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.actionFunc}
        />
      ))}
      <CreateUserModal
        createUserModalOpen={createUserModalOpen}
        setCreateUserModalOpen={setCreateUserModalOpen}
      />
    </StyledSpeedDial>
  );
}
