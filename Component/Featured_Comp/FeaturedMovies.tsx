import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Featured.module.scss'
// splide
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import image_1 from '../../public/asset/image_1.jpg';

function FeaturedMovies() {
    
    
  return (
    <>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        </Head>
        <main className={styles.main_container} >
        <Carousel>
            <Carousel.Item interval={1000}>
                <Image
                src={image_1}
                width='300px'
                height='300px'
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
            />
            <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
            />
            <Carousel.Caption>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </main>
    </>
  )
}

export default FeaturedMovies