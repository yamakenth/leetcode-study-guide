import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <header>
      <AppBar position="sticky" sx={{ bgcolor: "#fff" }}>
        <Toolbar>
          <div style={{ padding: "12px 0" }}>
            <Typography
              variant="h5"
              component="h1"
              sx={{ color: "text.primary" }}
            >
              LeetCode Study Guide
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
              List created from NeetCode 150 and Grind 75
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
