import React, { FC } from "react";

interface HeaderProps {
	text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
	return (
		<header className="header">
			<h1>{text}</h1>
		</header>
	);
};

export default Header;
