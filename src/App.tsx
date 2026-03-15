import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import WhatIsOculomics from './pages/WhatIsOculomics';
import ForPatients from './pages/ForPatients';
import ForDoctors from './pages/ForDoctors';
import ForResearchers from './pages/ForResearchers';
import ForInvestors from './pages/ForInvestors';
import ForCompanies from './pages/ForCompanies';
import Newsroom from './pages/Newsroom';
import Directory from './pages/Directory';
import Glossary from './pages/Glossary';
import About from './pages/About';
import EditorialPolicy from './pages/EditorialPolicy';
import Contact from './pages/Contact';
import CompaniesDirectory from './pages/directory/CompaniesDirectory';
import ProductsDirectory from './pages/directory/ProductsDirectory';
import StudiesDirectory from './pages/directory/StudiesDirectory';
import DatasetsDirectory from './pages/directory/DatasetsDirectory';
import AcademicDirectory from './pages/directory/AcademicDirectory';
import ConsortiaDirectory from './pages/directory/ConsortiaDirectory';
import EventsDirectory from './pages/directory/EventsDirectory';
import CompanyDetail from './pages/detail/CompanyDetail';
import ProductDetail from './pages/detail/ProductDetail';
import StudyDetail from './pages/detail/StudyDetail';
import DatasetDetail from './pages/detail/DatasetDetail';
import AcademicDetail from './pages/detail/AcademicDetail';
import ConsortiumDetail from './pages/detail/ConsortiumDetail';
import EventDetail from './pages/detail/EventDetail';
import SubmitCompany from './pages/submit/SubmitCompany';
import SubmitResearch from './pages/submit/SubmitResearch';
import SubmitProduct from './pages/submit/SubmitProduct';
import SubmitEvent from './pages/submit/SubmitEvent';
import ContactEditorial from './pages/submit/ContactEditorial';
import AdminDashboard from './pages/admin/AdminDashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-is-oculomics" element={<WhatIsOculomics />} />
          <Route path="/for-patients" element={<ForPatients />} />
          <Route path="/for-doctors" element={<ForDoctors />} />
          <Route path="/for-researchers" element={<ForResearchers />} />
          <Route path="/for-investors" element={<ForInvestors />} />
          <Route path="/for-companies" element={<ForCompanies />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/directory/companies" element={<CompaniesDirectory />} />
          <Route path="/directory/companies/:slug" element={<CompanyDetail />} />
          <Route path="/directory/products" element={<ProductsDirectory />} />
          <Route path="/directory/products/:slug" element={<ProductDetail />} />
          <Route path="/directory/studies" element={<StudiesDirectory />} />
          <Route path="/directory/studies/:slug" element={<StudyDetail />} />
          <Route path="/directory/datasets" element={<DatasetsDirectory />} />
          <Route path="/directory/datasets/:slug" element={<DatasetDetail />} />
          <Route path="/directory/academic-centers" element={<AcademicDirectory />} />
          <Route path="/directory/academic-centers/:slug" element={<AcademicDetail />} />
          <Route path="/directory/consortia" element={<ConsortiaDirectory />} />
          <Route path="/directory/consortia/:slug" element={<ConsortiumDetail />} />
          <Route path="/directory/events" element={<EventsDirectory />} />
          <Route path="/directory/events/:slug" element={<EventDetail />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/about" element={<About />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit/company" element={<SubmitCompany />} />
          <Route path="/submit/research" element={<SubmitResearch />} />
          <Route path="/submit/product" element={<SubmitProduct />} />
          <Route path="/submit/event" element={<SubmitEvent />} />
          <Route path="/contact-editorial" element={<ContactEditorial />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
