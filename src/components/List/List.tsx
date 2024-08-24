import React from 'react';
import { Card } from '../Card/Card';
import './List.scss';
import { Instrument } from '../../types';

interface ListProps {
    isReady: boolean;
    stocks: Array<Instrument>;
    send: (data: string) => void;
    setStocks: React.Dispatch<React.SetStateAction<Instrument[]>>;
}

export const List = ({ isReady, stocks, send, setStocks }: ListProps) => {
    const handleUnsubscribe = (e: React.MouseEvent<HTMLButtonElement>, isin: string) => {
        const message = {
            unsubscribe: isin
        };

        if (isReady) {
            send(JSON.stringify(message));
            setStocks(prevStocks => prevStocks.filter(stock => stock.isin !== isin));
        }
    }

    return <section className='stocks-container'>
        <h3>My stocks</h3>
        <article className='list'>{stocks.length > 0 ? <ul>{stocks.map(stock => <Card key={stock.isin}
            handleUnsubscribe={handleUnsubscribe} {...stock} />)}</ul> : <span className='empty-info' data-testid='empty-message'>Your watchlist is empty.
                Please subscribe to some stocks!</span>}</article>
    </section>
}