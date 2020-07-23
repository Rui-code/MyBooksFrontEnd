import React from 'react';
import './styles.css'


function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><input type="button" value="Lidos"/></li>
                    <li><input type="button" value="Para ler"/></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;