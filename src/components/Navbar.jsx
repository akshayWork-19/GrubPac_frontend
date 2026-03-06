import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <nav style={styles.nav}>
            <Link to="/dashboard" style={styles.brand}>🏨 RoomBook</Link>
            {isAuthenticated && (
                <div style={styles.right}>
                    <Link to="/dashboard" style={styles.link}>Rooms</Link>
                    <Link to="/my-bookings" style={styles.link}>My Bookings</Link>
                    <span style={styles.user}>👤 {user?.name}</span>
                    <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
                </div>
            )}
        </nav>
    );



}

const styles = {
    nav: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', height: '64px',
        background: '#1e293b', boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    },
    brand: {
        color: '#f8fafc', fontSize: '22px', fontWeight: '700',
        textDecoration: 'none', letterSpacing: '-0.5px',
    },
    right: { display: 'flex', alignItems: 'center', gap: '24px' },
    link: { color: '#cbd5e1', textDecoration: 'none', fontSize: '15px' },
    user: { color: '#94a3b8', fontSize: '14px' },
    logoutBtn: {
        background: '#ef4444', color: '#fff', border: 'none',
        padding: '8px 16px', borderRadius: '8px', cursor: 'pointer',
        fontSize: '14px', fontWeight: '600',
    },
};

export default Navbar;