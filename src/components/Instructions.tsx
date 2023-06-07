import React, { FC } from "react";

interface InstructProps {
	text: string;
}

const Instructions: FC<InstructProps> = ({ text }) => {
	return (
		<header className="instructions">
			<h3>{text}</h3>
		</header>
	);
};

export default Instructions;
