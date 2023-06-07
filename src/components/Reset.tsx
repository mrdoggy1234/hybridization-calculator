import React, { FC } from "react";

function onResetClick() {
	window.location.reload();
	return false;
}

interface ResetProps {
	disabled: boolean;
}

const Reset: FC<ResetProps> = ({ disabled }) => {
	return (
		<button className="menubtn" onClick={onResetClick} disabled={disabled}>
			Reset
		</button>
	);
};

export default Reset;
