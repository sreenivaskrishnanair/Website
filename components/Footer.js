import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
       <ul className="icons">
            <li><a href="https://www.linkedin.com/in/sreenivaskrishnanair">
              <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
            <li><a href="https://www.instagram.com/sreenivaskrishnanair/">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="https://github.com/sreenivaskrishnanair">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
