import React from 'react';
import './styles.css'


function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><input type="button" value="Menu 1"/></li>
                    <li><input type="button" value="Menu 2"/></li>
                    <li><input type="button" value="Menu 3"/></li>
                    <li><input type="button" value="Menu 4"/></li>
                    <li><input type="button" value="Menu 5"/></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;