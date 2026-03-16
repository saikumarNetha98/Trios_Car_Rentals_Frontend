import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Trios Car Rentals
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/cars">
          Cars
        </Button>

        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;