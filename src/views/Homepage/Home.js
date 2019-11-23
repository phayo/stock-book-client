import React from 'react';
import Service from '../../components/services/Service';

import Transaction from '../../components/transaction/Transaction';
import Line from "../../components/ProfileItemList";
import Analytics from "../../components/AnalyticsCard"

export default function Home() {
    return (
        <div>
            This is the homepage
            <Service/>
            <Transaction/>
            <Line/>
            <Analytics/>
        </div>
    )
}
