import { useState } from "react";
import {
    Container,
    Grid,
    TextField,
    Button,
    Typography,
    Card,
    CardContent
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/api";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {

            const res = await API.post("/auth/login", form);

            localStorage.setItem("token", res.data.token);

            navigate("/dashboard");

        } catch (err) {
            alert("Login failed");
        }

    };

    return (
        <Container maxWidth="sm">

            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "100vh" }}>

                <Grid size={12}>

                    <Card>

                        <CardContent>

                            <Typography variant="h4" align="center" mb={3}>
                                Login
                            </Typography>

                            <form onSubmit={handleSubmit}>

                                <TextField
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                />

                                <TextField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    Login
                                </Button>

                                <Typography mt={2} align="center">

                                    Don't have an account?

                                    <Link to="/signup"> Signup</Link>

                                </Typography>

                            </form>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

        </Container>
    );
}

export default Login;