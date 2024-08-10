import  './Footer.css';


function Footer(){
    return(
<footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 TrombettasInc. All rights reserved. </p>
                <a href="https://github.com/betafalc2/mini-project-react-app">Link to Repo</a>
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;