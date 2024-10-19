import React from 'react';
import Search from '@/public/components/CompanySearch/search';

const Home = () => {
    return (
        <div className="bg-white">
            <section className="h-screen mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
                <h1 className="text-5xl font-cormorantGaramond text-black text-center">Fuzzy Search for Companies</h1>
                <Search/>
            </section>
        </div>
    );
};

export default Home;