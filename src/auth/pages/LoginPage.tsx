import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout';

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>
                <Grid
                    container
                >
                    <Grid item xs={12} sx={{ mt: 1 }}>
                        <TextField label="Correo" type="email" placeholder="correo@correo.com" fullWidth variant="outlined" />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 1 }}>
                        <TextField label="Contraseña" type="password" placeholder="********" fullWidth variant="outlined" />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
};