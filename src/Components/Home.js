
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image1 from './images/img-1.jpg';
import Image2 from './images/img-2.jpg';
import Image3 from './images/img-3.jpg';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
         
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={Image1} className="img-fluid" alt="..." />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={Image2} className="img-fluid" alt="..." />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img src={Image3} className="img-fluid" alt="..." />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container-fluid p-5">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-5">
                    <div className='col'>
                        <Card>
                            <Card.Img variant="top" src={Image3} />
                            <Card.Body>
                                <Card.Title>Modal</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="info" onClick={handleShow} className='stretched-link'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card>
                            <Card.Img variant="top" src={Image2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="info" className='stretched-link'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card>
                            <Card.Img variant="top" src={Image3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="info" className='stretched-link'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card>
                            <Card.Img variant="top" src={Image3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="info" className='stretched-link'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card>
                            <Card.Img variant="top" src={Image2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="info" className='stretched-link'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card>
                            <Card.Img variant="top" src={Image3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="info" className='stretched-link'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Home;