import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PageContainer } from './components/pageContainer';
import { Login } from './pages/login';
import { Cadaster } from './pages/cadaster';
import { Route } from 'wouter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageContainer>
      <Route path="/" component={Login} />
      <Route path="/cadaster" component={Cadaster} />
    </PageContainer>
  </StrictMode>
)
