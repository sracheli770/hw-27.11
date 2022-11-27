function About(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <img src={props.img} alt="about" />
            <p>{props.para}</p>
        </>
    )
}

export default About