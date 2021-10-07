export default function Centre(props) {
    let className = "Util-Centre-Contain";
    if (props.column) className = "Util-Centre-Contain-Column";
    return (
        <div className={className}>
            {props.children}
        </div>
    );
};