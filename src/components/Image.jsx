function Image(props) {
    return (
        <img className={props.className} src={props.src} alt={props.title} style={props.style} />
    )
}

export default Image