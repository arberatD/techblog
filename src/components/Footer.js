export default function Footer(props) {
    return (
        <footer style={{textAlign: 'center',
        border: "5px solid blue",
        padding: "1rem",
        margin: "2rem",
        display: "flex",
        justifyContent: "center",
        color: props.textColor,
        backgroundColor: props.bgColor
        }}>Hanshausen | Das hier ist nicht legal!</footer>
    )
}