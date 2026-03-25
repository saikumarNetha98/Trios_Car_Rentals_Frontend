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
import { useEffect, useState } from "react";
function Home() {

  const navigate = useNavigate();
  const images = [
    "../../assets/images/car1.jpeg",
    "../../assets/images/car2.jpg",
    "../../assets/images/car3.jpg",
    "../../assets/images/car4.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>

      
      <Box
        sx={{
          position: "relative",
          height: "85vh",
          overflow: "hidden",
        }}
      >
        {/* Background Slides */}
        {images.map((img, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 1s ease-in-out",
              opacity: i === index ? 1 : 0,
            }}
          />
        ))}

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h3" fontWeight="bold" sx={{ maxWidth: 600 }}>
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
          </Box>
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