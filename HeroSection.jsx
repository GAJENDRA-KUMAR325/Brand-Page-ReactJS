const HeroSection = () => {
  return (
    <main className="hero">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST.</h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="hero-btn">
                <button className="shop">Shop Now</button>
                <button className="category">Category</button>
            </div>
            <div className="avaliable">
                <p>Also Avaliable On</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgje8OY0DXTOtuxOsqoKMKEV5ae4g33PEGmDxatg&s" alt="flipkart" className="flipkart" />
                <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="amazon" className="amazon" />
            </div>
        </div>
        <div className="hero-image">
            <img src="image.png" alt="shoe" />
        </div>
    </main>    
  )
}

export default HeroSection