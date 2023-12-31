import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>
                Adipisicing magna voluptate ullamco voluptate veniam voluptate cupidatat ut id culpa elit. Sit et ut aute labore fugiat velit tempor nulla dolor velit. Culpa duis excepteur nulla exercitation et. Irure duis cupidatat esse enim id ea enim sit magna dolor incididunt ex deserunt.
            </Typography> */}

            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': {
                        backgroundColor: 'error.main',
                        opacity: 0.9
                    },
                    position: 'fixed',
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined
                    sx={{
                        fontSize: 30,
                    }}
                />
            </IconButton>
        </JournalLayout>
    );
};
