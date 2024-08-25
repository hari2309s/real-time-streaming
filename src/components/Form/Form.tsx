import React, { useEffect, useState } from 'react';
import './Form.scss';
import { Instrument } from '../../types';
import { Button } from '../Button/Button';
import { Textfield } from '../TextField/TextField';
import { isISINUnique, isISINValid } from '../../utils/helper';

interface FormProps {
    isReady: boolean;
    send: (data: string) => void;
    stocks: Array<Instrument>;
}

export const Form = ({ isReady, send, stocks }: FormProps) => {
    const [isin, setISIN] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const validateTimeout = setTimeout(() => {
            if (isin && isin.length === 12) {
                if (!isISINUnique(isin, stocks)) {
                    setError('Duplicate ISIN Code!');
                } else if (!isISINValid(isin)) {
                    setError('Invalid ISIN Code!');
                } else {
                    setError('');
                }
            } else {
                setError('');
            }
        }, 500);

        return () => clearTimeout(validateTimeout);
    }, [isin]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.trim().length <= 12) {
            setISIN(e.target.value.toUpperCase());
        }
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const message = {
            subscribe: isin,
        };

        if (isReady && isin.length === 12) {
            send(JSON.stringify(message));
        }

        setISIN('');
    };

    return (
        <form className="form">
            <Textfield
                id="isin-input"
                label="ISIN Code"
                placeholder="Ex. DE000BASF111"
                value={isin}
                errorMessage={error}
                onChange={handleChange}
            />
            <Button
                type="submit"
                color="var(--color-primary-green4)"
                disabled={!!(isin.length !== 12 || error || !isReady)}
                onClick={handleSubmit}
            >
                Subscribe
            </Button>
        </form>
    );
};
