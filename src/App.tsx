import React from 'react';
import { Form } from './components/Form/Form';
import { List } from './components/List/List';
import { useWebSocket } from './hooks/useWebSocket';
import './App.scss';
import { ErrorBanner } from './components/ErrorBanner/ErrorBanner';

function App() {
    const [isReady, send, stocks, setStocks] = useWebSocket();

    return <div className='container'>
        <Form isReady={isReady} send={send} stocks={stocks} />
        {!isReady && stocks.length > 0 && <ErrorBanner message='Due to network connection issues the stock prices may not be upto date!' />}
        <List isReady={isReady} stocks={stocks} send={send} setStocks={setStocks} />
    </div>;
}

export default App;