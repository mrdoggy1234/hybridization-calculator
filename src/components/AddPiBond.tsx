import React, { FC } from "react";

interface AddPiBondProps {
	callback: () => void;
	disabled: boolean;
	piBondCount: number;
}

const AddPiBond: FC<AddPiBondProps> = ({ callback, disabled, piBondCount }) => {
	return (
		<button className="menubtn" onClick={callback} disabled={disabled}>
			+ pi bond ({piBondCount})
		</button>
	);
};

export default AddPiBond;
