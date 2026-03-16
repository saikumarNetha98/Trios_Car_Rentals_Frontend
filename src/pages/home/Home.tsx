import Navbar from "../../components/common/Navbar";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cars from "../cars/Cars.tsx";

function Home() {

  const navigate = useNavigate();

  return (
    <Box>

      {/* <Navbar /> */}

      {/* HERO SECTION */}

      <Box
        sx={{
          minHeight: "80vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Container>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ maxWidth: 600 }}
          >
            Find Your Perfect Ride — Anytime, Anywhere
          </Typography>

          <Typography mt={2} sx={{ maxWidth: 500 }}>
            Self drive or with driver. Affordable rentals and instant booking.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            onClick={() => navigate("/cars")}
          >
            Explore Cars
          </Button>

        </Container>
      </Box>


      {/* FEATURED CARS */}

      <Container sx={{ mt: 8 }}>

        <Typography variant="h4" fontWeight="bold" mb={4}>
          Featured Cars
        </Typography>

        <Cars />

      </Container>


      {/* HOW IT WORKS */}

      <Box sx={{ mt: 8, background: "#f5f5f5", py: 8 }}>

        <Container>

          <Typography variant="h4" textAlign="center" mb={6}>
            How It Works
          </Typography>

          <Grid container spacing={4}>

            <Grid size={{ xs: 12, md: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    1. Create Account
                  </Typography>
                  <Typography>
                    Sign up and start booking cars instantly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    2. Choose City
                  </Typography>
                  <Typography>
                    Select your preferred pickup location.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    3. Select Car
                  </Typography>
                  <Typography>
                    Browse our wide range of vehicles.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    4. Pay & Ride
                  </Typography>
                  <Typography>
                    Pay 60% advance and start your trip.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* WHY CHOOSE US */}

      <Container sx={{ mt: 8, mb: 8 }}>

        <Typography variant="h4" textAlign="center" mb={6}>
          Why Choose Trios Car Rentals
        </Typography>

        <Grid container spacing={4}>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6">
              Wide Range of Cars
            </Typography>
            <Typography>
              Economy, SUV, luxury and traveler vehicles available.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6">
              Affordable Prices
            </Typography>
            <Typography>
              Best rental prices with transparent billing.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6">
              Trusted Platform
            </Typography>
            <Typography>
              Verified owners and secure payments.
            </Typography>
          </Grid>

        </Grid>

      </Container>

    </Box>
  );
}

export default Home;