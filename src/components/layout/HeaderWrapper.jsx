import Header from './Header';
import HeaderAdmin from './headerAdmin';
import { useSelector } from 'react-redux';

export default function HeaderWrapper() {
    const { isLoggedIn, profile } = useSelector(state => state.user);
    const role = localStorage.getItem("role");

    if (isLoggedIn && role === 'ADMIN') {
        return <HeaderAdmin />;
    }

    return <Header />;
}
