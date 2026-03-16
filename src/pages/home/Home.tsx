import Navbar from "../../components/common/Navbar";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cars from "../cars/Cars.tsx";

function Home() {


  const navigate = useNavigate();

  return (
    <Box>
      <Navbar />


      {/* HERO SECTION */}

      <Box
        sx={{
          height: "70vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>

          <Typography variant="h3" color="white" fontWeight="bold">
            Rent Your Perfect Car
          </Typography>

          <Typography color="white" mt={2}>
            Self drive or with driver — easy booking
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={() => navigate("/cars")}
          >
            Explore Cars
          </Button>

        </Container>
      </Box>

      {/* FEATURED CARS */}

      <Container sx={{ mt: 6 }}>

        <Typography variant="h4" mb={4}>
          Featured Cars
        </Typography>

        <Cars />

      </Container>

      {/* WHY CHOOSE US */}

      <Box sx={{ background: "#f5f5f5", mt: 6, py: 6 }}>

        <Container>

          <Typography variant="h4" mb={4} textAlign="center">
            Why Choose Us
          </Typography>

          <Grid container spacing={3}>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6">
                Wide Range of Cars
              </Typography>
              <Typography>
                Choose from economy to luxury vehicles.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6">
                Affordable Prices
              </Typography>
              <Typography>
                Competitive daily rental pricing.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6">
                Easy Booking
              </Typography>
              <Typography>
                Book cars instantly in a few clicks.
              </Typography>
            </Grid>

          </Grid>

        </Container>

      </Box>

    </Box>
  );
};

export default Home;