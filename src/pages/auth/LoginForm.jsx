import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/admin/userSlice';
import GoogleAuthButton from '../../components/GoogleAuthButton';

const LoginForm = () => {
    const [LoginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(loginUser(LoginData));
        if (loginUser.fulfilled.match(resultAction)) {
            const role = localStorage.getItem('role'); 
            if (role === 'ADMIN') {
                navigate('/dashboard');
            } else {
                navigate('/');
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white shadow sm:rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <svg className="mt-9" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="247.8pt" height="84.4" viewBox="0 0 2478.000000 844.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <defs>
                            <linearGradient id="gradRegister1" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0%" stopColor="#7474BF" />
                                <stop offset="100%" stopColor="#348AC7" />
                            </linearGradient>
                        </defs>

                        <g transform="translate(0.000000,844.000000) scale(0.100000,-0.100000)"
                            fill="url(#gradRegister1)" stroke="none">
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

                    <div className="w-full flex-1 mt-8">
                        <div className="mx-auto max-w-xs">
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email"
                                placeholder="Email"
                                value={LoginData.email}
                                onChange={(e) => setLoginData({ ...LoginData, email: e.target.value })}
                            />

                            <div className="relative mt-5">
                                <input
                                    className="w-full px-8 py-4 pr-12 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={LoginData.password}
                                    onChange={(e) => setLoginData({ ...LoginData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            <div className="text-sm mt-4">
                                Mot de passe oublié ?{' '}
                                <Link
                                    to="/verify-email"
                                    className="text-[#348AC7] font-medium hover:underline"
                                >
                                    Réinitialiser
                                </Link>
                            </div>
                            {error && (
                                <div className="mt-2 text-sm text-red-500 text-center">
                                    {error.message || "Login failed"}
                                </div>
                            )}

                            <button onClick={handleLogin} disabled={loading} className="mt-5 tracking-wide font-semibold bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white w-full py-4 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                                <span className="ml-3">Log In</span>
                            </button>

                            <div className="text-sm text-center mt-4">
                                Vous n’avez pas de compte ?{' '}
                                <Link
                                    to="/register"
                                    className="text-[#348AC7] font-medium hover:underline"
                                >
                                    S’inscrire
                                </Link>
                            </div>
                        </div>
                        <GoogleAuthButton type="login" onSuccess={() => navigate('/')} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
