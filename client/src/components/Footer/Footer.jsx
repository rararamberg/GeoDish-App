import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="team-socials">
        <div className="paul-social">
          <p>Paul</p>
          <a
            href="https://github.com/paulo0513"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/paul-oh-92365912a/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="alejandro-social">
          <p>Alejandro</p>
          <a href="https://github.com/abzl" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
        <div className="rachel-social">
          <p>Rachel</p>
          <a
            href="https://github.com/rararamberg"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rachelramberg/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="copyright-year">
        <p style={{ fontWeight: "bold" }}>© GA SEI LOON 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
