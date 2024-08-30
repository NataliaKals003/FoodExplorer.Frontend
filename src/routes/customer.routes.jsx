import { Routes, Route } from 'react-router-dom';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { ManageDish } from '../pages/ManageDish';
import { customerRoutes } from './routes';

export function CustomerRoutes() {
    return (
        <Routes>
            <Route path={customerRoutes.home} element={<Home />} />
            <Route path={customerRoutes.details} element={<Details />} />

            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    );
}
