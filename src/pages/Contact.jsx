const Contact = () => (
    <section id="projects" className="border-2 border-black p-6 bg-white mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>You can reach me via email or LinkedIn.</p>
        <ul className="mt-2">
            <li>
                <a className="border px-3 py-1" href="mailto:your@email.com">your@email.com</a>
            </li>
            <li>
                <a className="border px-3 py-1" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </li>
        </ul>
    </section>
);

export default Contact;
