import React, {useCallback, useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TopBar from './components/TopBar'

import Web3Provider from './contexts/Web3Provider';
import MetamaskStatusProvider from './contexts/MetamaskStatusProvider';
import WalletProvider from './contexts/WalletProvider';

import Home from './views/Home';
import Wallet from './views/Wallet';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/lottery" exact>
    
          </Route>
          <Route path="/wallet" exact>
              <Wallet />
          </Route>
          <Route path="/law" exact>
    
          </Route>

        </Switch>

      </BrowserRouter>
    </Providers>
  );
}

const Providers: React.FC = ({children}) => {
  return (
    
    
      <MetamaskStatusProvider>
      <Web3Provider>
      <WalletProvider>
      {children}
      </WalletProvider>
      </Web3Provider>
      </MetamaskStatusProvider>

  )
}

export default App;
