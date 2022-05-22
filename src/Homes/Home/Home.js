import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSam from '../BusinessSam/BusinessSam';
import ExtraOne from '../ExtraOne/ExtraOne';
import ExtraTwo from '../ExtraTwo/ExtraTwo';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSam></BusinessSam>
            <Reviews></Reviews>
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;