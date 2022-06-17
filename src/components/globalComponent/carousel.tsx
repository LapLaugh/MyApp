import * as React from 'react'
import BaseComponent from 'src/utils/baseComponent';

const items = [
    {
        key: 0,
        className: 'item active',
        src: 'https://wallpaperaccess.com/full/3717842.png'
    },
    {
        key: 1,
        className: 'item',
        src: 'https://lovelytab.com/wp-content/uploads/2019/04/Summoners-War-Backgrounds.jpg'
    },
    // {
    //     key: 2,
    //     className: 'item',
    //     src: 'https://pbs.twimg.com/media/Cmw-cpeW8AA7pEN.jpg:large'
    // }
]

class Carousel extends BaseComponent<any> {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    {/* <li data-target="#myCarousel" data-slide-to="2"></li> */}
                </ol>

                <div className="carousel-inner">
                    {items.map((item) =>
                        <div key={item.key} className={item.className}>
                            <img className='center' src={item.src} />
                        </div>
                    )}
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel