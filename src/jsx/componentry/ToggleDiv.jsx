export default function ToggleDiv(props) {
    let style = { visibility: "visible", display: "block" };
    if (props.disabled === true) style = { visibility: "hidden", display: "none" };
    return (
        <div style={style}>
            {props.children}
        </div>
    );
};