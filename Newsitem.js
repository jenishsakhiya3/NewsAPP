import React, { PureComponent } from 'react'

export class Newsitem extends PureComponent {
  render() {
    let { title, decription, imageUrl, newsUrl, publishedAt, author,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://taisy0.com/wp-content/uploads/2022/03/applestoreicon2022.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"10%"}}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <h6 className="card-title">{title}</h6>
            <p className="card-text">{decription}</p>
            <a href={newsUrl} target="" className="btn btn-sm btn-secondary">Read More</a>
            <div className="card-footer" style={{ marginTop: "10px" }}>
              <small className="text-muted">By {author} on  {new Date(publishedAt).toGMTString()}</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
