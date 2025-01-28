import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12 ">
            <div className="flex align-center justify-center gap-10 text-xl text-center">
            <Link href={'/'}><i className="fab fa-facebook fa-2x"></i></Link>
            <Link href={'/'}><i className="fa-brands fa-twitter fa-2x"></i></Link>
            <Link href={'/'}><i className="fa-brands fa-instagram fa-2x"></i></Link>
            <Link href={'/'}><i className="fa-brands fa-linkedin fa-2x"></i></Link>
            </div>
          <p className="text-center  text-xs pt-8">© 2024 Music School. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer;