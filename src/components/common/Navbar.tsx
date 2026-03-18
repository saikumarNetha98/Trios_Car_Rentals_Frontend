import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from "@mui/material";
import logo from "../../assets/images/Trios_Logo.png";
import { Link, useNavigate } from "react-router-dom";


type NavbarProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isLoggedIn, setIsLoggedIn }: NavbarProps) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false); // 🔥 triggers re-render
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#fff",
        color: "#000",
        borderBottom: "1px solid #eee"
      }}
    >
      <Container maxWidth="lg">

        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* LOGO */}

          {/* <Typography
            variant="h6"
            fontWeight="bold"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#1976d2"
            }}
          >
            Trios Car Rentals
          </Typography> */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none"
            }}
          >

            <Box
              component="img"
              src={logo}
              alt="Trios Logo"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: "#1976d2"
              }}
            >
              Trios Car Rentals
            </Typography>

          </Box>

          {/* MENU */}

          <Box sx={{ display: "flex", gap: 3 }}>

            <Button component={Link} to="/" sx={{ color: "#333" }}>
              Home
            </Button>

            <Button component={Link} to="/cars" sx={{ color: "#333" }}>
              Vehicles
            </Button>

            <Button component={Link} to="/about" sx={{ color: "#333" }}>
              About Us
            </Button>

            <Button component={Link} to="/contact" sx={{ color: "#333" }}>
              Contact
            </Button>

          </Box>


          {/* LOGIN SIGNUP */}

          <Box sx={{ display: "flex", gap: 2 }}>
            {isLoggedIn ? (
              <Button variant="outlined" color="error" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button variant="outlined" component={Link} to="/login">
                  Login
                </Button>

                <Button variant="contained" component={Link} to="/signup">
                  Signup
                </Button>
              </>
            )}
          </Box>

        </Toolbar>

      </Container>
    </AppBar>
  );
}

export default Navbar;