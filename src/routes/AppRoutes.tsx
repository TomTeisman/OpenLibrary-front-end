import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import SearchPage from '../components/pages/SearchPage';
import DetailsPage from '../components/pages/DetailsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/books/:id" element={<DetailsPage />} />
        </Routes>
    );
}

export default AppRoutes;