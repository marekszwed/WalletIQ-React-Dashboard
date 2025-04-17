import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = {
	success: (message: string) => toast.success(message),
	info: (message: string) => toast.info(message),
	warning: (message: string) => toast.warning(message),
	error: (message: string) => toast.error(message),
};

export default Toast;
