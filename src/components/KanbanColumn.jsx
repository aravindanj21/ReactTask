import React from "react";
import TaskCard from "./TaskCard";

function KanbanColumn({
    column,
    tasks,
    onEdit,
    onDelete,
    onDrop
}) {

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();

        const taskId = Number(
            event.dataTransfer.getData("taskId")
        );

        onDrop(taskId, column.id);
    };

    return (
        <div
            className="kanban-column"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >

            <div className="column-header">
                <h2>{column.title}</h2>

                <span className="task-count">
                    {tasks.length}
                </span>
            </div>

            <div className="column-content">

                {tasks.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">📋</div>

                        <p>No tasks here</p>

                        <span>
                            Drag a card here
                        </span>
                    </div>
                ) : (
                    tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))
                )}

            </div>

        </div>
    );
}

export default KanbanColumn;