import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="border-2 border-black p-6 bg-white my-8 mx-auto rounded-md" style={{ maxWidth: '500px' }}>
            <h2 className="text-2xl font-semibold mb-4 border-b border-black pb-2">Contact</h2>
            <p className="mb-4">You can reach me via email or LinkedIn, or fill the form below to send a message directly.</p>
            <ul className="space-y-3 mb-6">
                <li>
                    <a
                        className="flex items-center gap-2 border border-black rounded-md px-4 py-2 text-center font-semibold hover:bg-black hover:text-white transition-colors justify-center"
                        href="mailto:luckychauhan.12w@gmail.com"
                    >
                        <FaEnvelope /> luckychauhan.12w@gmail.com
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center gap-2 border border-black rounded-md px-4 py-2 text-center font-semibold hover:bg-black hover:text-white transition-colors justify-center"
                        href="mailto:luckychauhan.dev@zohomail.in"
                    >
                        <FaEnvelope /> luckychauhan.dev@zohomail.in
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center gap-2 border border-black rounded-md px-4 py-2 text-center font-semibold hover:bg-black hover:text-white transition-colors justify-center"
                        href="https://www.linkedin.com/in/luckychauhandev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
