import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div>
            <section>
                <div className="w-screen h-[80px] z-10 bg-zinc-900 fixed drop-shadow-lg">
                    <div className="px-2 flex justify-between items-center w-full h-full">
                        <div className="flex items-center">
                            <h1 className="text-xl uppercase font-bold mr-4 text-red-700 sm:text-xl">
                                Bioskop Online
                            </h1>
                            <ul className="hidden text-white md:flex">
                                <li>Home</li>
                                <li>Trending</li>
                                <li>Movie</li>
                                <li>Tv Series</li>
                            </ul>
                        </div>
                        <div className="hidden md:flex">
                            <input className="w-[300px] placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-1 pl-2 pr-2 shadow-sm focus:outline-none focus:border-red-700 focus:ring-red-700 focus:ring-1 sm:text-sm" placeholder="Search movie here..." type="text" name="search" />

                            <button className="border-none rounded-md mr-4 ml-4 text-white bg-red-700 px-6 py-1">
                                Search</button>
                        </div>
                        <div className="md:hidden" onClick={handleClick}>
                            {!nav ? <MenuIcon className="flex text-white w-5" /> : <XIcon className="text-white w-5" />}
                        </div>
                    </div>
                    <ul className={!nav ? 'hidden' : 'absolute bg-zinc-900 w-full px-8'}>
                        <li className="border-b-2 text-white border-zinc-300 w-full">Home</li>
                        <li className="border-b-2 text-white border-zinc-300 w-full">Trending</li>
                        <li className="border-b-2 text-white border-zinc-300 w-full">Movie</li>
                        <li className="border-b-2 text-white border-zinc-300 w-full">Tv Series</li>
                        <div className="flex flex-col my-4">
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-full py-1 px-2 mx-4 shadow-sm focus:outline-none focus:border-red-700 focus:ring-red-700 focus:ring-1 sm:text-sm" placeholder="Search movie here..." type="text" name="search" />

                            <button className="border-none rounded-full mx-4 mt-4 text-white bg-red-700 px-6 py-1">Search</button>
                        </div>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Navbar