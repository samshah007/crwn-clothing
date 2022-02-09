import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import './collection.style.scss';

const CollectionPage = ({collection:{title, items}}) => {
    return(
        <div className="collection-page">
            <h2 className="title">{title.toUpperCase()}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item}></CollectionItem>
                    ))
                }
            </div>
        </div>
        );
};
const mapStateToProps = (state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);