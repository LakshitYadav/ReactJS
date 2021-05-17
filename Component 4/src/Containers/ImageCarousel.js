import React, { Component } from "react";

class ImageCarousel extends Component {
    constructor() {
        super();
        this.urls = [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
        ];
        this.state = {
            currentIndex: 0
        };
    }
    onNext = () => {
        const { currentIndex } = this.state;
        const newPointer =
            currentIndex === this.urls.length - 1 ? 0 : currentIndex + 1;
        this.setState({ currentIndex: newPointer });
    };

    onPrevious = () => {
        const { currentIndex } = this.state;
        const newPointer =
            currentIndex === 0 ? this.urls.length - 1 : currentIndex - 1;
        this.setState({ currentIndex: newPointer });
    };

    render() {
        let prev = '<<';
        let next = '>>'
        return (
            <div className="container">
                <button
                    onClick={this.onPrevious.bind(this)}
                    className="carousel-previous-btn">{prev}
                </button>
                <img
                    src={this.urls[this.state.currentIndex]}
                    id="carouselItem"
                    alt="Carousel"
                />
                <button 
                    onClick={this.onNext.bind(this)} 
                    className="carousel-next-btn">{next}
                </button>
            </div>
        );
    }
}

export default ImageCarousel;