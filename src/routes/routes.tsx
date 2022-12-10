import {BrowserRouter
    as Router,
    Route,
    Routes} from 'react-router-dom';
import InclusaoLivros from "../components/InclusaoLivros"
import ManutencaoLivros from '../components/ManutencaoLivros';
import ResumoLivros from '../components/ResumoLivros';

    const PathsOfSite = () => {
        return (
            <>
            <Router>
                <Routes>
                    <Route path = "/" element={<InclusaoLivros />} />
                    <Route path = "manut" element={<ManutencaoLivros />} />
                    <Route path='resumo' element={<ResumoLivros />} />
                </Routes>
            </Router>
            </>
        )
    }
    export default PathsOfSite;