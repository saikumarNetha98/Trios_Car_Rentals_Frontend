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

function Signup() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {

        e.preventDefault();

        try {

            await API.post("/auth/signup", form);

            alert("Signup successful");

            navigate("/login");

        } catch (err) {
            alert("Signup failed");
        }

    };

    return (
        <Container maxWidth="sm">

            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "100vh" }}>
                <Grid size={12}>

                    <Card>

                        <CardContent>

                            <Typography variant="h4" align="center" mb={3}>
                                Signup
                            </Typography>

                            <form onSubmit={handleSubmit}>

                                <TextField
                                    label="Name"
                                    name="name"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                />

                                <TextField
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                />

                                <TextField
                                    label="Phone"
                                    name="phone"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                />

                                <TextField
                                    label="Password"
                                    type="password"
                                    name="password"
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
                                    Signup
                                </Button>

                                <Typography mt={2} align="center">

                                    Already have an account?

                                    <Link to="/login"> Login</Link>

                                </Typography>

                            </form>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

        </Container>
    );
}

export default Signup;