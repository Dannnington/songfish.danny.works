export default function Footer(props) {
    let className = "Util-Footer";
    return (
        <div className={className} style={props.style}>
            {props.children}
        </div>
    );
};