import React from 'react'

export default function Category(props) {
    return (
        <div className="col-md-6">
            <div className="category text-center">
                <h2 className="mb-4">{props.category}</h2>
                <a href="" className="btn btn-primary">Explore</a>
            </div>
        </div>
    )
}
