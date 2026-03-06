const Loader = ({ message = 'Loading...' }) => {
    <div style={styles.wrapper}>
        <div style={styles.spinner} />
        <p style={styles.text}>{message}</p>
    </div>
}

const styles = {
    wrapper: {
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        minHeight: '200px', gap: '12px',
    },
    spinner: {
        width: '40px', height: '40px',
        border: '4px solid #e2e8f0',
        borderTop: '4px solid #3b82f6',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
    },
    text: { color: '#64748b', fontSize: '14px' },
}


const style = document.createElement('style');
style.textContent = `@keyframes spin {to { transform: rotate(360deg);}} `;
document.head.appendChild(style);

export default Loader;
