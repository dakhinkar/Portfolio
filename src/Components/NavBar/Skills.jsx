
const Skills = ({ skill }) => {
    return (
        <section>
            <ul>
                {
                    skill.map((s, index) => {
                        return <li key={index.toString()}>{s}</li>
                    })
                }
            </ul>
        </section>
    );
}

export default Skills;