import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import './collection-preview.style.scss';


const CollectionPreview = ({title, items, routeName, match}) => {
    return(
    <div className="collection-preview">
        <h1 className="title"><Link to={`${match.path}/${routeName}`}>{title.toUpperCase()}</Link></h1>
        <div className="preview">
            {
                items
                .filter((item,idx) => idx < 4 )
                .map((item) => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
        </div>
    </div>
)}
export default withRouter(CollectionPreview);