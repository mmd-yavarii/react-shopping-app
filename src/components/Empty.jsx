function Empty({ title, message, icon }) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
            color: '#555',
            fontSize: '1rem',
            textAlign: 'center',
            height: '60vh',
        },
        icon: {
            fontSize: '3rem',
            marginBottom: '10px',
        },
        alert: {
            marginTop: '1em',
        },
        message: {
            fontSize: '0.8rem',
            width: '200px',
            opacity: '0.6',
        },
    };

    return (
        <div style={styles.container}>
            {icon}
            <p style={styles.alert}>{title}</p>
            <p style={styles.message}>{message}</p>
        </div>
    );
}

export default Empty;
