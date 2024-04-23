import { Box, styled } from "@mui/material";

export const CustomToaster = styled(Box)(({ theme }) => {
  return {
    "& > div": {
      left: `${theme.spacing(6)} !important`,
      right: `${theme.spacing(6)} !important`,
      bottom: `${theme.spacing(6)} !important`,
      zIndex: `2000 !important`,
      top: "75px !important",
    },
    "& .react-hot-toast": {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 400,
      fontSize: "1rem",
      letterSpacing: "0.14px",
      boxShadow: theme.shadows[4],
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.background.paper,
      "&>:first-of-type:not([role])>:first-of-type": {
        width: 14,
        height: 14,
      },
    },
  };
});
