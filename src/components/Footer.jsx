import React from "react";
import "../styles/footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div class="footer-basic">
      <footer>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">About</a>
          </li>
          <li class="list-inline-item">&mdash;</li>
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">&mdash;</li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="list-inline-item">&mdash;</li>
          <li class="list-inline-item">
            <a href="">
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
