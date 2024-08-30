import { Routes, Route } from 'react-router-dom';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { ManageDish } from '../pages/ManageDish';
import { adminRoutes } from './routes';

export function AdminRoutes() {
    return (
        <Routes>
            <Route path={adminRoutes.home} element={<Home />} />
            <Route path={adminRoutes.details} element={<Details />} />
            <Route path={adminRoutes.createDish} element={<ManageDish />} />
            <Route path={adminRoutes.manageDish} element={<ManageDish />} />

            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    );
}
