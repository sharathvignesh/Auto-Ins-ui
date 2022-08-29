import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from 'antd';
import React from 'react';

import AppContent from './containers/Content';
import AppHeader from './containers/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <Layout>
            <AppHeader />
            <AppContent />
          </Layout>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
