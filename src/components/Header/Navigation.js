import React from 'react';

function Navigation(props) {
    const links = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    return (
        <ul className="nav justify-content-center">
            {links.map(link => (
                <li className="nav-item px-3" key={link}>
                    <a
                    href={'#' + link.toLowerCase()}
                    onClick={() => props.handlePageChange(link)}
                    className={
                        props.currentPage === link ? 'nav-link active' : 'nav-link'
                    }
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Navigation;