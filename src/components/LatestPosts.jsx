/* eslint-disable no-unused-vars */
import React from 'react';

const LatestPosts = () => {
    const posts = [
        {
            image: "https://images.1stoplighting.com/site/common/promos/all/2023/vaulted-ceilings.jpg",
            category: "Pro Tips",
            title: "Kitchen Lighting for Vaulted Ceilings",
            href: "/kitchen-lighting-for-vaulted-ceilings.htm?bid=bmb",
            alt: "three lit kitchen pendants in front of a black tile wall"
        },
        {
            image: "https://images.1stoplighting.com/site/common/promos/all/2023/mid-century-modern-ideas.jpg",
            category: "Style Spotlight",
            title: "Mid-Century Modern Lighting Ideas",
            href: "/mid-century-modern-lighting-ideas.htm?bid=bmb",
            alt: "two stylish dramatic bedroom sconces attached to a wood slat wall on either side of a bed with blue and cream bedding"
        },
        {
            image: "https://images.1stoplighting.com/site/common/promos/all/2023/bathroom-lighting-guide.jpg",
            category: "Learn",
            title: "Bathroom Vanity Lighting",
            href: "/bathroom-vanity-lighting-ideas-and-buying-guide.htm?bid=bmb",
            alt: "a farmhouse kitchen with a linear chandelier and several recessed ceiling lights"
        }
    ];

    return (
        <div className="container mx-auto px-4 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Latest Posts</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <div key={index} className="flex flex-col">
                        <a
                            href={post.href}
                            className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative aspect-w-513 aspect-h-400">
                                <img
                                    src={post.image}
                                    alt={post.alt}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                    width={513}
                                    height={400}
                                />
                            </div>
                        </a>

                        <div className="mt-4">
                            <p className="text-blue-600 font-medium mb-2">
                                {post.category}
                            </p>
                            <h3 className="text-xl font-semibold">
                                <a
                                    href={post.href}
                                    className="hover:text-blue-600 transition-colors duration-200"
                                >
                                    {post.title}
                                </a>
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestPosts;