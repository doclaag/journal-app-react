import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout';

export const RegisterPage = () => {
    return (
        <AuthLayout title="Crear Cuenta">
            <form>
                <Grid
                    container
                >
                    <Grid item xs={12} sx={{ mt: 1 }}>
                        <TextField
                            label="Nombre Completo"
                            type="text"
                            placeholder="Nombre Completo"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 1 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@correo.com"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 1 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="********"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} >
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Crear cuenta
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
};