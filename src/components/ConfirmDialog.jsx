import Modal from "./Modal";
import Button from "./Button";

function ConfirmDialog({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirm Action",
    message = "Are you sure?"
}) {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={title}
        >

            <p>{message}</p>

            <div className="dialog-actions">

                <Button
                    variant="secondary"
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="danger"
                    onClick={onConfirm}
                >
                    Confirm
                </Button>

            </div>

        </Modal>
    );
}

export default ConfirmDialog;