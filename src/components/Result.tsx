import React, { FC } from "react";

interface ResultProps {
	res: string;
}

const Result: FC<ResultProps> = ({ res }) => {
	return (
		<header className="result">
			<h2>{res}</h2>
		</header>
	);
};

export default Result;
