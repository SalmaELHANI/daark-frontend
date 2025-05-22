import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    return (
        <nav className="bg-white border-gray-200 py-2.5 shadow">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <Link to="/" className="flex items-center">
                    <svg
                        className="h-12 hidden lg:block"
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="247.8pt"
                        height="84.4"
                        viewBox="0 0 2478.000000 844.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient id="grad1" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0%" stopColor="#7474BF" />
                                <stop offset="100%" stopColor="#348AC7" />
                            </linearGradient>
                        </defs>
                        <g
                            transform="translate(0.000000,844.000000) scale(0.100000,-0.100000)"
                            fill="url(#grad1)"
                            stroke="none"
                        >
                            <path d="M18385 7256 c-16 -7 -39 -23 -50 -36 -20 -22 -20 -38 -23 -2584 -2
                                -1837 0 -2572 8 -2599 7 -25 22 -45 43 -57 30 -19 53 -20 370 -20 l337 0 38
                                34 37 34 5 591 5 590 35 37 c44 46 92 67 134 59 24 -6 176 -152 696 -670 407
                                -406 675 -666 690 -670 14 -3 240 -4 503 -3 l479 3 29 33 c23 26 29 42 29 79
                                l0 48 -890 890 c-937 938 -913 911 -896 982 5 19 241 262 752 773 723 724 744
                                747 744 783 0 21 -7 52 -16 68 -29 57 -44 59 -483 59 -254 0 -410 -4 -428 -10
                                -15 -6 -294 -277 -623 -605 l-595 -595 -49 0 c-41 0 -53 5 -82 34 l-34 34 0
                                1314 c0 1230 -1 1315 -18 1348 -33 67 -48 70 -402 70 -239 -1 -322 -4 -345
                                -14z"
                            />
                            <path d="M3785 7208 c-195 -22 -435 -81 -627 -155 -137 -53 -188 -91 -215
                                -161 -17 -45 -18 -142 -18 -2322 0 -2214 1 -2276 19 -2313 41 -84 91 -114 299
                                -186 278 -95 520 -135 832 -135 251 -1 395 15 615 69 980 241 1741 1038 1943
                                2035 41 202 51 310 51 550 -1 250 -19 403 -73 625 -264 1075 -1170 1877 -2253
                                1994 -115 13 -459 12 -573 -1z m496 -878 c407 -41 772 -213 1060 -500 140
                                -138 220 -241 304 -389 104 -184 168 -367 206 -589 19 -112 21 -152 16 -337
                                -4 -174 -10 -229 -30 -320 -62 -279 -173 -514 -342 -730 -64 -82 -214 -232
                                -295 -297 -229 -182 -529 -311 -835 -359 -112 -18 -389 -18 -438 0 -50 17
                                -103 64 -130 115 l-22 41 0 1590 c0 1313 2 1597 14 1628 16 46 63 102 103 123
                                65 34 206 42 389 24z"
                            />
                            <path d="M8855 5680 c-802 -91 -1461 -667 -1651 -1445 -52 -216 -54 -253 -54
                                -1251 0 -1013 -2 -977 59 -1008 25 -14 81 -16 367 -16 l336 0 34 34 34 34 0
                                884 c0 528 4 919 10 973 15 127 44 236 94 341 58 121 114 203 204 296 342 354
                                887 425 1313 171 196 -117 372 -324 446 -527 62 -171 57 -72 63 -1151 5 -1064
                                2 -1004 61 -1039 39 -23 674 -24 719 -1 63 33 60 -20 60 1031 0 1039 0 1037
                                -57 1259 -147 572 -575 1060 -1120 1280 -229 93 -430 134 -678 140 -88 2 -196
                                0 -240 -5z"
                            />
                            <path d="M13128 5679 c-487 -39 -957 -275 -1279 -642 -217 -247 -370 -558
                                -441 -893 l-23 -109 -3 -1003 -3 -1003 35 -35 34 -34 346 0 346 0 32 29 33 29
                                5 964 6 963 23 84 c54 196 132 337 263 476 142 150 301 246 504 302 91 26 112
                                28 274 27 189 -1 249 -11 397 -70 325 -128 573 -424 644 -769 18 -84 19 -151
                                19 -1028 l0 -939 34 -34 34 -34 350 0 c337 0 350 1 375 20 15 12 31 38 37 58
                                6 24 10 356 10 954 0 991 -2 1027 -55 1246 -143 588 -580 1089 -1145 1312
                                -264 105 -572 152 -852 129z"
                            />
                            <path d="M17139 5655 c-268 -38 -526 -142 -752 -302 -105 -74 -306 -275 -378
                                -378 -169 -240 -267 -489 -304 -774 -13 -98 -15 -271 -13 -1121 l3 -1005 24
                                -38 c12 -21 41 -47 62 -58 38 -19 56 -20 343 -17 l303 3 35 27 c72 55 68 -3
                                68 975 0 765 2 892 16 974 75 434 391 783 812 896 88 24 115 27 285 27 l187 1
                                0 320 c0 313 -1 322 -22 365 -31 59 -59 77 -148 95 -107 22 -400 28 -521 10z"
                            />
                            <path d="M8641 3283 c-18 -9 -45 -34 -60 -57 l-26 -40 0 -555 c0 -556 0 -556
                                22 -591 12 -20 40 -46 62 -58 40 -23 43 -23 398 -20 353 3 358 3 390 26 17 12
                                41 42 52 65 20 42 21 56 21 578 0 499 -2 537 -19 575 -10 23 -34 52 -52 65
                                l-34 24 -360 2 c-319 3 -364 1 -394 -14z"
                            />
                            <path d="M12865 3277 c-22 -12 -50 -40 -62 -62 l-23 -40 0 -542 c0 -358 4
                                -551 11 -570 16 -44 67 -90 112 -103 29 -8 144 -10 373 -8 l331 3 40 27 c81
                                53 78 32 78 648 0 609 3 580 -72 637 l-36 28 -356 3 c-354 2 -356 2 -396 -21z"
                            />
                        </g>
                    </svg>


                    <svg
                        className="h-10 block lg:hidden"
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 1886.000000 1785.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient id="grad1-mobile" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0%" stopColor="#7474BF" />
                                <stop offset="100%" stopColor="#348AC7" />
                            </linearGradient>
                        </defs>
                        <g
                            transform="translate(0.000000,1785.000000) scale(0.100000,-0.100000)"
                            fill="url(#grad1-mobile)"
                            stroke="none"
                        >
                            <path d="M9260 16050 c-1681 -71 -3261 -711 -4515 -1830 -136 -121 -459 -447
                                -590 -595 -929 -1053 -1531 -2345 -1729 -3715 -66 -453 -60 -101 -63 -4019 -3
                                -3188 -2 -3561 12 -3615 41 -161 174 -285 339 -315 83 -15 2369 -15 2452 0
                                150 28 272 130 331 279 17 43 18 219 23 3500 l6 3455 22 150 c43 299 86 487
                                171 745 120 364 250 632 467 961 392 597 922 1064 1569 1384 339 167 637 270
                                990 340 304 61 410 70 795 70 360 0 432 -5 695 -50 662 -114 1298 -402 1831
                                -830 745 -598 1268 -1475 1433 -2405 54 -301 51 -70 51 -3797 l0 -3454 21 -61
                                c50 -148 176 -259 329 -288 76 -14 2387 -14 2465 1 171 31 313 172 345 340 6
                                33 10 1330 10 3591 0 3080 -2 3558 -15 3686 -193 1886 -1107 3603 -2565 4817
                                -998 831 -2205 1376 -3486 1574 -442 69 -965 99 -1394 81z"
                            />
                            <path d="M7766 7040 c-34 -11 -82 -54 -102 -92 -12 -23 -14 -384 -14 -2454 l0
                                -2426 21 -37 c11 -20 36 -48 56 -61 l37 -25 1645 -3 c905 -2 1665 0 1689 3 50
                                7 108 53 128 102 12 27 14 442 14 2447 0 1686 -3 2423 -11 2443 -15 40 -48 73
                                -94 94 -38 18 -106 19 -1690 18 -907 0 -1663 -5 -1679 -9z"
                            />
                        </g>
                    </svg>
                </Link>

                <div className="flex items-center lg:order-2">
                    {isAuthenticated ? (
                        <Link
                            to="/profil"
                            className="text-[#348AC7] font-medium mr-8 hover:underline whitespace-nowrap"
                        >
                            Profil
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="text-[#348AC7] font-medium mr-8 hover:underline whitespace-nowrap"
                        >
                            Login
                        </Link>
                    )}


                    <button className="flex items-center gap-2 bg-[#7474BF] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#5f5fcf] transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Publier une annonce
                    </button>



                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {!isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                <div
                    className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? "block" : "hidden"
                        }`}
                    id="mobile-menu"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pl-3 pr-4 text-white bg-[#7474BF] rounded lg:bg-transparent lg:text-[#7474BF] lg:p-0"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#7474BF] lg:p-0"
                            >
                                Company
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#7474BF] lg:p-0"
                            >
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#7474BF] lg:p-0"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
