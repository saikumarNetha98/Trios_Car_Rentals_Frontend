import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box, Card, CardContent, Typography, TextField,
  Button, InputAdornment, IconButton, Alert, CircularProgress, Grid,
} from "@mui/material";
import { Visibility, VisibilityOff, DirectionsCar } from "@mui/icons-material";
import API from "../../services/api.ts";

interface FormState {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(form.password)) {
      newErrors.password = "Must include uppercase, lowercase and a number";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setApiError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setApiError("");
    try {
      await API.post("/auth/signup", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });
      navigate("/login");
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })
        ?.response?.data?.message;
      setApiError(msg || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputSx = (field: keyof Errors) => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      color: "#fff",
      background: "rgba(255,255,255,0.05)",
      "& fieldset": {
        borderColor: errors[field] ? "#ff6b6b" : "rgba(255,255,255,0.12)",
      },
      "&:hover fieldset": {
        borderColor: errors[field] ? "#ff6b6b" : "rgba(255,255,255,0.3)",
      },
      "&.Mui-focused fieldset": {
        borderColor: errors[field] ? "#ff6b6b" : "#ff7e5f",
      },
    },
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.45)" },
    "& .MuiInputLabel-root.Mui-focused": {
      color: errors[field] ? "#ff6b6b" : "#ff7e5f",
    },
    "& .MuiFormHelperText-root": { color: "#ff6b6b", mx: 0 },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />

      {/* Card */}
      <Card
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 500,
          mx: 2,
          my: 4,
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
                width: 44, height: 44, borderRadius: 2,
                background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <DirectionsCar sx={{ color: "#000", fontSize: 24 }} />
            </Box>
            <Typography sx={{ fontWeight: 800, fontSize: 24, letterSpacing: 3, color: "#fff", textTransform: "uppercase" }}>
              Trios
            </Typography>
          </Box>

          <Typography sx={{ textAlign: "center", color: "rgba(255,255,255,0.38)", fontSize: 13, mb: 4, letterSpacing: 0.8 }}>
            Create your account — It's free
          </Typography>

          {/* API Error */}
          {apiError && (
            <Alert
              severity="error"
              sx={{
                mb: 3, background: "rgba(255,80,80,0.1)", color: "#ff7070",
                border: "1px solid rgba(255,80,80,0.2)", borderRadius: 2,
                "& .MuiAlert-icon": { color: "#ff7070" },
              }}
            >
              {apiError}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>

              {/* Full Name */}
              <Grid size={12}>
                <TextField
                  label="Full Name"
                  name="name"
                  fullWidth
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  sx={inputSx("name")}
                />
              </Grid>

              {/* Email */}
              <Grid size={12}>
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={inputSx("email")}
                />
              </Grid>

              {/* Phone */}
              <Grid size={12}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  fullWidth
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone || "10-digit Indian mobile number"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>+91</Typography>
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx("phone")}
                />
              </Grid>

              {/* Password */}
              <Grid size={12}>
                <TextField
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  required
                  autoComplete="new-password"
                  value={form.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password || "Min 8 chars, uppercase, lowercase & number"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: "rgba(255,255,255,0.3)" }}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx("password")}
                />
              </Grid>

              {/* Confirm Password */}
              <Grid size={12}>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  fullWidth
                  required
                  autoComplete="new-password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowConfirm(!showConfirm)} edge="end" sx={{ color: "rgba(255,255,255,0.3)" }}>
                          {showConfirm ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx("confirmPassword")}
                />
              </Grid>

            </Grid>

            {/* Submit */}
            <Button
              type="submit"
              fullWidth
              disabled={loading}
              sx={{
                mt: 3, py: 1.6, borderRadius: 2,
                background: "linear-gradient(45deg, #ff7e5f, #feb47b)",
                color: "#000", fontWeight: 700, fontSize: 15,
                textTransform: "none", letterSpacing: 0.5,
                boxShadow: "0 8px 24px rgba(255,126,95,0.3)",
                "&:hover": {
                  background: "linear-gradient(45deg, #e86d50, #e8a06a)",
                  boxShadow: "0 12px 32px rgba(255,126,95,0.4)",
                },
                "&.Mui-disabled": { opacity: 0.55 },
              }}
            >
              {loading && <CircularProgress size={18} sx={{ color: "#000", mr: 1 }} />}
              {loading ? "Creating account…" : "Create Account"}
            </Button>

          </Box>

          {/* Login link */}
          <Typography sx={{ textAlign: "center", mt: 3, fontSize: 14, color: "rgba(255,255,255,0.35)" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#ff7e5f", fontWeight: 700, textDecoration: "none" }}>
              Login
            </Link>
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}