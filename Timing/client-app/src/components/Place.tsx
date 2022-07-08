import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Place(props: any): JSX.Element {
    return (
        <div className="place--container">
            <img src={props.imageUrl} className="place--img"/>
            <div className="place--info">
                <FontAwesomeIcon icon={faLocationDot} className="place--icon" />
                <span className="place--location">{props.location}</span>
                <a className="place--link" href={props.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <p className="place--date">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Place