import { Dialog, Paper } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"
import ErrorAlert from "../ErrorAlert"

const QuestionForm = ({ open, onClose }) => {

	const formik = useFormik({
		initialValues: {
			question: ""
		},
		validationSchema: Yup.object({
			question: Yup.string().required("*required"),
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
				{/* <div className="w-[100%] min-h-[100px] border flex flex-row items-center justify-between">
					<img src={imageasset.logo1} />
					<div className="w-[65%] h-full border flex flex-col items-start justify-start gap-[10px]">
						<p className="text-[140%] text-[white]">INFINIMOVE</p>
						<p className="text-[white] text-[90%] break-words">If you're looking for cutting-edge software solutions and innovative mobile app development, you’ve come to the right place. At INfinimove, we turn your ideas into reality with technology that drives results.</p>

					</div>
				</div> */}
				<div className="w-[100%] h-[60px] rounded-[10px] bg-service-border-linear p-[1px]">
					<div className="w-[100%] min-h-[100%] bg-[#161C44] rounded-[9px] flex flex-row items-center justify-start px-[15px] py-[5px] gap-[20px]">
						<label className="text-[white] text-[120%]">QUESTION:</label>
						<input
							type="text"
							className="bg-transparent text-[white] border-b-[rgba(255,255,255,0.5)] border-b-[1px] outline-none w-full px-[5px] text-[110%]"
							autoFocus
							name="question"
							value={formik.values.question}
							onChange={formik.handleChange}
						/>
					</div>
					{formik.touched.question && formik.errors.question ? <ErrorAlert>{formik.errors.question}</ErrorAlert> : null}
				</div>
				<button
					type="submit"
					className="bg-gradient-to-r from-[#263286] to-[#3848C0F5] px-[20px] py-[7px] rounded-[15px] font-bold text-[120%] text-[white]"
				>
					Ask Question
				</button>
			</form>


		</Dialog>
	)
}

export default QuestionForm