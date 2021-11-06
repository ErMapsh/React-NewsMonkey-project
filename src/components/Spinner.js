import React, { Component } from 'react'
import loading from "E:/study/code with harry/React js/newreactapp/src/loading.gif"

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loading} alt="loading" />
            </div>
        )
    }
}

