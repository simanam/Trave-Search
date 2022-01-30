import * as React from "react";
import { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";

import Tooltip from "@mui/material/Tooltip";

import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";

import navbarList from "../../data/navBarList";

import Home from "../../Pages/home";

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
  (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export default function SideNavbar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const refFocus = useRef();

  function toogleOpen() {
    setOpen(!open);
  }

  function toogleOpenSearch() {
    setOpen(false);
    setTimeout(() => {
      refFocus.current.focus();
    }, 500);
  }

  const drawerContent = (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "42px",
          width: "auto",
          backgroundColor: "transparent",
          margin: "14px 14px",
          padding: "12px 0px",
          borderBottom: "1px solid lightgray",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: open ? "none" : { xs: "none", sm: "initial" },
            marginBottom: "9px",
          }}
        ></Box>
        <Typography
          variant="h1"
          noWrap={true}
          gutterBottom
          sx={{
            display: { xs: "none", sm: "initial" },
            fontSize: "18px",
            fontWeight: 600,
            color: "#1a2b41",
            width: "154px",
            marginLeft: open ? "0px" : "8px",
            paddingBottom: "3px",
          }}
        >
          Travel Search
        </Typography>

        <Button
          onClick={toogleOpen}
          sx={{
            minWidth: "initial",
            padding: "10px",
            color: "gray",
            borderRadius: "8px",
            backgroundColor: open ? "transparent" : "transparent",
            "&:hover": {
              backgroundColor: "#46b6ff",
            },
          }}
        >
          <MenuIcon
            sx={{ fontSize: "20px", color: open ? "#1252ae" : "#1252ae" }}
          ></MenuIcon>
        </Button>
      </Box>

      <List dense={true}>
        {navbarList.map((key, index) => (
          <Tooltip
            key={index}
            title={open ? key.desc : ""}
            placement={"right"}
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "gray",
                  color: "white",
                  marginLeft: "22px !important",
                  boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
                },
              },
            }}
          >
            <ListItemButton
              sx={{
                margin: "6px 14px",
                padding: "10px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#46b6ff",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "46px" }}>
                <key.icon sx={{ fontSize: "20px", color: "#1252ae" }} />
              </ListItemIcon>

              <ListItemText
                primary={key.desc}
                primaryTypographyProps={{
                  variant: "body2",
                }}
                sx={{
                  display: "inline",
                  margin: "0px",
                  overflowX: "hidden",
                  color: "#1252ae",
                  whiteSpace: "nowrap",
                  minWidth: "126px",
                }}
              />
            </ListItemButton>
          </Tooltip>
        ))}
        <Divider variant="middle" light={true} />
      </List>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open
            ? { xs: drawerWidthClose, sm: drawerWidthClose }
            : { xs: drawerWidthClose, sm: drawerWidthOpen },
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
          "& .MuiDrawer-paper": {
            // justifyContent: "space-between",
            overflowX: "hidden",
            width: open
              ? { xs: drawerWidthClose, sm: drawerWidthClose }
              : { xs: drawerWidthClose, sm: drawerWidthOpen },
            borderRight: "0px",
            borderRadius: "0px",
            boxShadow: theme.shadows[1],
            backgroundColor: open ? "#fafafa" : "#fafafa",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Grid container style={{ width: "100%" }}>
        <Home />
      </Grid>
    </Box>
  );
}
