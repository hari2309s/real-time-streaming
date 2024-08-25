import { useEffect, useState } from 'react';
import { WEB_SOCKET_URL } from '../constants';
import { Instrument } from '../types';

export const useWebSocket = (): [
    boolean,
    (data: string) => void,
    Array<Instrument>,
    React.Dispatch<React.SetStateAction<Instrument[]>>,
] => {
    const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
    const [stocks, setStocks] = useState<Array<Instrument>>([]);
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        const websocket = new WebSocket(WEB_SOCKET_URL);

        websocket.onopen = () => {
            console.log('WebSocket is connected');
            setIsReady(true);
        };

        websocket.onmessage = event => {
            const message = JSON.parse(event.data);

            setStocks(prevStocks => {
                const stockIndex = prevStocks.findIndex(
                    s => s.isin === message.isin,
                );

                if (stockIndex > -1) {
                    const updatedStocks = [...prevStocks];
                    updatedStocks[stockIndex] = message;
                    return updatedStocks;
                } else {
                    return [...prevStocks, message];
                }
            });
        };

        websocket.onclose = () => {
            console.log('WebSocket is closed');
            setIsReady(false);
        };

        setWebSocket(websocket);

        return () => {
            websocket.close();
        };
    }, []);

    return [isReady, webSocket?.send.bind(webSocket)!, stocks, setStocks];
};
