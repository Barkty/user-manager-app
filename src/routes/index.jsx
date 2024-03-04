import { Suspense, lazy } from 'react';
import Lazy from 'layout/Lazy';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('pages/home'));
const Dashboard = lazy(() => import('pages/dashboard'))

const AppRoutes = () => {
    return (
        <Suspense fallback={<Lazy />}>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes