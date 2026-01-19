import React, { useMemo, useState } from "react";
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CssBaseline,
  Switch,
  Fade,
} from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyIcon from "@mui/icons-material/Key";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 16,
              },
            },
          },
        },
      }),
    [darkMode]
  );

  const hoverItem = {
    borderRadius: 2,
    transition: "all 0.25s ease",
    "&:hover": {
      transform: "translateX(4px)",
      backgroundColor: "action.hover",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Fade in timeout={500}>
        <Box sx={{ minHeight: "100vh", p: 3, bgcolor: "background.default" }}>

          {/* Search Bar */}
          <Paper
            elevation={2}
            sx={{
              p: 1.5,
              mb: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon sx={{ mr: 1 }} />
            <TextField
              fullWidth
              placeholder="Search"
              variant="standard"
              InputProps={{ disableUnderline: true }}
            />
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Paper>

          {/* Main Content */}
          <Box sx={{ display: "flex", gap: 3 }}>

            {/* Profile Settings */}
            <Paper sx={{ flex: 1, p: 3 }}>
              <Typography variant="h6" fontWeight={600}>
                Profile Settings
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Avatar
                  src="https://i.pravatar.cc/150"
                  sx={{ width: 72, height: 72, mr: 2 }}
                />
                <Box>
                  <Typography fontWeight={600}>
                    A B M Shawon Islam
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stay home stay safe
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <ListItem button sx={hoverItem}>
                  <ListItemIcon><EditIcon /></ListItemIcon>
                  <ListItemText primary="Edit Profile Name." />
                </ListItem>

                <ListItem button sx={hoverItem}>
                  <ListItemIcon><ChatBubbleOutlineIcon /></ListItemIcon>
                  <ListItemText primary="Edit Profile Status Info." />
                </ListItem>

                <ListItem button sx={hoverItem}>
                  <ListItemIcon><AddPhotoAlternateIcon /></ListItemIcon>
                  <ListItemText primary="Edit Profile Photo." />
                </ListItem>

                <ListItem button sx={hoverItem}>
                  <ListItemIcon><HelpOutlineIcon /></ListItemIcon>
                  <ListItemText primary="Help." />
                </ListItem>
              </List>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textAlign: "center", mt: 5 }}
              >
                Chat App
              </Typography>
            </Paper>

            {/* Account Settings */}
            <Paper sx={{ flex: 1, p: 3 }}>
              <Typography variant="h6" fontWeight={600}>
                Account Settings
              </Typography>

              <List sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 1 }}>
                <ListItem button sx={hoverItem}>
                  <ListItemIcon><KeyIcon /></ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItem>

                {/* Theme Toggle */}
                <ListItem sx={{ ...hoverItem, cursor: "default" }}>
                  <ListItemIcon><DarkModeIcon /></ListItemIcon>
                  <ListItemText primary="Dark Mode" />
                  <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                </ListItem>

                <ListItem
                  button
                  sx={{
                    ...hoverItem,
                    "&:hover": {
                      backgroundColor: "error.light",
                    },
                  }}
                >
                  <ListItemIcon>
                    <DeleteIcon color="error" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Delete Account."
                    primaryTypographyProps={{ color: "error.main" }}
                  />
                </ListItem>
              </List>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textAlign: "center", mt: 5 }}
              >
                Chat App
              </Typography>
            </Paper>

          </Box>
        </Box>
      </Fade>
    </ThemeProvider>
  );
}
