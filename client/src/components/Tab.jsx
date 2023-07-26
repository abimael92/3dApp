/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
	const snap = useSnapshot(state);

	const activeStyles =
		isFilterTab && isActiveTab
			? { backgroundColor: snap.color, opacity: 0.5 }
			: { backgroundColor: "transparent", opacity: 1 };

	return (
		<div
			key={tab.name}
			className={`tab-btn  ${
				isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
			}`}
			onClick={handleClick}
			style={activeStyles}
		>
			<figure
				className={` m-2 p-2 ${
					isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
				}`}
			>
				<img src={tab.icon} alt={tab.name} />
				<figcaption
					// className="absolute p-2 left-2/4 align-top italic text-transform: capitalize text-xs"
					className=" text-transform: capitalize text-xs text-center p-2 "
					// className="absolute p-2 left-2/4 italic text-transform: capitalize text-xs"
					style={{
						// textAlign: "right",

						fontSize: "1.5vh",
						fontFamily: "Serif",
						whiteSpace: "nowrap",
						textOverflow: "ellipsis",
						overflow: "hidden",
						// transform: "translateX(-50%)",
						color: getContrastingColor(snap.color),
					}}
				>
					{tab.title}
				</figcaption>
			</figure>
		</div>
	);
};

export default Tab;
