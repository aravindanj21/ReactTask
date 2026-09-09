function EmptyState({
    title = "No Data Found",
    message = "There are no records to display."
}) {

    return (
        <div className="empty-state">

            <h3>{title}</h3>

            <p>{message}</p>

        </div>
    );
}

export default EmptyState;