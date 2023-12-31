import React from 'react';
import "../styles/toolbar.scss"
import toolState from "../store/toolState";
const SettingBar = () => {
    return (
        <div className="setting-bar">
            <label htmlFor="line-width">Толщина линии</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                style={{margin: '0 10px'}}
                id="line-width" type="number"
                defaultValue={1} min={1} max={50}/>
            <label htmlFor="stroke-color" style={{marginRight: 7}}>Цвет обводки</label>
            <input id="stroke-color" onChange={e=>toolState.setFillStroke(e.target.value)} type="color"/>
        </div>
    );
};

export default SettingBar;