import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import { JournalRoutes } from '../journal/routes';

export const AppRouter = () => {
    return (
        <Routes>

            {/* Login and registration */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* JournalApp */}
            <Route path="/*" element={<JournalRoutes />} />

        </Routes>
    );
};
