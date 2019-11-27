import React from 'react';
import Service from '../../components/services/Service';
import Transaction from '../../components/transaction/Transaction';
import ProfileItemList from "../../components/profileItemList/ProfileItemList";
import Analytics from "../../components/AnalyticsCard"
import Navbar from '../../components/Navbar/Navbar';

export default function Home() {
    return (
        <div>
            This is the homepage
            <Service/>
            <Transaction/>
            <ProfileItemList/>
            <Analytics/>
            <Navbar />
        </div>
    )
}
