import React from 'react'

const NewsItem = (props)=> {
  
  
    let {title, description,imgurl, newsurl, author,date,source}= props;
    return (
      <div className='my-3'>
        <div className="card" style={{width : "15rem"}}>
          <div style={
            {display:'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'}
          }>
          <span class=" badge rounded-pill bg-danger" > {source}</span>
          </div>
        
      <img src={!imgurl?"https://editorial.fxstreet.com/images/Markets/Currencies/Crosses/XAUUSD/gold-bar-and-dollar-bills-42586628_Large.jpg":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}</h5>
    <p className="card_text">{description}</p>
    <p className="card-text"><small class="text-body-secondary">By {author?author:"unknow"} on {new Date (date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl}  target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
