import './App.css';
import SearchWithSuggestion from "./components/SearchWithSuggestion";
import {useState} from "react";
import {FcSearch} from "react-icons/fc";

function App() {
    const [searchKeyword, setKeyword] = useState('');

    return (
        <div className="App">
            <div
                className="flex min-h-screen justify-center overflow-hidden bg-gradient-to-br from-sky-500 via-teal-300 to-cyan-500">
                <div className="translate-y-1/6">
                    <div className="relative w-96 max-w-lg">
                        <form>
                            <div
                                className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20">
                                <input type="text"
                                       className="block w-full flex-1 py-2 px-3 focus:outline-none"
                                       placeholder="Search Product..."
                                       onChange={(e) => {
                                           setKeyword(e.target.value)
                                       }}
                                />
                                <span className="m-1 inline-flex cursor-pointer items-center rounded-md bg-indigo-300 px-2 py-2 hover:bg-indigo-600">
                                    <FcSearch
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            </div>
                        </form>

                        <SearchWithSuggestion
                            keyword={searchKeyword}
                            minKeywordLength={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
