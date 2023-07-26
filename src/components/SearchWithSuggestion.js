const SearchWithSuggestion = () => {
    return (
        <div className="translate-y-1/6">
            <div className="relative w-96 max-w-lg">
                <form>
                    <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20">
                        <input type="text" className="block w-full flex-1 py-2 px-3 focus:outline-none"
                               placeholder="Search Product..."/>
                        <span
                            className="m-1 inline-flex cursor-pointer items-center rounded-md bg-indigo-600 px-2 py-2 hover:bg-indigo-700">
            <svg className="text-white" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1 0-7.08a5 5 0 0 1 0 7.08Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42Z"/></svg>
          </span>
                    </div>
                </form>
                <div className="absolute mt-2 w-full overflow-hidden rounded-md bg-white">
                    <div className="cursor-pointer py-2 px-2 bg-slate-100">
                        <p className="text-sm font-medium text-gray-300 uppercase">Suggestions</p>
                    </div>
                    <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                        <p className="text-sm text-gray-500">Top tank</p>
                    </div>
                    <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                        <p className="text-sm text-gray-500">Cotton top</p>
                    </div>
                    <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                        <p className="text-sm text-gray-500">Red top</p>
                    </div>
                    <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                        <p className="text-sm text-gray-500">Green top</p>
                    </div>
                    <div className="cursor-pointer py-2 px-2 bg-slate-100">
                        <p className="text-sm font-medium text-gray-300 uppercase">Collections</p>
                    </div>
                    <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
                        <p className="text-sm text-gray-500">Tops</p>
                    </div>
                    <div className="cursor-pointer py-2 px-2 bg-slate-100">
                        <p className="text-sm font-medium text-gray-300 uppercase">Products</p>
                    </div>
                    <div className="flex flex-row flex-auto">
                        <img className="w-1/5 h-auto px-3 py-2 rounded-md" src="https://picsum.photos/182/264" alt="image-product"/>
                        <div className="cursor-pointer pt-2 pb-12 pl-0 hover:bg-slate-100">
                            <p className="text-sm font-semibold text-gray-600">Satin top</p>
                            <p className="text-sm text-gray-500">Dior</p>
                            <p className="text-sm font-bold text-gray-800">$15.50</p>
                        </div>
                    </div>

                    <div className="flex flex-row flex-auto">
                        <img className="w-1/5 h-auto px-3 py-2 rounded-md" src="https://picsum.photos/182/264" alt="image-product"/>
                        <div className="cursor-pointer pt-2 pb-12 pl-0 hover:bg-slate-100">
                            <p className="text-sm font-semibold text-gray-600">Satin top</p>
                            <p className="text-sm text-gray-500">Dior</p>
                            <p className="text-sm font-bold text-gray-800">$15.50</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-auto">
                        <img className="w-1/5 h-auto px-3 py-2 rounded-md" src="https://picsum.photos/182/264" alt="image-product"/>
                        <div className="cursor-pointer pt-2 pb-12 pl-0 hover:bg-slate-100">
                            <p className="text-sm font-semibold text-gray-600">Satin top</p>
                            <p className="text-sm text-gray-500">Dior</p>
                            <p className="text-sm font-bold text-gray-800">$15.50</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchWithSuggestion;