import { Suspense, lazy } from 'react';
import Lazy from 'layout/Lazy';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('pages/home'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Lazy />}>
            <Routes>
                <Route path='/' element={<Login />} />
                {/* <Route path="*" element={<Page404 />} /> */}
            </Routes>
        </Suspense>
    )
}

export default AppRoutes