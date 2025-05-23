import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Openings", path: "/openings" },
];

export default function NavBar(props) {
  const theme = useTheme(); // Access the theme
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color="secondary" variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.main}`,
                "&:hover": {
                  backgroundColor: "#333333", // custom hover color
                  color: "#ffffff", // optional: brighten text on hover
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(38, 38, 38, 0.7)", // dark grey with transparency
          backdropFilter: "blur(12px)", // blur strength
          WebkitBackdropFilter: "blur(12px)", // for Safari support
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: `${theme.palette.primary.main}` }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="secondary"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Xandi's Games
          </Typography>
          <Button color="primary" component={Link} to="/home">
            Home
          </Button>
          <Button color="primary" component={Link} to="/about">
            About
          </Button>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1a1a1a",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* Spacer to prevent content from being hidden under fixed AppBar */}
      <Toolbar />
    </Box>
  );
}
