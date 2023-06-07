import React, { FC } from "react";

interface PTElementProps {
	atomicNumber: number;
	elemSymbol: string;
	elemName: string;
	elemStyle: React.CSSProperties;
	callback: (atomicNumber: number) => void;
	disabled: boolean;
}

const PTElement: FC<PTElementProps> = ({
	atomicNumber,
	elemSymbol,
	elemName,
	elemStyle,
	callback,
	disabled,
}) => {
	return (
		<button
			className="ptelement"
			style={elemStyle}
			onClick={() => callback(atomicNumber)}
			disabled={disabled}
		>
			<div className="atomicnumber">
				{atomicNumber}
				<br />
			</div>
			<div className="elemsymbol">
				{elemSymbol}
				<br />
			</div>
			<div className="elemname">{elemName}</div>
		</button>
	);
};

export default PTElement;
