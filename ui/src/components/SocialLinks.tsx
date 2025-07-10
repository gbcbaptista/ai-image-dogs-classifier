import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = () => {
  return (
    <div className="flex justify-center sm:justify-start space-x-4">
      <a
        href="https://www.linkedin.com/in/gabriel-baptista-70a3bb1a0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-primary text-2xl lg:text-3xl transition-all duration-300 hover:text-accent hover:scale-125"
      >
        <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 lg:w-8 lg:h-8" />
      </a>
      <a
        href="https://github.com/gbcbaptista"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-primary text-2xl lg:text-3xl transition-all duration-300 hover:text-accent hover:scale-125"
      >
        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 lg:w-8 lg:h-8" />
      </a>
    </div>
  );
};

export default SocialLinks;
