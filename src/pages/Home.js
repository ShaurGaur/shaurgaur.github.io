import * as React from "react";
import IconButton from "../components/IconButton";

const Home = () => {
    return (
        <div class="home" width="100%">
            <h1 class="name">Shaurya Gaur</h1>
            <p class="subtitle">
                MSc Candidate, Societal Impact of AI
            </p>
            <p class="subtitle">
                Radboud University Nijmegen
            </p>
            <div>
                {[
                    {
                        name: "Email",
                        style: "fas fa-envelope-open-text",
                        to: "mailto:shauryavrat@live.com",
                    },
                    {
                        name: "Resume",
                        style: "fas fa-file-invoice",
                        to: "./resume.pdf",
                    },
                    {
                        name: "GitHub",
                        style: "fab fa-github",
                        to: "https://github.com/shaurgaur",
                    },
                    {
                        name: "LinkedIn",
                        style: "fab fa-linkedin-in",
                        to: "https://linkedin.com/in/shaurgaur",
                    },
                ].map((elem) => IconButton(elem.name, elem.style, elem.to))}
            </div>
        </div>
    );
};

export default Home;
