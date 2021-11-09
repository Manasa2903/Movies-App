import "./Carousel.css"

const Carousel = () =>
{
    return (
        
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active indicator" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="indicator" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="indicator" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="indicator" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="indicator" aria-label="Slide 5"></button>
          </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TomorrowWarReviews/382ef414-c61c-4bf9-b3cd-d09facdfbba0._UR3000,600_SX1500_FMwebp_.jpeg" id="image1" className="d-block w-100" alt="poster"/>
          </div>
          <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TomAndJerryNonPD/7de8004d-c7c8-4769-8652-3405bdc82f49._UR3000,600_SX1500_FMwebp_.jpeg" className="d-block w-100" alt="poster"/>
          </div>
          <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_JaiBhim_Hindi_IMDb96/f1164976-dde4-4e4e-8c71-ae95f692ac60._UR3000,600_SX1500_FMwebp_.jpeg" className="d-block w-100" alt="poster"/>
          </div>
          <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TenetReviews/7f2b6c50-484f-4b7c-a9fd-1bef190854f6._UR3000,600_SX1500_FMwebp_.jpeg" className="d-block w-100" alt="poster"/>
          </div>
          <div className="carousel-item">
            <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WonderWomen84Launch/2a4fd577-c5a6-483c-a910-23afbc2ba9f7._UR3000,600_SX1500_FMwebp_.jpeg" className="d-block w-100" alt="poster"/>
          </div>
        </div>
          <button className="carousel-control-prev" id = "prev-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            
          </button>
          <button className="carousel-control-next" id = "prev-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            
          </button>
        </div>
    )
}

export default Carousel