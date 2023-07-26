import {useEffect, useState} from "react";
import searchResult from "../json/SearchResult.json"
import {BiDownArrow, BiUpArrow} from "react-icons/bi";

const SearchWithSuggestion = ({keyword = '', minKeywordLength = 1}) => {

    const [suggestions, setSuggestions] = useState([]);
    const [collections, setCollections] = useState([]);
    const [products, setProducts] = useState([]);
    const [isShowSuggestion, setShowSuggest] = useState(true);
    const [isShowCollection, setShowCollect] = useState(true);
    const [isShowProduct, setShowProduct] = useState(true);

    useEffect(() => {
        for (let i = 0; i < searchResult.length; i++) {
            const currentResult = searchResult[i];
            if (keyword === currentResult.keyword) {
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
    }, [keyword])

    const toggleShowSuggest = () => {
        setShowSuggest((prevState) => {
            return !prevState;
        })
    }

    const toggleShowCollect = () => {
        setShowCollect((prevState) => {
            return !prevState;
        })
    }

    const toggleShowProduct = () => {
        setShowProduct((prevState) => {
            return !prevState;
        })
    }

    const getHighlightedText = (text) => {
        const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === keyword.toLowerCase() ? <b>{part}</b> : part)}</span>;
    }

    return (
        <div className="translate-y-1/6">
            <div className="relative w-96 max-w-lg">
                {keyword.length >= minKeywordLength &&
                    <div className="max-h-[90vh] overflow-y-auto absolute mt-2 w-full rounded-md bg-white">
                        {suggestions.length > 0 && <div className="flex flex-row flex-auto justify-between cursor-pointer py-2 px-2 bg-slate-100"
                             onClick={toggleShowSuggest}
                        >
                            <p className="text-sm font-medium text-gray-300 uppercase">Suggestions</p>
                            {isShowSuggestion ? <BiUpArrow className="text-gray-400"/> : <BiDownArrow className="text-gray-400"/>}
                        </div>}

                        {isShowSuggestion && suggestions.map((suggest, index) =>
                            <div key={index} className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                                <a href={suggest.url} className="text-sm text-gray-500">{getHighlightedText(suggest.term)}</a>
                            </div>
                        )}
                        {collections.length > 0 && <div className="flex flex-row flex-auto justify-between cursor-pointer py-2 px-2 bg-slate-100"
                             onClick={toggleShowCollect}
                        >
                            <p className="text-sm font-medium text-gray-300 uppercase">Collections</p>
                            {isShowCollection ? <BiUpArrow className="text-gray-400"/> : <BiDownArrow className="text-gray-400"/>}
                        </div>}

                        {isShowCollection && collections.map((collect, index) =>
                            <div key={index} className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                                <p className="text-sm text-gray-500">{getHighlightedText(collect.title)}</p>
                            </div>
                        )}
                        {products.length > 0 && <div className="flex flex-row flex-auto justify-between cursor-pointer py-2 px-2 bg-slate-100"
                             onClick={toggleShowProduct}
                        >
                            <p className="text-sm font-medium text-gray-300 uppercase">Products</p>
                            {isShowProduct ? <BiUpArrow className="text-gray-400"/> : <BiDownArrow className="text-gray-400"/>}
                        </div>}

                        {isShowProduct && products.map((product, index) =>
                            <div key={index} className="flex flex-row flex-auto hover:bg-slate-100">
                                <img className="w-1/5 h-auto px-3 py-2 rounded-md"
                                     src={product.image}
                                     alt="image-product"
                                />
                                <div className="cursor-pointer pt-2 pb-12 pl-0">
                                    <p className="text-sm font-semibold text-gray-600">{getHighlightedText(product.title)}</p>
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