import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  background-color: var(--background-color);
`;

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Sidebar />
      <MainSection>
        <Header />
        {children}
      </MainSection>
    </AppContainer>
  );
};

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashboardMainContent />
            </Layout>
          }
        />
        {/* Add more routes here as needed */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
