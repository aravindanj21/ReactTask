import React, {useState} from "react";
import KanbanBoard from "../components/KanbanBoard";
import TaskForm from "../components/TaskForm";

import "./KanbanPage.css";

function KanbanPage() {
    const[tasks, setTasks] = useState([
        {
            id:1,
            title:"Login Page",
            description: "Design login page for the application",
            priority: "High",
            category: "Development",
            dueDate: "2026-09-15",
            status:"todo"
        },

        {
            id:2,
            title: "Shopping Cart Page",
            description: "Create Shopping Cart Page",
            priority: "Medium",
            categoty: "Design",
            dueDate: "2026-09-18",
            status: "in-progress"
        },

        {
            id: 3,
            title: "Test API",
            description: "Test all backend API endpoints",
            priority: "Low",
            category: "Testing",
            dueDate: "2026-09-20",
            status: "review"

        },
        
        {
            id:4,
            title:"Checkout Page",
            description: "Design login page for the application",
            priority: "High",
            category: "Development",
            dueDate: "2026-09-20",
            status:"todo"
        }
    ]);

    const [showForm, setShowForm] = useState(false);

    const [editingTask, setEditingTask] = useState(null);

    const handleSaveTask = (task) => {
        if (editingTask) {
            setTasks((prevTasks) =>
                prevTasks.map((item) =>
                    item.id ===task.id
                    ? task
                    : item
                )
            );

            setEditingTask(null);

        }  else {
            
            const newTask = {
                ...task,
                id: Date.now(),
                status: "todo",
            };

            setTasks((prevTasks) => [
                ...prevTasks,
                newTask
            ]);
        }

        setShowForm(false);
    };

    const handleDeleteTask = (id) => {

        setTasks((prevTasks) => 
            prevTasks.filter(
                (task) => task.id !== id
            )
        );
    };

    const handleEditTask = (task) => {
        
        setEditingTask(task);

        setShowForm(true);

    };

    const handleDropTask = (taskId, newStatus) => {
        
        setTasks((prevTasks) =>
            prevTasks.map((task)=>
                task.id === taskId
                ?  {
                    ...task,
                    status: newStatus
                }

                : task

            )
        );
    };

    return (
        <div className="kanban-page">
            <header className="kanban-header">
                <div>
                    <h1>
                        Kanban Board
                    </h1>

                    <p>
                        Used For Managing the Task
                    </p>
                </div>

                <button 
                className="add-task-btn"
                onClick={() => {
                    setEditingTask(null);
                    setShowForm(true)
                }}
                
                >
                    + Add Card
                
                </button>
 
            </header>

            <main className="kanban-main">
                <KanbanBoard
                     tasks={tasks}
                     onEdit={handleEditTask}
                     onDelete={handleDeleteTask}
                     onDrop={handleDropTask}
                
                    />

            </main>

            {showForm && (
                <TaskForm
                task={editingTask}
                onSave={handleSaveTask}
                onCancel = {()=> {
                    setShowForm(false);

                    setEditingTask(null);
                }}
                />
                
            )

            }

        </div>
    );
}

export default KanbanPage