import React, { Component } from 'react'
import Items from '../components/Items'
import { connect } from 'react-redux'
import * as actions from '../actions/ItemPageActions'

class ItemPageContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {
        this.props.initLoad()
    }

    render() {
        return(
            <Items {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items.listItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListItem())
        },
        addItem: (data) => {
            dispatch(actions.addItem(data))
            //data gasn vafo payload
        },
        updateDispatch: (data) => {
            dispatch(actions.updateItem(data))
        },
        deleteDispatch: (data) => {
            dispatch(actions.deleteItem(data))
        },
        searchDispatch: (data) => {
            dispatch(actions.searchItem(data))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)