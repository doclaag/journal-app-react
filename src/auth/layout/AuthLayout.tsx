import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

interface AuthLayoutProps {
    children: ReactNode;
    title?: string;
}

export const AuthLayout = ({ children, title = '' }: AuthLayoutProps) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
        >
            <Grid
                item
                xs={12}
                sm={8}
                md={6}
                lg={4}
                sx={{
                    width: { md: 450 },
                    backgroundColor: "background.paper",
                    borderRadius: 2,
                    padding: 3,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ mb: 2, textAlign: 'center' }}
                >
                    {title}
                </Typography>
                {children}
            </Grid>
        </Grid>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
};