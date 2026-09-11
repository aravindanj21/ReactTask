import React from "react";
import KanbanColumn from "./KanbanColumn";

function KanbanBoard({ tasks, onEdit, onDelete, onDrop }) {

    const columns = [
        {
            id: "todo",
            title: "TODO"
        },
        {
            id: "in-progress",
            title: "IN PROGRESS"
        },
        {
            id: "review",
            title: "REVIEW"
        },
        {
            id: "done",
            title: "DONE"
        }
    ];

    return (
        <div className="kanban-board">

            {columns.map((column) => (
                <KanbanColumn
                    key={column.id}
                    column={column}
                    tasks={tasks.filter(
                        (task) => task.status === column.id
                    )}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onDrop={onDrop}
                />
            ))}

        </div>
    );
}

export default KanbanBoard;