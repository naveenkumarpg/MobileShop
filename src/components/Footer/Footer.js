import React, {Component} from 'react';
import renderHTML from 'react-render-html';

import Labels from '../../Labels/labels';
export default class extends Component {
    render(){
        return (
            <div className="container text-center">
                <div className="separator"></div>
                { renderHTML (Labels.disclaimer) }
                <div className="separator"></div>
            </div>
        )
    }
}