import Reset from "./Reset";
import AddPiBond from "./AddPiBond";

const Menu = ({resetDisabled, addPiBondCallback, addPiBondDisabled, piBondCount}) =>
{
    return (
        <div className="menu">
            <Reset disabled={resetDisabled}></Reset>
            <AddPiBond callback={addPiBondCallback} disabled={addPiBondDisabled} piBondCount={piBondCount}></AddPiBond>
        </div>
    )
}

export default Menu;
