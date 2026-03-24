import { useState } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";

type UserAvatarMenuProps = {
  userName: string;
  userEmail?: string;
  avatarUrl?: string;
  onEditProfile: () => void;
  onLogout: () => void;
};

function UserAvatarMenu({
  userName,
  userEmail,
  avatarUrl,
  onEditProfile,
  onLogout,
}: UserAvatarMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleCloseMenu();
    onEditProfile();
  };

  const handleExit = () => {
    handleCloseMenu();
    onLogout();
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu} size="small">
        <Avatar
          src={avatarUrl}
          alt={userName}
          sx={{
            width: 34,
            height: 34,
            bgcolor: "#f2f2f2",
            color: "#200F3B",
            fontWeight: 600,
          }}
        >
          {!avatarUrl && userName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 220,
              borderRadius: 2,
              boxShadow: 3,
            },
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" fontWeight={700}>
            {userName}
          </Typography>

          {userEmail && (
            <Typography variant="body2" color="text.secondary">
              {userEmail}
            </Typography>
          )}
        </Box>

        <Divider />

        <MenuItem onClick={handleEdit}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit profile
        </MenuItem>

        <MenuItem onClick={handleExit}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserAvatarMenu;
