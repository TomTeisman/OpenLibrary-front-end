import { Route, Routes } from 'react-router-dom';
import Text from '../components/elements/Text/Text';
import ApiCaller from '../components/elements/ApiCaller';
import Homepage from '../components/pages/Homepage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/books" element={<Text as='span'>books</Text>} />
            <Route path="/api" element={<ApiCaller />} />
        </Routes>
    );
}

export default AppRoutes;