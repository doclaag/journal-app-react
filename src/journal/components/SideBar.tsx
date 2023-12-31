import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label='mailbox folders'
        >
            <Drawer
                variant='permanent'
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
                open
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>Luis Alonzo</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Nisi aliqua do consequat duis aliquip duis.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    );
};

SideBar.propTypes = {
    drawerWidth: PropTypes.number,
};
