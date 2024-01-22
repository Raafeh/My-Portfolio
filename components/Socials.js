// links
import Link from "next/link";

// icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaFacebookF />
      </Link>
      
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaTwitter />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaInstagram />
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </Link>



    </div>

  );
};

export default Socials;
