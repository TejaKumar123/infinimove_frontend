import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { useState } from "react"

const FaqAccordion = ({ detail, summary }) => {

	const [expanded, setExpanded] = useState(false);

	return (
		<div className="w-[100%] h-auto bg-service-border-linear p-[1px] rounded-[10px]">
			<Accordion
				sx={{ backgroundColor: expanded ? "white" : "#0b021c", borderRadius: "9px !important", transition: "0.2s" }}
				onChange={() => {
					setExpanded(!expanded);
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: expanded ? "#3D5AF1" : "white", fontSize: "140%", fontWeight: "bold" }} />}
					sx={{ padding: "5px 20px", fontWeight: "bold", fontSize: "140% !important", color: expanded ? "#3D5AF1" : "white" }}
				>
					{summary}
				</AccordionSummary>
				<hr className="border-[rgba(0,0,0,0.2)]" />
				<AccordionDetails
					className="text-[black] font-bold opacity-[0.7]"
				>
					{detail}
				</AccordionDetails>
			</Accordion>
		</div>
	)
}

export default FaqAccordion