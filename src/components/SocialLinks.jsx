import socialLinks from '../data/socialLinks';

const SocialLinks = () => (
    <ul>
        {socialLinks.map(link => (
            <li key={link.name} className="mb-6">
                <a className="border px-3 py-1 inline-block" href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                </a>
            </li>
        ))}
    </ul>
);

export default SocialLinks;
