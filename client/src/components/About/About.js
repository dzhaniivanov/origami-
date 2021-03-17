const About = ({
    match,
}) => {
    console.log(match);
    return (
        <main className='main-container'>
            <h1>About {match.params.name} page</h1>
        </main>
    )
}
export default About;