import Section from "./Section";

const AlertSection = ({ body }) => {
    return (
        <Section>
            <div className="max-w-xl mx-auto">
                <p>{body}</p>
            </div>
        </div>
    )
}

export default AlertSection
