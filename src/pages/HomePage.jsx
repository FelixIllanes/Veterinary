import { useEffect, useState } from "react";
import Navbar from "../components/NavBar/navbar";
export default function HomePage(){

    return(
    <>
        <Navbar/>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/images/image1.webp" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="/images/image2.webp" class="d-block w-100" alt="..."/>
            </div>
        </div> 
        </div>
    </>


    )
}