import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box, Card, CardContent, Typography, TextField,
  Button, InputAdornment, IconButton, Divider,
  Alert, CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, DirectionsCar } from "@mui/icons-material";
import API from "../../services/api.ts";

type LoginProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login({ setIsLoggedIn }: LoginProps) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await API.post("/auth/login", {
        identifier: form.identifier,
        password: form.password,
      });
      console.log("response: ", response?.data?.token)
      // const data = aait response
      if (!response.status) throw new Error(response?.data.message || "Invalid credentials");
      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      color: "#fff",
      background: "rgba(255,255,255,0.05)",
      "& fieldset": { borderColor: "rgba(255,255,255,0.12)" },
      "&:hover fieldset": { borderColor: "rgba(255,255,255,0.3)" },
      "&.Mui-focused fieldset": { borderColor: "#ff7e5f" },
    },
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.45)" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#ff7e5f" },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
        }}
      />

      {/* Card */}
      <Card
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 450,
          mx: 2,
          borderRadius: 4,
          background: "rgba(10,10,10,0.78)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 5 } }}>

          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, mb: 0.5 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DirectionsCar sx={{ color: "#000", fontSize: 24 }} />
            </Box>
            <Typography sx={{ fontWeight: 800, fontSize: 24, letterSpacing: 3, color: "#fff", textTransform: "uppercase" }}>
              Trios
            </Typography>
          </Box>

          <Typography sx={{ textAlign: "center", color: "rgba(255,255,255,0.38)", fontSize: 13, mb: 4, letterSpacing: 0.8 }}>
            Car Rentals — Drive Your Dream
          </Typography>

          {/* Error Alert */}
          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
                background: "rgba(255,80,80,0.1)",
                color: "#ff7070",
                border: "1px solid rgba(255,80,80,0.2)",
                borderRadius: 2,
                "& .MuiAlert-icon": { color: "#ff7070" },
              }}
            >
              {error}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>

            <TextField
              label="Email or Mobile Number"
              name="identifier"
              type="text" // important (not email)
              fullWidth
              required
              autoComplete="username"
              value={form.identifier}
              onChange={handleChange}
              // error={!!errors.identifier}
              // helperText={errors.identifier || "Enter email or 10-digit mobile number"}
              sx={{ ...inputSx, mb: 2.5 }}
            />

            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              required
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: "rgba(255,255,255,0.3)" }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ ...inputSx, mb: 1 }}
            />

            {/* Forgot password */}
            <Box sx={{ textAlign: "right", mb: 3 }}>
              <Typography
                component="a"
                href="#"
                sx={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", "&:hover": { color: "#ff7e5f" }, transition: "color 0.2s" }}
              >
                Forgot password?
              </Typography>
            </Box>

            {/* Login Button */}
            <Button
              type="submit"
              fullWidth
              disabled={loading}
              sx={{
                py: 1.6,
                borderRadius: 2,
                background: "linear-gradient(45deg, #ff7e5f, #feb47b)",
                color: "#000",
                fontWeight: 700,
                fontSize: 15,
                textTransform: "none",
                letterSpacing: 0.5,
                boxShadow: "0 8px 24px rgba(255,126,95,0.3)",
                "&:hover": {
                  background: "linear-gradient(45deg, #e86d50, #e8a06a)",
                  boxShadow: "0 12px 32px rgba(255,126,95,0.4)",
                },
                "&.Mui-disabled": { opacity: 0.55 },
              }}
            >
              {loading && <CircularProgress size={18} sx={{ color: "#000", mr: 1 }} />}
              {loading ? "Signing in…" : "Login"}
            </Button>

          </Box>

          <Divider sx={{ my: 3, "&::before, &::after": { borderColor: "rgba(255,255,255,0.08)" } }}>
            <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: 1, px: 1 }}>
              OR
            </Typography>
          </Divider>

          {/* Signup Link */}
          <Typography sx={{ textAlign: "center", fontSize: 14, color: "rgba(255,255,255,0.35)" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#ff7e5f", fontWeight: 700, textDecoration: "none" }}>
              Sign up
            </Link>
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}