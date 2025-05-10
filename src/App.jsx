import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { CharacterPage } from './pages/CharacterPage/CharacterPage';
import { LocationPage } from './pages/LocationPage/LocationPage.jsx';
import { EpisodePage } from './pages/EpisodePage/EpisodePage.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharacterPage />} />
            <Route path="/characters/:id" element={<CharacterPage />} />
            <Route path="/locations" element={<LocationPage />} />
            <Route path="/episodes" element={<EpisodePage />} />
        </Routes>
    );
}

export default App;
