import { Route, Routes } from 'react-router-dom';
import Text from '../components/elements/Text/Text';
import ApiCaller from '../components/elements/ApiCaller';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Text as='p'>home</Text>} />
            <Route path="/books" element={<Text as='span'>books</Text>} />
            <Route path="/api" element={<ApiCaller />} />
        </Routes>
    );
}

export default AppRoutes;