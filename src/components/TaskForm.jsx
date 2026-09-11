import React, { useState } from "react";

function TaskForm({ task, onSave, onCancel }) {

    const [formData, setFormData] = useState({
        id: task?.id || null,
        title: task?.title || "",
        description: task?.description || "",
        priority: task?.priority || "Medium",
        category: task?.category || "Development",
        dueDate: task?.dueDate || "",
        status: task?.status || "todo"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.title.trim()) {
            alert("Please enter a task title");
            return;
        }

        onSave(formData);
    };

    return (
        <div className="modal-overlay">

            <div className="task-form">

                <div className="form-header">

                    <h2>
                        {task ? "Edit Card" : "Create Card"}
                    </h2>

                    <button
                        className="close-btn"
                        onClick={onCancel}
                    >
                        ×
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Task Title</label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter task title"
                        />

                    </div>

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter task description"
                            rows="4"
                        />

                    </div>

                    <div className="form-row">

                        <div className="form-group">

                            <label>Priority</label>

                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                            >
                                <option value="Low">
                                    Low
                                </option>

                                <option value="Medium">
                                    Medium
                                </option>

                                <option value="High">
                                    High
                                </option>
                            </select>

                        </div>

                        <div className="form-group">

                            <label>Category</label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="Development">
                                    Development
                                </option>

                                <option value="Design">
                                    Design
                                </option>

                                <option value="Testing">
                                    Testing
                                </option>

                                <option value="Documentation">
                                    Documentation
                                </option>
                            </select>

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Due Date</label>

                        <input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-buttons">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            {task ? "Update Card" : "Create Card"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default TaskForm;