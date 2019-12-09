import React from 'react'
import { Button, Card, Row, Col } from 'react-materialize';
import StockCard from '../StockCard/StockCard';

function StockList(props) {
    const stocks = props.stocks.map((stock) => {
        return (
            <StockCard />
        )
    });

    return
}