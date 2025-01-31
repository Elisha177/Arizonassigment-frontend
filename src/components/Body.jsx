/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Suggestions from './Suggestions';
import ShopByDepartment from './ShopByDepartment ';
import LatestPosts from './LatestPosts';
import Footer from './Footer';
import TrendingStyles from './TrendingStyles';
import ShopByRoom from './ShopByRoom';
import SocialFollow from './SocialFollow';

const Body = () => {
    const carouselItems = [
        {
            id: 1,
            desktopImage: "https://imgcms.1stoplighting.com/site/common/promos/all/2024/final_chandelier_feature_heroslider.webp",
            mobileImage: "https://imgcms.1stoplighting.com/site/common/promos/all/2024/redone_chandelier_feature_heroslider_mobile.webp",
            alt: "Shop chandeliers",
            link: "/category/chandeliers"
        },
        {
            id: 2,
            desktopImage: "https://imgcms.1stoplighting.com/site/common/promos/all/2024/final_bathroomvanity_heroslider.webp",
            mobileImage: "https://imgcms.1stoplighting.com/site/common/promos/all/2024/redone_Bathroomvanity_heroslider_mobile.webp",
            alt: "Shop Bathroom Vanity",
            link: "/category/bathroom-vanity-lighting"
        }
    ];

    return (
        <div className="container mx-auto px-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Left Image Section */}
                <div className="md:col-span-4">
                    <a href="/category/plug-and-play-lighting" className="block">
                        <img
                            src="https://imgcms.1stoplighting.com/site/common/promos/all/2023/skyx-hero-100.jpg"
                            alt="Woman Installing SkyX Product"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </a>
                </div>

                {/* Carousel Section */}
                <div className="md:col-span-8">
                    <Carousel
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={5000}
                        showStatus={false}
                        className="rounded-lg shadow-md overflow-hidden"
                    >
                        {carouselItems.map((item) => (
                            <div key={item.id}>
                                <a href={item.link}>
                                    {/* Desktop Image */}
                                    <img
                                        src={item.desktopImage}
                                        alt={item.alt}
                                        className="hidden md:block w-full"
                                    />
                                    {/* Mobile Image */}
                                    {/*      <img
                                        src={item.mobileImage}
                                        alt={item.alt}
                                        className="block md:hidden w-full"
                                    /> */}
                                </a>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <Suggestions />
            <ShopByDepartment />
            <LatestPosts />
            <div className="w-full bg-gray-100 py-12 px-4 mt-8 mb-8">
                <div className="container mx-auto max-w-3xl text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                        Stay in the loop - Get our latest articles, sales, and more!
                    </h3>
                    <a
                        href=""
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full
                     hover:bg-blue-700 transition-colors duration-200
                     font-medium text-lg shadow-sm hover:shadow-md"
                    >
                        Join our Mailing List
                    </a>
                </div>
            </div>
            <TrendingStyles />
            <ShopByRoom />
            <SocialFollow/>
            <Footer />
        </div>
    );
};

export default Body;