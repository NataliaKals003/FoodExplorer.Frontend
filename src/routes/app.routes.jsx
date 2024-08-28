import { Routes, Route } from 'react-router-dom';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { ManageDish } from '../pages/ManageDish';
import { appRoutes } from './routes';

export function AppRoutes() {
    return (
        <Routes>
            <Route path={appRoutes.home} element={<Home />} />
            <Route path={appRoutes.details} element={<Details />} />
            <Route path={appRoutes.createDish} element={<ManageDish />} />
            <Route path={appRoutes.manageDish} element={<ManageDish />} />
        </Routes>
    );
}
