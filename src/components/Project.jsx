import React from "react";

export const Project = ({ project }) => {
    const { title, desc, techStack, github, url, img } = project;
    return (
        <>
            {/* {img && <img src={require(`../images/project-images/${img}`)} alt={title} />} */}
            <h3 className="project__title">{title}</h3>
            <p className="project__desc">{desc}</p>
            {techStack && techStack.map((tool, i) => (
                <span key={i}>{tool}</span>
            ))}
        </>
    );
};
