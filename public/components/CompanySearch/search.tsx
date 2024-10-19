"use client"

import React, {useState, useEffect, useCallback, useMemo} from 'react';
import { useFuzzySearchList, Highlight } from '@nozbe/microfuzz/react';
import { companies, type Company } from '@/data/companies';


interface SearchIndex {
    [key: string]: Company[];
}



const Search = () => {
    const [query, setQuery] = useState('');

    const searchIndex = useMemo(() => {
        console.log('Building search index...');
        const index: SearchIndex = {};

        companies.forEach(company => {
            const words = company.name.toLowerCase().split(' ');
            words.forEach(word => {
                for (let i = 1; i <= Math.min(1, word.length); i++) {
                    const prefix = word.slice(0, i);
                    if (!index[prefix]) {
                        index[prefix] = [];
                    }
                    if (!index[prefix].includes(company)) {
                        index[prefix].push(company);
                    }
                }
            });
        });
        return index;
    }, []);

    const preFilteredCompanies = useMemo(() => {
        if (!query) return companies.slice(0, 100);

        const searchTerm = query.toLowerCase();
        if (searchTerm.length <= 1) {
            return searchIndex[searchTerm] || [];
        }

        const firstThreeChars = searchTerm.slice(0, 1);
        return searchIndex[firstThreeChars] || companies;
    }, [query, searchIndex]);



    const getText = useCallback((company: Company) => [company.name], [])
    // @ts-ignore
    const mapResultItem = useCallback(({ item, matches: [highlightRanges] }) => {
        return { item, highlightRanges }
    }, [])


    const filteredCompanies = useFuzzySearchList({
        list: preFilteredCompanies,
        queryText: query,
        getText,
        // @ts-ignore
        mapResultItem,
        strategy: "smart"
    });

    // Format the results
    const displayCompanies = query ? filteredCompanies :
        preFilteredCompanies.slice(0, 100).map(item => ({
            item,
            highlightRanges: []
        }));

    return (
        <div className="min-h-screen bg-white text-black">
            <main className="p-4 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-black ">Last Updated 18 Oct 24</h1>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search companies..."
                    className="w-full p-2 border rounded mb-4 text-blue-600"
                />
                <div className="border rounded" style={{overflow: "auto", maxHeight: "50vh"}}>
                    <div className="h-full overflow-y-auto">
                        {filteredCompanies.map(({item: company, highlightRanges}, i) => (
                            <div key={i} className="p-2 border-b hover:bg-gray-50">
                                <div className="font-medium text-black">
                                    <Highlight
                                        text={company.name}
                                        ranges={highlightRanges}
                                        // @ts-ignore
                                        highlightComponent={({children}) => (
                                            <span className="bg-yellow-200 text-black">{children}</span>
                                        )}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="text-2xl font-bold mb-4 text-black ">{displayCompanies.length} fetched
                    {!query ? ' (showing first 100)' : ` out of ${companies.length}`}</h1>
            </main>
        </div>
    )
};


export default Search;