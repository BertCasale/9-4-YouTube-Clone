export default function Developer({developerBio}) {
    return (
        <div>
            <img className="developerPicture" src={developerBio.picture} alt={`An image of ${developerBio.name.firstname} ${developerBio.name.lastname}}`} />
            <h3>{developerBio.name.firstname} {developerBio.name.lastname}</h3>
            <p>{developerBio.bio}</p>
            <p>{developerBio.github}</p>
        </div>
    );
}