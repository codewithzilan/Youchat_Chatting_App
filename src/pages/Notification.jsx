import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  Button,
  Fade,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const initialNotifications = [
  { id: 1, text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.", unread: true },
  { id: 2, text: "Alcohol (ethanol) in hand sanitizers can be absorbed through the skin.", unread: true },
  { id: 3, text: "How a visual artist redefines success in graphic design", unread: false },
  { id: 4, text: "High altitude produces contradictory effects on performance.", unread: false },
];

export default function PremiumNotifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, unread: false }))
    );
  };

  return (
    <Fade in timeout={600}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 3, position: "relative" }}>

        {/* Header */}
        <Paper
          elevation={0}
          sx={{
            mb: 3,
            p: 2,
            display: "flex",
            alignItems: "center",
            borderRadius: 3,
            backdropFilter: "blur(12px)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75))",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <SearchIcon sx={{ mr: 1 }} />
          <TextField
            fullWidth
            placeholder="Search notifications"
            variant="standard"
            InputProps={{ disableUnderline: true }}
          />

          <Badge badgeContent={unreadCount} color="primary" sx={{ mx: 2 }}>
            <NotificationsIcon />
          </Badge>

          <IconButton>
            <MoreVertIcon backgroundColor="#5F35F5" />
          </IconButton>
        </Paper>

        {/* Content */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          }}
        >
          <Typography sx={{ px: 3, py: 2, fontWeight: 600 }}>
            Notifications
          </Typography>

          <Divider />

          <List disablePadding>
            {notifications.map((item, index) => (
              <React.Fragment key={item.id}>
                <ListItem
                  onClick={() => markAsRead(item.id)}
                  sx={{
                    px: 3,
                    py: 2,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    bgcolor: item.unread ? "rgba(25,118,210,0.08)" : "transparent",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                      bgcolor: item.unread
                        ? "rgba(25,118,210,0.12)"
                        : "action.hover",
                    },
                  }}
                >
                  <ListItemIcon>
                    {item.unread ? (
                      <Badge
                        badgeContent={unreadCount}
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        sx={{
                          "& .MuiBadge-badge": {
                            backgroundColor: "#5F35F5",
                            color: "#fff",
                            minWidth: 20,
                            height: 20,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                          },
                        }}
                      >
                        <NotificationsIcon />
                      </Badge>

                    ) : (
                      <NotificationsIcon color="action" />
                    )}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: item.unread ? 600 : 400,
                      lineHeight: 1.6,
                    }}
                    secondary={item.unread ? "New" : "Read"}
                    secondaryTypographyProps={{
                      color: item.unread ? "primary.main" : "text.secondary",
                    }}
                  />
                </ListItem>

                {index !== notifications.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>

        {/* Action Button */}
        <Button
          variant="contained"
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
          sx={{
            position: "fixed",
            background: "#5F35F5",
            bottom: 24,
            right: 24,
            borderRadius: 999,
            px: 3,
            py: 1.2,
            boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
            textTransform: "none",
          }}>
            
          Mark all as read
        </Button>
      </Box>
    </Fade>
  );
}
