import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PageContainer } from './components/pageContainer';
import { Login } from './pages/login';
import { Cadaster } from './pages/cadaster';
import { Route } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './main.css'
import { ProtectedPages } from './components/protectedPages';
import { Presentation } from './pages/presentation';
import { InitialPage } from './pages/home';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PageContainer>
        <Route path="/" component={Presentation} />
        <Route path="/login" component={Login} />
        <Route path="/cadaster" component={Cadaster} />

        <ProtectedPages>
          <Route path='/home' component={InitialPage} />
        </ProtectedPages>

      </PageContainer>
    </QueryClientProvider>
  </StrictMode>
)
