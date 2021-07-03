import React from 'react'
import WidgetOptions from './WidgetOptions';
import "../css/Widget.css";

function Widget() {
    return (
        <div className="widget">
            <div className="widget_header">
                <h5>Additional Reading</h5>
            </div>

            <WidgetOptions />
        </div>
    );
}
export default Widget;