

const SwiperCard = ({ img, name, profession, feedback }) => {
	return (
		<div className="w-[300px] h-[150px] p-[10px] flex flex-col items-start justify-between bg-white rounded-[15px] border-[3px] border-[rgba(0,0,0,0.4)]">
			<p className="text-black text-[95%] font-bold">{feedback}</p>
			<div className="w-[100%] h-[35%] flex flex-row items-center justify-between">
				<div className="w-[20%] h-[100%] border-[red] flex items-center justify-start">
					<img src={img} className="h-[100%] rounded-[50%]" />
				</div>
				<div className="w-[75%] h-[100%] flex flex-col items-start justify-between">
					<p className="font-bold text-[black] text-[90%] opacity-[0.7]">{name}</p>
					<p className="text-[black] text-[90%] opacity-[0.5]">{profession}</p>
				</div>

			</div>
		</div>
	)
}

export default SwiperCard