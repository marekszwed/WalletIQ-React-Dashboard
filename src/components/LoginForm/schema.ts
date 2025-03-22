import * as yup from "yup";

export const validationSchema = (isRegisterForm: boolean) => {
	return yup.object({
		email: yup.string().email("invalid email").required("Email is required"),
		password: yup
			.string()
			.required("Password is required")
			.min(6)
			.typeError("Password must have min. 6 signs"),
		firstName: yup.string().when([], {
			is: isRegisterForm,
			then: (schema) => schema.required("First name is required"),
			otherwise: (schema) => schema.notRequired(),
		}),
		surname: yup.string().when([], {
			is: isRegisterForm,
			then: (schema) => schema.required("Last name is required"),
			otherwise: (schema) => schema.notRequired(),
		}),
		confirmPassword: yup
			.string()
			.when("password", (password, schema) =>
				isRegisterForm && password
					? schema
							.oneOf([password?.[0]], "Password do not match")
							.required("Field cannot be empty")
					: schema.notRequired()
			),
	});
};
