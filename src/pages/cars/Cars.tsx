import { Grid, Card, CardContent, Typography, CardMedia, Button, Box } from "@mui/material";

const cars = [
  {
    id: 1,
    name: "Mahindra Thar",
    price: 4500,
    fuel: "Diesel",
    seats: 5,
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753"
  },
  {
    id: 2,
    name: "Hyundai Creta",
    price: 3500,
    fuel: "Petrol",
    seats: 5,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  },
  {
    id: 3,
    name: "Toyota Fortuner",
    price: 6000,
    fuel: "Diesel",
    seats: 7,
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d"
  },
];

const Cars = () => {

  return (
    <Box p={4}>

      <Typography variant="h4" mb={4}>
        Available Cars
      </Typography>

      <Grid container spacing={3}>

        {cars.map((car) => (

          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={car.id}>

            <Card sx={{ borderRadius: 3 }}>

              <CardMedia
                component="img"
                height="200"
                image={car.image}
                alt={car.name}
              />

              <CardContent>

                <Typography variant="h6">
                  {car.name}
                </Typography>

                <Typography color="textSecondary">
                  Fuel: {car.fuel}
                </Typography>

                <Typography color="textSecondary">
                  Seats: {car.seats}
                </Typography>

                <Typography variant="h6" mt={1}>
                  ₹{car.price} / day
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Book Now
                </Button>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Box>
  );
};

export default Cars;