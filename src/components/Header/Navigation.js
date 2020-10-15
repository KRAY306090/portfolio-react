import React from 'react';

function Navigation(props) {
    const links = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    return (
        <ul>
            {links.map(link => (
                <li key={link}>
                    <a
                    href={'#' + link.toLowerCase()}
                    onClick={() => props.handlePageChange(link)}
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Navigation;