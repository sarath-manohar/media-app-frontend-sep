import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

const navigateByUrl= useNavigate()

  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ textAlign: 'justify' }}>Welcome To <span className='text-warning'>Media Player </span> </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut distinctio rem dolor? Necessitatibus laborum ab, corrupti assumenda asperiores voluptate neque magnam illo, vitae optio officia facilis voluptas similique molestiae cupiditate.</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
        </Col>

        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>
    

    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column  ">
    <h3>Features</h3>
    <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100 ">
    <Card className='p-5 bg-info' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-5 bg-info' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>


    <Card className='p-5 bg-info' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

    </div>

<div className="container border rounded p-5 border-light mb-5 mt-5 d-flex align-items-center justify-content-between w-100 ">
  <div className=" col-lg-5">
    <h3 className='mb-3 text-warning'>Simple,Powerful & Fast</h3>
    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti vel earum! Voluptatibus aut laudantium unde veniam, facilis, ad nobis magnam eius asperiores fugit eligendi, amet velit mollitia incidunt autem.</h6>

    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti vel earum! Voluptatibus aut laudantium unde veniam, facilis, ad nobis magnam eius asperiores fugit eligendi, amet velit mollitia incidunt autem.</h6>

    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti vel earum! Voluptatibus aut laudantium unde veniam, facilis, ad nobis magnam eius asperiores fugit eligendi, amet velit mollitia incidunt autem.</h6>
  </div>
  <div className="video col-lg-5">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/1F3hm6MfR1k" title="JAILER - Hukum Lyric Video | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>



    </>
  )
}

export default LandingPage