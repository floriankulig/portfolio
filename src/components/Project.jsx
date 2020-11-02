import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export const Project = ({ project }) => {
    const { title, desc, techStack, github, url, img } = project;
    return (
        <div className="project">
            {img && <img src={require(`../images/project-images/${img}`)} alt={title} />}
            <div className="project__desc">
                <h3 className="project__desc-title">{title}</h3>
                <p className="project__desc-info">{desc}</p>
                {techStack && techStack.map((tool, i) => (
                    <span key={i}>{tool}</span>
                ))}

                <ul className="project__desc-links">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </ul>
            </div>
        </div>
    );
};
