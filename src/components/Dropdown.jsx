import { useState } from "react";

function Dropdown({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="dropdown-button"
            >
                Actions ▼
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    {children}
                </div>
            )}

        </div>
    );
}

export default Dropdown;