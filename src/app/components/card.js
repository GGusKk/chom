import Image from "next/image";

export default function Card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://line.me/R/ti/p/@278djxdt?ts=02222002&oat_content=url" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/img/1115.png"
                layout="responsive"
                width={500}
                height={300}
                alt="Phantasy Star Online 2 Landing Page"
                className="card-img-top"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">LINE OFFICIAL</h5>
              <p className="card-text">
                
              </p>
              <a href="https://line.me/R/ti/p/@278djxdt?ts=02222002&oat_content=url" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Click
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://www.facebook.com/profile.php?id=61573710261725" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/img/1116.png"
                layout="responsive"
                width={500}
                height={300}
                alt="Phantasy Star Online 2 New Genesis Steam"
                className="card-img-top"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">FACEBOOK OFFICIAL</h5>
              <p className="card-text">
               
              </p>
              <a href="https://www.facebook.com/profile.php?id=61573710261725" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Click
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4" >
  <div className="card">
    <a href="https://store.epicgames.com/th/p/phantasy-star-online-2" target="_blank" rel="noopener noreferrer">
      <img
        src="https://media1.giphy.com/media/kZqbBT64ECtjy/giphy.gif?cid=6c09b952ua1655blt74fqn8r9c4dj23nuq9p3jmm19b80t3k&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
        alt="Hello Kitty Pink GIF"
        className="card-img-top"
        style={{ width: '100%', height: 'auto' }}
      />
    </a>
  </div>
</div>


      </div>
    </div>
  );
}
