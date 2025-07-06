import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#348AC7] to-[#7474BF] text-white pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <svg
                                className="w-40 h-auto mt-"
                                version="1.0"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 2478.000000 844.000000"
                                preserveAspectRatio="xMidYMid meet"
                                fill="white"
                            >
                                <g
                                    transform="translate(0.000000,844.000000) scale(0.100000,-0.100000)"
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
                        </div>
                        <p className="text-white opacity-80">Construire des solutions innovantes pour un monde moderne.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.facebook.com/daark" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-white rounded-md" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/daark" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.932 4.932 0 002.163-2.724 9.86 9.86 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.955 13.955 0 011.671 3.15a4.916 4.916 0 001.523 6.56 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084 4.919 4.919 0 004.59 3.42A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.209c9.058 0 14.01-7.513 14.01-14.02 0-.213-.005-.425-.015-.637A10.012 10.012 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/daark" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
                                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="h-6 w-6 text-white " xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37a4 4 0 11-7.99.63 4 4 0 017.99-.63z" />
                                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/daark" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-white rounded-md" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.447-2.137 2.942v5.664H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.604 0 4.269 2.371 4.269 5.455v6.286zM5.337 7.433a2.07 2.07 0 11.001-4.14 2.07 2.07 0 01-.001 4.14zm1.777 13.019H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.548C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.274V1.726C24 .774 23.2 0 22.225 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Explorez</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="text-white opacity-80 hover:opacity-100 transition">Accueil</Link></li>
                            <li><Link to="/about" onClick={() => window.scrollTo({ top: 0 })} className="text-white opacity-80 hover:opacity-100 transition">À propos</Link></li>
                            <li><Link to="/advantages" onClick={() => window.scrollTo({ top: 0 })} className="text-white opacity-80 hover:opacity-100 transition">Nos avantages</Link></li>
                            <li><Link to="/marketplace" onClick={() => window.scrollTo({ top: 0 })} className="text-white opacity-80 hover:opacity-100 transition">Marketplace</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Assistance</h3>
                        <ul className="space-y-2">
                            <li><Link to="/faq" onClick={() => window.scrollTo({ top: 0 })} className="text-white opacity-80 hover:opacity-100 transition">FAQ</Link></li>
                            <li><a href="mailto:contact@daark.com" className="text-white opacity-80 hover:opacity-100 transition">Aide & Assistance</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contactez Daark</h3>
                        <address className="not-italic text-white opacity-80 space-y-1">
                            <p>Adresse : Résidence Rayhane, Etage n°3 bureau 12, Quartier Hay Dakhla</p>
                            <p>Agadir, Maroc</p>
                            <p>Email : <a href="mailto:contact@daark.com" className="hover:opacity-100">contact@daark.com</a></p>
                            <p>Téléphone : <a href="tel:+212612345678" className="hover:opacity-100">+212 6 12 34 56 78</a></p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white text-sm mb-4 md:mb-0 opacity-70">© 2025 Daark. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
