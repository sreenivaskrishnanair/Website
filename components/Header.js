import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <img className="logo" src="../static/images/logo.png" alt="Italian Trulli"></img>
            {/* <span className="icon fa-diamond"></span>
            <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
        </div>
        <div className="content">
            <div className="inner">
                <h1>sreenivas krishna nair</h1>
                <p>Student at <a href="https://www.wisc.edu">UW - Madison</a> majoring in Computer science and
                computer engineering.  <br />Excited to explore oppurtunites in full stack development and Deep learning.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('skills') }}>skills</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('projects') }}>projects</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('resume') }}>resume</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('certifications') }}>certifications </a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
