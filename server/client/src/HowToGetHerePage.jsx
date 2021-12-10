import './css/HowToGetHere.css';

const HowToGetHerePage = () => {
    return ( 
        <>
       
        <div class="container">
           <div id="row1"><h2 id="getHereTitle" class=" mt-5 mb-5">Getting Here</h2></div>
  <div id="row2" class="row mb-5">
    <div class="col-sm-8 text-light"><p>8th Floor <br />
St James Buildings <br />
79 Oxford Street <br />
Manchester <br />
M1 6FQ</p></div>
    <div class="col-sm-4"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.735306473237!2d-2.243680331284754!3d53.4755387448454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1bf943ad609%3A0x6f54f566e8d28339!2sQA%20Ltd%20-%20Manchester%20(Oxford%20Street)!5e0!3m2!1sen!2suk!4v1639052448774!5m2!1sen!2suk" style={{width:"400", height:"300", border:"0"}}  allowfullscreen="" loading="lazy"></iframe></div>
  </div>
  <div id="row3" class="row mb-5">
            <div class="col-sm"><img src="data:image/jpeg;base64,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" alt="image of the cinema" /></div>
            
    <div class="col-sm text-light"><p>The cinema is located across the road from the Great Bridgewater Street bus stop and a five minute walk from Manchester Oxford Street Train Station. <br /> Parking Facilities are available directly across the road from the cinema at NCP Car Park. <br /> Local Bus Routes: 44, 50, 191, 197, 751 </p></div>
    <div class="col-sm"><img class="interiorCinema" src="https://theknow-old.denverpost.com/wp-content/uploads/2019/08/TDP-L-FOUR-D-X-MOVIE-THEATER_JAC0863x.jpg" alt="interior cinema" /></div>
          </div>

      
</div>
        </>
     );
}
 
export default HowToGetHerePage;