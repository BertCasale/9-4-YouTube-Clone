export default function Developer({ developerBio }) {
    return (
        <div className="developerCard">
            <div className="portraitContainer">
                <img className="developerPortrait" src={developerBio.picture} alt={`An image of ${developerBio.name.firstname} ${developerBio.name.lastname}}`} />
            </div>
            <div className="textContainer">
                <h2>{developerBio.name.firstname} {developerBio.name.lastname}</h2>
                <p>{developerBio.bio}</p>
                <p>{developerBio.github}</p>
            </div>
        </div>
    );
}