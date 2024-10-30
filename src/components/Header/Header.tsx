import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Memposit
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/candidates">
            Candidates
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
