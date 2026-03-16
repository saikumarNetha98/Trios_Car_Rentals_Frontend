import { Box, Container, Grid, Typography, Link } from "@mui/material";

function Footer() {
    return (
        <Box sx={{ background: "#111", color: "#fff", mt: 8, pt: 6, pb: 3 }}>

            <Container>

                <Grid container spacing={4}>

                    {/* COMPANY INFO */}

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" mb={2}>
                            TRIOS CAR RENTALS
                        </Typography>

                        <Typography variant="body2" mb={2}>
                            Corporate Address
                        </Typography>

                        <Typography variant="body2">
                            Plot no. 115, Chakripuram,
                            Kushaiguda,
                            ECIL,
                            Hyderabad, India - 500062
                        </Typography>

                        <Typography mt={2}>
                            Customer Service
                        </Typography>

                        <Typography>
                            +91 9392798251
                        </Typography>

                        <Typography mt={2} variant="body2">
                            Trios Car Rentals is a trusted vehicle rental platform
                            providing self drive and driver rental services.
                        </Typography>
                    </Grid>

                    {/* QUICK NAVIGATION */}

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" mb={2}>
                            Quick Navigation
                        </Typography>

                        <Typography><Link href="/" color="inherit" underline="hover">Home</Link></Typography>
                        <Typography><Link href="/cars" color="inherit" underline="hover">Vehicle Fleet</Link></Typography>
                        <Typography><Link href="/about" color="inherit" underline="hover">About Company</Link></Typography>
                        <Typography><Link href="/contact" color="inherit" underline="hover">Contact</Link></Typography>
                        <Typography><Link href="/partners" color="inherit" underline="hover">Partnership</Link></Typography>
                    </Grid>

                    {/* LEGAL */}

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" mb={2}>
                            Legal Information
                        </Typography>

                        <Typography><Link href="/terms" color="inherit">Terms & Conditions</Link></Typography>
                        <Typography><Link href="/refund" color="inherit">Refund Policy</Link></Typography>
                        <Typography><Link href="/privacy" color="inherit">Privacy Policy</Link></Typography>
                    </Grid>

                    {/* MOBILE APP */}

                    <Grid size={{ xs: 12, md: 2 }}>
                        <Typography variant="h6" mb={2}>
                            Mobile App
                        </Typography>

                        <Typography variant="body2">
                            Available on
                        </Typography>

                        <Typography>
                            App Store
                        </Typography>

                        <Typography mt={1} variant="body2">
                            Available on
                        </Typography>

                        <Typography>
                            Google Play
                        </Typography>
                    </Grid>

                </Grid>

                {/* COPYRIGHT */}

                <Box mt={5} textAlign="center">

                    <Typography variant="body2">
                        © 2026 Trios Car Rentals. All rights reserved.
                    </Typography>

                </Box>

            </Container>

        </Box>
    );
};

export default Footer;