export default function Main(props){
    return (
        <h1 style={{textAlign: 'center',
        border: "5px solid blue",
        padding: "1rem",
        margin: "2rem",
        display: "flex",
        justifyContent: "center",
        color: props.textColor,
        backgroundColor: props.bgColor}}>TechBlog</h1>
    )
}

