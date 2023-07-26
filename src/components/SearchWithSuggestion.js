import {useEffect, useState} from "react";
import searchResult from "../json/SearchResult.json"

const SearchWithSuggestion = ({minKeywordLength = 1}) => {
    const [searchKeyword, setKeyword] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [collections, setCollections] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        for (let i = 0; i < searchResult.length; i++) {
            const currentResult = searchResult[i];
            if (searchKeyword === currentResult.keyword) {
                setSuggestions(currentResult.suggestionTerms);
                setCollections(currentResult.collections);
                setProducts(currentResult.products);
                return;
            } else {
                setSuggestions([]);
                setCollections([]);
                setProducts([]);
            }
        }
    }, [searchKeyword])

    return (
        <div className="translate-y-1/6">
            <div className="relative w-96 max-w-lg">
                <form>
                    <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20">
                        <input type="text"
                               className="block w-full flex-1 py-2 px-3 focus:outline-none"
                               placeholder="Search Product..."
                               onChange={(e) => {
                                   setKeyword(e.target.value)
                               }}
                        />
                        <span
                            className="m-1 inline-flex cursor-pointer items-center rounded-md bg-indigo-600 px-2 py-2 hover:bg-indigo-700">
                            <svg className="text-white" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1 0-7.08a5 5 0 0 1 0 7.08Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42Z"/></svg>
                        </span>
                    </div>
                </form>

                {searchKeyword.length >= minKeywordLength &&
                    <div className="max-h-[90vh] overflow-y-auto absolute mt-2 w-full rounded-md bg-white">
                        <div className="cursor-pointer py-2 px-2 bg-slate-100">
                            <p className="text-sm font-medium text-gray-300 uppercase">Suggestions</p>
                        </div>

                        {suggestions.map((suggest, index) =>
                            <div key={index} className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                                <p className="text-sm text-gray-500">{suggest.term}</p>
                            </div>
                        )}
                        <div className="cursor-pointer py-2 px-2 bg-slate-100">
                            <p className="text-sm font-medium text-gray-300 uppercase">Collections</p>
                        </div>

                        {collections.map((collect, index) =>
                            <div key={index} className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                                <p className="text-sm text-gray-500">{collect.title}</p>
                            </div>
                        )}
                        <div className="cursor-pointer py-2 px-2 bg-slate-100">
                            <p className="text-sm font-medium text-gray-300 uppercase">Products</p>
                        </div>

                        {products.map((product, index) =>
                            <div key={index} className="flex flex-row flex-auto hover:bg-slate-100">
                                <img className="w-1/5 h-auto px-3 py-2 rounded-md"
                                     src={product.image}
                                     alt="image-product"
                                />
                                <div className="cursor-pointer pt-2 pb-12 pl-0">
                                    <p className="text-sm font-semibold text-gray-600">{product.title}</p>
                                    <p className="text-sm text-gray-500">{product.brand}</p>
                                    <p className="text-sm font-bold text-gray-800">{product.price}</p>
                                </div>
                            </div>
                        )}

                    </div>}

            </div>
        </div>
    )
}

export default SearchWithSuggestion;