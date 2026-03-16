import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Dashboard = () => {
  const dashboardData = [
    {
      title: "Total Cars",
      value: 24,
      icon: <DirectionsCarIcon fontSize="large" />,
    },
    {
      title: "Total Bookings",
      value: 120,
      icon: <BookOnlineIcon fontSize="large" />,
    },
    {
      title: "Available Cars",
      value: 15,
      icon: <EventAvailableIcon fontSize="large" />,
    },
    {
      title: "Revenue",
      value: "₹85,000",
      icon: <AttachMoneyIcon fontSize="large" />,
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>

      <Typography variant="h4" mb={4}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {dashboardData.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>

              <CardContent>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      {item.title}
                    </Typography>

                    <Typography variant="h5">
                      {item.value}
                    </Typography>
                  </Box>

                  {item.icon}
                </Box>

              </CardContent>

            </Card>

          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default Dashboard;