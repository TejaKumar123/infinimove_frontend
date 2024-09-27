import { Dialog, Paper } from "@mui/material"
import { useState } from "react"


const QuestionForm = ({ open, onClose }) => {


	return (
		<Dialog open={open} onClose={onClose} scroll={"body"}
			sx={{
				'& .MuiDialog-paper': {
					backgroundColor: 'transparent',
					borderRadius: '16px',
				},
			}}
		>
			<div className="w-[400px] min-h-[300px] bg-[#161C44] rounded-[16px] p-[20px]">
				<div className="w-[100%] h-[100px] border">

				</div>
			</div>


		</Dialog>
	)
}

export default QuestionForm