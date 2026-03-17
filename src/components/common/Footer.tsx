import { Box, Typography, Grid, Link, Divider, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

const Footer = () => {
    return (
        <Box
            sx={{
                background: "#0a0a0a",
                color: "#fff",
                pt: 6,
                pb: 0,
                mt: "auto",
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, md: 5 } }}>
                <Grid container spacing={5}>

                    {/* ── Col 1: Brand ── */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>

                        {/* Logo */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2.5 }}>
                            <Box
                                sx={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 2,
                                    background: "#1e90ff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <DirectionsCarIcon sx={{ color: "#fff", fontSize: 22 }} />
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    fontSize: 17,
                                    letterSpacing: 1.2,
                                    color: "#fff",
                                    textTransform: "uppercase",
                                }}
                            >
                                Trios Car Rentals
                            </Typography>
                        </Box>

                        {/* Address */}
                        <Box sx={{ display: "flex", gap: 1.2, mb: 2 }}>
                            <LocationOnIcon sx={{ color: "#1e90ff", fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                            <Box>
                                <Typography sx={{ fontSize: 12, fontWeight: 600, color: "#aaa", mb: 0.3 }}>
                                    Corporate Address
                                </Typography>
                                <Typography sx={{ fontSize: 13, color: "#ccc", lineHeight: 1.7 }}>
                                    Plot no. 115, Chakripuram,<br />
                                    Kushaiguda, ECIL,<br />
                                    Hyderabad, India – 500062
                                </Typography>
                            </Box>
                        </Box>

                        {/* Phone */}
                        <Box sx={{ display: "flex", gap: 1.2, mb: 2.5 }}>
                            <PhoneIcon sx={{ color: "#1e90ff", fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                            <Box>
                                <Typography sx={{ fontSize: 12, fontWeight: 600, color: "#aaa", mb: 0.3 }}>
                                    Customer Service
                                </Typography>
                                <Typography sx={{ fontSize: 13, color: "#ccc" }}>
                                    +91 9392798251
                                </Typography>
                            </Box>
                        </Box>

                        {/* Description */}
                        <Typography sx={{ fontSize: 13, color: "#777", lineHeight: 1.8, mb: 3 }}>
                            Trios Car Rentals is a trusted vehicle rental platform providing self drive and driver rental services.
                        </Typography>

                        {/* Social icons */}
                        <Box sx={{ display: "flex", gap: 1 }}>
                            {[
                                { icon: <FacebookIcon sx={{ fontSize: 18 }} />, label: "Facebook" },
                                { icon: <InstagramIcon sx={{ fontSize: 18 }} />, label: "Instagram" },
                                { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, label: "LinkedIn" },
                                { icon: <XIcon sx={{ fontSize: 18 }} />, label: "X" },
                            ].map((s) => (
                                <IconButton
                                    key={s.label}
                                    aria-label={s.label}
                                    size="small"
                                    sx={{
                                        width: 34,
                                        height: 34,
                                        border: "1px solid #2a2a2a",
                                        borderRadius: 2,
                                        color: "#aaa",
                                        transition: "all 0.2s",
                                        "&:hover": {
                                            background: "#1e90ff",
                                            color: "#fff",
                                            border: "1px solid #1e90ff",
                                        },
                                    }}
                                >
                                    {s.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* ── Col 2: Quick Navigation ── */}
                    <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#fff",
                                mb: 2.5,
                                pb: 1.5,
                                borderBottom: "2px solid #1e90ff",
                                display: "inline-block",
                            }}
                        >
                            Quick Navigation
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                            {[
                                "Home",
                                "Vehicle Fleet",
                                "About Company",
                                "Contact",
                                "Partnership",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        fontSize: 14,
                                        color: "#aaa",
                                        transition: "all 0.2s",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        "&:hover": { color: "#1e90ff", paddingLeft: "6px" },
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: "50%",
                                            background: "#2a2a2a",
                                            flexShrink: 0,
                                            transition: "background 0.2s",
                                            ".MuiLink-root:hover &": { background: "#1e90ff" },
                                        }}
                                    />
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* ── Col 3: Legal ── */}
                    <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#fff",
                                mb: 2.5,
                                pb: 1.5,
                                borderBottom: "2px solid #1e90ff",
                                display: "inline-block",
                            }}
                        >
                            Legal Information
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                            {[
                                "Terms & Conditions",
                                "Refund Policy",
                                "Privacy Policy",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        fontSize: 14,
                                        color: "#aaa",
                                        transition: "all 0.2s",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        "&:hover": { color: "#1e90ff", paddingLeft: "6px" },
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: "50%",
                                            background: "#2a2a2a",
                                            flexShrink: 0,
                                        }}
                                    />
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* ── Col 4: Mobile App ── */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#fff",
                                mb: 2.5,
                                pb: 1.5,
                                borderBottom: "2px solid #1e90ff",
                                display: "inline-block",
                            }}
                        >
                            Mobile Application
                        </Typography>

                        {/* App Store */}
                        <Link href="#" underline="none">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    background: "#111",
                                    border: "1px solid #2a2a2a",
                                    borderRadius: 2,
                                    px: 2,
                                    py: 1.2,
                                    mb: 1.5,
                                    transition: "all 0.2s",
                                    "&:hover": { border: "1px solid #1e90ff", background: "#0d1b2a" },
                                }}
                            >
                                <AppleIcon sx={{ fontSize: 28, color: "#fff" }} />
                                <Box>
                                    <Typography sx={{ fontSize: 10, color: "#aaa", lineHeight: 1.2 }}>
                                        Available on the
                                    </Typography>
                                    <Typography sx={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                                        App Store
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>

                        {/* Google Play */}
                        <Link href="#" underline="none">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    background: "#111",
                                    border: "1px solid #2a2a2a",
                                    borderRadius: 2,
                                    px: 2,
                                    py: 1.2,
                                    transition: "all 0.2s",
                                    "&:hover": { border: "1px solid #1e90ff", background: "#0d1b2a" },
                                }}
                            >
                                <AndroidIcon sx={{ fontSize: 28, color: "#fff" }} />
                                <Box>
                                    <Typography sx={{ fontSize: 10, color: "#aaa", lineHeight: 1.2 }}>
                                        Available on
                                    </Typography>
                                    <Typography sx={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                                        Google Play
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Grid>

                </Grid>
            </Box>

            {/* Bottom bar */}
            <Divider sx={{ borderColor: "#1a1a1a", mt: 5 }} />
            <Box
                sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    px: { xs: 3, md: 5 },
                    py: 2.5,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Typography sx={{ fontSize: 13, color: "#555" }}>
                    © 2026 Trios Car Rentals. All rights reserved.
                </Typography>
                <Typography sx={{ fontSize: 13, color: "#555" }}>
                    Made with ❤️ in Hyderabad, India
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;