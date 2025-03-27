import * as yup from "yup";

export const registerSchema = yup.object({
	firstName: yup.string().required("First name is required"),
	surname: yup.string().required("Last name is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup
		.string()
		.required("Email is required")
		.min(6)
		.typeError("Password must have min. 6 signs"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords must match")
		.required("Confirm Password is required"),
});
