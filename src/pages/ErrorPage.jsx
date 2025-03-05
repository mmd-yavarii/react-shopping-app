function ErrorPage({ message }) {
    return (
        <div
            style={{
                fontSize: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90vh',
            }}
        >
            {message} !
        </div>
    );
}

export default ErrorPage;
