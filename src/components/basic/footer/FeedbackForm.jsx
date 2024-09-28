import { Dialog } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"
import ErrorAlert from "../ErrorAlert"

const FeedbackForm = ({ open, onClose }) => {

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			feedback: ""
		},
		validationSchema: Yup.object({
			name: Yup.string(),
			email: Yup.string().email("*invalid email").required("*required"),
			feedback: Yup.string().required("*required")
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		}
	})

	return (
		<Dialog open={open} onClose={onClose} scroll={"body"}
			sx={{
				'& .MuiDialog-paper': {
					backgroundColor: 'transparent',
					borderRadius: '16px',
					maxWidth: "600px",


				},
			}}
		>
			<form className="w-[100%] min-h-[100px] bg-[#161C44] rounded-[16px] p-[20px] flex flex-col items-center justify-start gap-[20px]" onSubmit={formik.handleSubmit}>
				<div className="w-[100%] h-[60px] rounded-[10px] bg-service-border-linear p-[1px]">
					<div className="w-[100%] min-h-[100%] bg-[#161C44] rounded-[9px] flex flex-row items-center justify-start px-[15px] py-[5px] gap-[20px]">
						<label className="text-[white] text-[120%] w-[120px]">NAME:</label>
						<input
							type="text"
							className="bg-transparent text-[white] border-b-[rgba(255,255,255,0.5)] border-b-[1px] outline-none w-full px-[5px] text-[105%]"
							autoFocus
							placeholder="Enter here"
							name="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
					{formik.touched.name && formik.errors.name ? <ErrorAlert>{formik.errors.name}</ErrorAlert> : null}
				</div>
				<div className="w-[100%] h-[60px] rounded-[10px] bg-service-border-linear p-[1px]">
					<div className="w-[100%] min-h-[100%] bg-[#161C44] rounded-[9px] flex flex-row items-center justify-start px-[15px] py-[5px] gap-[20px]">
						<label className="text-[white] text-[120%] w-[120px]">EMAIL ID:</label>
						<input
							type="email"
							className="bg-transparent text-[white] border-b-[rgba(255,255,255,0.5)] border-b-[1px] outline-none w-full px-[5px] text-[105%]"
							placeholder="Enter here"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
					{formik.touched.email && formik.errors.email ? <ErrorAlert>{formik.errors.email}</ErrorAlert> : null}
				</div>
				<div className="w-[100%] h-[200px] rounded-[10px] bg-service-border-linear p-[1px]">
					<div className="w-[100%] h-[100%] bg-[#161C44] rounded-[9px] flex flex-col items-start justify-start px-[15px] py-[15px] gap-[10px]">
						{/* <label className="text-[white] text-[120%]">FEEDBACK:</label> */}
						<textarea
							className="bg-transparent text-[white] outline-none w-full px-[5px] text-[105%] min-h-[100%] max-h-[100%] rounded-[5px] "
							name="feedback"
							placeholder="Enter your feedback here ..."
							value={formik.values.feedback}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						>
						</textarea>
					</div>
					{formik.touched.feedback && formik.errors.feedback ? <ErrorAlert>{formik.errors.feedback}</ErrorAlert> : null}
				</div>
				<button
					type="submit"
					className="bg-gradient-to-r from-[#263286] to-[#3848C0F5] px-[20px] py-[7px] rounded-[15px] font-bold text-[120%] text-[white]"
				>
					Send Feedback
				</button>
			</form>


		</Dialog>
	)
}

export default FeedbackForm