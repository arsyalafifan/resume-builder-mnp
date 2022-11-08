import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import DashboardResumePageContainer from './Containers/DashboardResumePageContainer';
import DetailResumePageContainer from './Containers/DetailResumePageContainer';
import CreateResumePageContainer from './Containers/CreateResumePageContainer';
import UpdateResumePageContainer from './Containers/UpdateResumePageContainer';
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/dashboard-resume' exact element={<DashboardResumePageContainer />} />
      <Route path='/detail-resume/:id' exact element={<DetailResumePageContainer />} />
      <Route path='/create-resume' exact element={<CreateResumePageContainer />} />
      <Route path='/update-resume/:id' exact element={<UpdateResumePageContainer />} />
    </Routes>
  );
}

export default App;
