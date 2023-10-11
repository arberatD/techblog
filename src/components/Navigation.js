import Button from "@/components/Button"

export default function Navigation(props) {
    return (
        <div>
            <div
                style={{
                    border: "5px solid blue",
                    padding: "1rem", // 16px,
                    display: "flex",
                    justifyContent: "center",
                    color: props.textColor,
                    backgroundColor: props.bgColor
                }}>
                <Button href="/" buttonText="Home" />
                <Button href= "/navigation" buttonText="Navigation"/>
                <Button href= "/main" buttonText="Main"/>
                <Button href= "/footer" buttonText="Footer"/>
                <Button href="https://www.linkedin.com/in/arberat-dushi/" buttonText="LinkedIn" />
                <Button href="https://github.com/arberatD" buttonText="Github" />
            </div>
        </div>
    )
}