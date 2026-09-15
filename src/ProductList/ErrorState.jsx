function ErrorState({ message, onRetry }) {
    return (
        <div className="state-container error-state">
            <h2>Something went wrong</h2>

            <p>{message || "Unable to load products."}</p>

            <button onClick={onRetry}>
                Retry
            </button>
        </div>
    );

}

export default ErrorState;