import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PageContainer } from './components/pageContainer';
import { Login } from './pages/login';
import { Cadaster } from './pages/cadaster';
import { Route } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PageContainer>
        <Route path="/" component={Login} />
        <Route path="/cadaster" component={Cadaster} />
      </PageContainer>
    </QueryClientProvider>
  </StrictMode>
)
