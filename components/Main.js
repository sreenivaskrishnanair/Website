import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'



class Main extends React.Component {
  render() {
    //personalwebsitesree

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/profile.jpg" alt="" /></span>
          <p style={{ textAlign: "justify" }}>
            <ul>
              <li>I’m an undergraduate student at the University of Wisconsin – Madison, double majoring in Computer Science and Computer Engineering. I expect to graduate in May 2022.</li>
              <li>I have been learning full-stack web development in the MERN (Mongo Express React Node) stack environment. I have learned numerous real-word problem-solving skills by implementing full-stack web enterprise projects. I am confident that I can make meaningful contributions to your company.</li>
              <li>I am incredibly passionate about solving complicated, impactful real-world problems using the power of deep learning and artificial intelligence. To broaden my knowledge, I have been doing the Deep-Leanring.AI course under Dr. Andrew Ng in addition to my college course work. I expect to finish the course by December 2020. Like, Dr. Andrew said, “Artificial Intelligence is the new Electricity.”</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Skills</h2>
          {/* <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span> */}
          <p>
            <ul>
              <li><b>Programing Languages: </b>Java, C, C++, SQL, R, JavaScript, python, Dart</li>
              <li><b>Frameworks: </b>React.js, Express, Node, Next.js, GraphQl, ROS (Robot Operating System in C), MATLAB, Android Visual Studio, Flutter, Solid Work, Octave</li>
              <li><b>Databases: </b> Mongo DB(proficient), MySQL(introductory)</li>
              <li><b>API's: </b> RestAPI</li>
              <li><b>Platforms: </b> Heroku, Vercel, Postman, Gatsby</li>
              <li><b>Headless CMS:</b> Prismic, Strapi</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none', backgroundColor: 'transparent' }}>

          <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Lane-Detection</h2>
            <span className="image main"><img src="/static/images/projects/lane.png" alt="" /></span>
            <p style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Simple Algortithm for lane detection in any image and videos. Uses pyhton and OpenCV library to implement functionality. Description of algorithm: breaks down video into frames - processes each frame individually. Converts each frame inmage into gray scale - smoothens out the image - uses Hough Transforms for getting egde image. - isolates area of interest (lanes) - averages out the lane lines and demarcates the lane.
            </p>
            <p>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Python: Algorithm was written in python</li>
                <li>OpenCV library: was utilized for frame by frame image manipulation</li>
              </ul>
            </p>
          </article>
          <br />
          <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Social Network</h2>
            <span className="image main"><img src="/static/images/projects/model.png" alt="" /></span>
            <p style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Full stack web platform that models social media platforms. Uses the MERN stack model to organize the platform. Full social media user experience with user to user chat, cookies, sessions, user to global feed, selective access, etc.(under-development deployement phase)
            </p>
            <p>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>React.js: Front-end UI</li>
                <li>Express: Back-End business Logic</li>
                <li>MongoDB: NoSQL database for storing user information</li>
                <li>Node.js: used to achieve backend implementation</li>
                <li>Passport.js, MailChimp, etc..... : Several NPM technologies for acheiving full user experience like cookies, session, user to user chat, user to global chat, etc</li>
              </ul>
            </p>
          </article>
          <br />
          <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Cat or not</h2>
            <span className="image main"><img src="/static/images/projects/cat.png" alt="" /></span>
            <p style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Deep learning linear regression Algorithm for detecting if given image is of a cat or not. Takes in a large data set of learning images and decides if the givem image is of a cat or not
            </p>
            <p>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Python: Algorithm was written in python</li>
                <li>Jupyter Notebook: algortim written in jupyter</li>
              </ul>
            </p>
          </article>
          <br />
          <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Farm Data - Analyzer</h2>
            <span className="image main"><img src="/static/images/projects/farm.png" alt="" /></span>
            <p style={{ textAlign: "justify" }}><b>Project Description:</b><br />
              <b>Java</b> application for conducting analysis on the milk data for several farms across the US. The application takes in milk production data of several farms as a CSV file and conducts analytics. It displays yield, tracks change acroos time and generates various reports.
            </p>
            <p>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Java 13: Implemented Java Stream to filter and manipulate large data.</li>
                <li>JavaFX : Used to create UI</li>
              </ul>
            </p>
          </article>
          <br />
          <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Personal Website</h2>
            <span className="image main"><img src="/static/images/projects/website.png" alt="" /></span>
            <p style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Personal Portfolio website for displaying projects and provide an easy way to contact me. Implemented a static website using Next.js, Vercel and Prismic. GraphQl used to retrieve data from Prismic. Used SCSS to implement visual effects.
            </p>
            <p>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Next.js: to automate static splitting and rendering</li>
                <li>Graphql: for database queries from Prismic </li>
                <li>React.js</li>
                <li>Prismic: used as a headless CMS</li>
                <li>Vercel: Deployment service</li>
                <li>SCSS: Visual effect rendering</li>
                <li>EmailJS: set up email service</li>
              </ul>
            </p>
          </article>
          <br />


          {close}
        </article>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Resume</h2>
          {/* <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close} */}
          <iframe src="../static/resume.pdf" width="100%" height="740rem"/>
          {close}
        </article>

        <article id="certifications" className={`${this.props.article === 'certifications' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Certifications</h2>
          <p>
            <ul>
              <li>SQL, Stanford University (Lagunita)</li>
              <li>The Complete 2020 Web Development Course (Udemy)</li>
              <li>The Complete Strapi Course (Udemy)</li>
              <li>Deep Learning Specialization, Stanford University (Andrew NG) expected-Dec2020</li>
            </ul>
          </p>
          {close}
        </article>



        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
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
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main