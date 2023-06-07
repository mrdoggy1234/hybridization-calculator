import Reset from "./Reset";
import AddPiBond from "./AddPiBond";
import React, { FC } from "react";

interface MenuProps {
	resetDisabled: boolean;
	addPiBondCallback: () => void;
	addPiBondDisabled: boolean;
	piBondCount: number;
}

const Menu: FC<MenuProps> = ({
	resetDisabled,
	addPiBondCallback,
	addPiBondDisabled,
	piBondCount,
}) => {
	return (
		<div className="menu">
			<Reset disabled={resetDisabled}></Reset>
			<AddPiBond
				callback={addPiBondCallback}
				disabled={addPiBondDisabled}
				piBondCount={piBondCount}
			></AddPiBond>
		</div>
	);
};

export default Menu;
