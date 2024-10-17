"use client"

import React, {useState, useEffect, useCallback} from 'react';
import { useFuzzySearchList, Highlight } from '@nozbe/microfuzz/react';
import { getCompanies } from '@/public/lib/data';

interface Company {
    name: string;
}

const Search = () => {
    const [query, setQuery] = useState('');
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const fetchedCompanies = await getCompanies();
            setCompanies(fetchedCompanies);
        };

        fetchCompanies();
    }, []);

    const getText = useCallback((company: Company) => [company.name], [])
    // @ts-ignore
    const mapResultItem = useCallback(({ item, matches: [highlightRanges] }) => {
        return { item, highlightRanges }
    }, [])

    // @ts-ignore
    const filteredCompanies = useFuzzySearchList({
        list: companies,
        queryText: query,
        getText,
        // @ts-ignore
        mapResultItem,
        strategy: "smart"
    })


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
                <h1 className="text-2xl font-bold mb-4 text-black ">{filteredCompanies.length} fetched out of {companies.length}</h1>
            </main>
        </div>
    )
};


export default Search;