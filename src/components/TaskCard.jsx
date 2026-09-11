import React from "react";

function TaskCard({ task, onEdit, onDelete }) {

    const handleDragStart = (event) => {
        event.dataTransfer.setData(
            "taskId",
            task.id.toString()
        );
    };

    return (
        <div
            className="task-card"
            draggable
            onDragStart={handleDragStart}
        >

            <div className="task-card-top">

                <span
                    className={`priority priority-${task.priority.toLowerCase()}`}
                >
                    {task.priority}
                </span>

                <div className="task-actions">

                    <button
                        onClick={() => onEdit(task)}
                        title="Edit"
                    >
                        ✏️
                    </button>

                    <button
                        onClick={() => onDelete(task.id)}
                        title="Delete"
                    >
                        🗑️
                    </button>

                </div>

            </div>

            <h3>{task.title}</h3>

            <p className="task-description">
                {task.description}
            </p>

            <div className="task-details">

                <span className="category">
                    {task.category}
                </span>

                <span className="due-date">
                    📅 {task.dueDate}
                </span>

            </div>

        </div>
    );
}

export default TaskCard;