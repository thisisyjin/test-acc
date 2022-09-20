import { Routes, Route } from 'react-router-dom';
import AreaSearchForm from './routes/AreaSearchForm';
import Home from './routes/Home';
import HospitalSearch from './routes/HospitalSearch';
import ImgSaved from './routes/ImgSaved';
import ImgUpload from './routes/ImgUpload';
import MainAreaSelect from './routes/MainAreaSelect';
import NewHome from './routes/NewHome';
import SearchTest from './routes/SearchTest';
import SubAreaSelect from './routes/SubAreaSelect';
import TypoTest from './routes/TypoTest';
import UserInfoForm from './routes/UserInfoForm';
import UserInfoSaved from './routes/UserInfoSaved';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hi" element={<NewHome />} />
        <Route path="/search" element={<SearchTest />} />
        <Route path="/area/main" element={<MainAreaSelect />} />
        <Route path="/area/sub" element={<SubAreaSelect />} />
        <Route path="/area/search" element={<AreaSearchForm />} />
        <Route path="/hospital" element={<HospitalSearch />} />
        <Route path="/upload" element={<ImgUpload />} />
        <Route path="/upload/:id" element={<ImgUpload />} />
        <Route path="/upload/save" element={<ImgSaved />} />
        <Route path="/info" element={<UserInfoForm />} />
        <Route path="/info/save" element={<UserInfoSaved />} />

        <Route path="/typo" element={<TypoTest />} />
      </Routes>
    </>
  );
}

export default App;
