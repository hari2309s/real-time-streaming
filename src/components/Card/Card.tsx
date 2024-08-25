import React from 'react';
import './Card.scss';
import { Instrument } from '../../types';
import { Button } from '../Button/Button';

interface CardProps extends Instrument {
    handleUnsubscribe: (
        e: React.MouseEvent<HTMLButtonElement>,
        isin: string,
    ) => void;
}

export const Card = ({
    isin,
    price,
    bid,
    ask,
    handleUnsubscribe,
}: CardProps) => {
    return (
        <section className="card">
            <section className="card-info">
                <h5>{isin}</h5>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="50px"
                    height="50px"
                >
                    <path
                        fill="#75849d"
                        d="M31,82c-6.617,0-12-5.383-12-12V31c0-6.617,5.383-12,12-12h39c6.617,0,12,5.383,12,12v39 c0,6.617-5.383,12-12,12H31z"
                    />
                    <polygon
                        fill="#bdc4d6"
                        points="82.5,40.5 77.5,44.5 73.5,52.607 69.5,45.5 65.5,48.5 62.365,41.446 61.5,41.615 60.785,41.498 57.562,50.5 54.528,51.565 50.5,57.5 46.5,55.5 42.5,45.5 38.5,53.433 34.5,51.5 30.5,56.5 27.5,57.629 23.5,55.5 19.5,54.5 19.084,70.624 21.208,77.247 26.207,81 30.36,82 71.871,81.899 76.725,80.281 81,75.073 82.034,69.056"
                    />
                    <polyline
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="62.336,41.425 65.5,48.543 69.5,45.543 73.5,52.65 77.5,44.543 82.5,40.543"
                    />
                    <polyline
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="19.5,54.5 23.5,55.5 27.5,57.629 30.5,56.5 34.5,51.5 38.5,53.433 42.5,45.5 46.5,55.5 50.5,57.5 54.528,51.565 57.562,50.5 60.785,41.498"
                    />
                    <path
                        fill="#1f212b"
                        d="M70,83H31c-7.18,0-13-5.82-13-13V31c0-7.18,5.82-13,13-13h39c7.18,0,13,5.82,13,13v39 C83,77.18,77.179,83,70,83z M20,31v39c0,6.075,4.925,11,11,11h39c6.075,0,11-4.925,11-11V31c0-6.075-4.925-11-11-11H31 C24.924,20,20,24.925,20,31z"
                    />
                    <line
                        x1="27.5"
                        x2="27.5"
                        y1="41.5"
                        y2="81.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="27.5"
                        x2="27.5"
                        y1="32.5"
                        y2="36.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="27.5"
                        x2="27.5"
                        y1="19.5"
                        y2="29.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="38.5"
                        x2="38.5"
                        y1="73.5"
                        y2="82"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="38.5"
                        x2="38.5"
                        y1="20"
                        y2="69.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="50.5"
                        x2="50.5"
                        y1="69.5"
                        y2="73.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="50.5"
                        x2="50.5"
                        y1="33.5"
                        y2="66.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="50.5"
                        x2="50.5"
                        y1="28.5"
                        y2="30.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <path
                        fill="#39c2d8"
                        d="M61.5,81.5c-0.552,0-1-0.449-1-1V20.25c0-0.551,0.448-1,1-1s1,0.449,1,1V80.5 C62.5,81.052,62.052,81.5,61.5,81.5z"
                    />
                    <path
                        fill="#1f212b"
                        d="M62,20v61h-1V20 M61.5,18.75c-0.827,0-1.5-0.327-1.5,0.5v62c0,0.827,0.673,1.5,1.5,1.5 s1.5-0.673,1.5-1.5v-62C63,18.423,62.327,18.75,61.5,18.75L61.5,18.75z"
                    />
                    <path
                        fill="#39c2d8"
                        d="M64.5,38.5c0,1.367-0.914,2.52-2.164,2.882C62.071,41.459,61.79,41.5,61.5,41.5 c-1.657,0-3-1.343-3-3s1.343-3,3-3S64.5,36.843,64.5,38.5z"
                    />
                    <line
                        x1="73.5"
                        x2="73.5"
                        y1="39.5"
                        y2="82"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="73.5"
                        x2="73.5"
                        y1="32.5"
                        y2="35.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="73.5"
                        x2="73.5"
                        y1="20"
                        y2="29.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <path
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M64.5,38.5 c0,1.367-0.914,2.52-2.164,2.882C62.071,41.459,61.79,41.5,61.5,41.5c-1.657,0-3-1.343-3-3s1.343-3,3-3S64.5,36.843,64.5,38.5z"
                    />
                    <line
                        x1="50.5"
                        x2="50.5"
                        y1="77.5"
                        y2="82"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <line
                        x1="50.5"
                        x2="50.5"
                        y1="20"
                        y2="24.5"
                        fill="none"
                        stroke="#1f212b"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                </svg>
            </section>

            <section className="card-amounts-container">
                <section className="amount">
                    <span>Price</span>
                    <span>{price.toFixed(3)}€</span>
                </section>
                <section className="amount">
                    <span>Bid</span>
                    <span>{bid.toFixed(3)}€</span>
                </section>
                <section className="amount">
                    <span>Ask</span>
                    <span>{ask.toFixed(3)}€</span>
                </section>
            </section>
            <Button
                type="button"
                color="var(--color-primary-red4)"
                onClick={e => handleUnsubscribe(e, isin)}
            >
                Unsubscribe
            </Button>
        </section>
    );
};
