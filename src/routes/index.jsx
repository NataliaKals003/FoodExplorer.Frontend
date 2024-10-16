import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { ManageDish } from '../pages/ManageDish';
import { Favourite } from '../pages/Favourite';
import { routes } from './routes';
import { OrderHistory } from '../pages/OrderHistory';
import { Order } from '../pages/Order';

export function App() {
    const { user } = useAuth();

    if (user === undefined) {
        return <></>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={routes.signIn}
                    element={
                        <NotAuthenticatedRoute>
                            <SignIn />
                        </NotAuthenticatedRoute>
                    }
                />

                <Route
                    path={routes.signUp}
                    element={
                        <NotAuthenticatedRoute>
                            <SignUp />
                        </NotAuthenticatedRoute>
                    }
                />

                <Route
                    path={routes.home}
                    element={
                        <AuthenticatedRoute>
                            <Home />
                        </AuthenticatedRoute>
                    }
                />

                <Route
                    path={routes.dishDetails}
                    element={
                        <AuthenticatedRoute>
                            <Details />
                        </AuthenticatedRoute>
                    }
                />

                <Route
                    path={routes.createDish}
                    element={
                        <AuthenticatedRoute onlyForRole={'admin'}>
                            <ManageDish />
                        </AuthenticatedRoute>
                    }
                />
                <Route
                    path={routes.manageDish}
                    element={
                        <AuthenticatedRoute onlyForRole={'admin'}>
                            <ManageDish />
                        </AuthenticatedRoute>
                    }
                />

                <Route
                    path={routes.favourites}
                    element={
                        <AuthenticatedRoute>
                            <Favourite />
                        </AuthenticatedRoute>
                    }
                />

                <Route
                    path={routes.orderHistory}
                    element={
                        <AuthenticatedRoute>
                            <OrderHistory onlyForRole={'customer'} />
                        </AuthenticatedRoute>
                    }
                />

                <Route
                    path={routes.order}
                    element={
                        <AuthenticatedRoute>
                            <Order onlyForRole={'customer'} />
                        </AuthenticatedRoute>
                    }
                />

                <Route path="*" exact={true} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

const NotAuthenticatedRoute = ({ children }) => {
    const { user } = useAuth();

    if (user != null) {
        return <Navigate to={routes.home} replace />;
    }

    return children;
};

const AuthenticatedRoute = ({ children, onlyForRole }) => {
    const { user } = useAuth();

    if (user == null) {
        return <Navigate to={routes.signIn} replace />;
    }

    if (onlyForRole != null && user.role != onlyForRole) {
        // Another role trying to access
        return <Navigate to={routes.home} replace />;
    }

    return children;
};
