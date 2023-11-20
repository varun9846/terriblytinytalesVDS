import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faEye, faHeart, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <div className="border">
        {/* NavBar  */}
          <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a href="https://www.terriblytinytales.com/" class="navbar-brand">
            S T O R I E S
            </a>
            <form class="d-flex">
              <button type="button" className="btn btn-warning fw-bold">Courses</button>
            </form>
          </div>
        </nav>

        {/* Content Div  */}
        <div class="row border">
          <div class="col-sm-8 border">
                <div id="cover_img"></div>
                <div class="d-flex justify-content-center" style={{}}>
                    <div id="profile_img" alt="profile"></div>
                    <div style={{marginLeft:'3%', marginTop:'3rem'}}>
                      <div style={{marginLeft:'8px'}}><h3>Arun Gosalia <FontAwesomeIcon icon={faCertificate} size="xs" color="darkblue"/></h3></div>
                      <div>
                          <div>
                            <button type="button" class="mx-2 mt-3 mb-2 btn btn-outline-secondary">6482</button>
                            <button type="button" class="mx-2 mt-3 mb-2 btn btn-outline-secondary">245</button>
                          </div>
                          <div>
                            <a href="/" style={{marginLeft:'1%', textDecoration:'none', color:'black'}}>Followers</a>
                            <a href="/" style={{marginLeft:'7%', textDecoration:'none', color:'black'}}>Following</a>
                          </div>
                      </div>
                    </div>
                </div>
                <div style={{marginBottom:'2rem', height:'100px'}} class="d-flex align-items-center flex-column bd-highlight">
                    <div class="bd-highlight" style={{fontSize:'1.2rem', marginTop:'20px'}}>Co-Founder & CEO at Terribly Tiny Tales</div>
                    <div class="bd-highlight" style={{marginTop:'10px', marginRight:'4rem'}}><a href="https://www.instagram.com/anujgosalia">http://www.instagram.com/anujgosalia</a></div>
                    <div class="bd-highlight" style={{marginTop:'10px', marginRight:'5rem'}}><FontAwesomeIcon icon={faStar} size="lg" color="cyan" style={{marginLeft:'10px', marginRight:'1px'}}/> 125 <FontAwesomeIcon icon={faThumbsUp} size="lg" color="Brown" style={{marginLeft:'10px', marginRight:'1px'}}/> 12 <FontAwesomeIcon icon={faEye} size="lg" color="grey" style={{marginLeft:'10px', marginRight:'1px'}}/> 57.8K <FontAwesomeIcon icon={faHeart} size="lg" color="red" style={{marginLeft:'10px'}}/> 26.0K</div>
                </div>
          </div>
          <div class="col-sm-4 border">
          <div class="text-center" style={{fontSize:'1.5rem', color:'darkblue', marginTop:'20px'}}><button type="button" class="btn btn-light btn-lg">134 Posts</button></div>
            <div class="card" style={{margin:'20px'}}>
              <div class="card-body">
                <div>
                  <span className="fw-bold" style={{fontSize:'25px'}}>A Changing World Order</span>
                  <span className="float-end"><FontAwesomeIcon icon={faThumbsUp} size="lg" color="darkblue"/></span>
                </div>
                <p class="card-text" style={{marginTop:'10px'}}>The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including...</p>
                <div class="float-start"><span style={{color:'skyblue'}}>musing</span> by anujgosalia</div>
                <div class="float-end">August 2</div>
              </div>
            </div>
            <div class="card" style={{margin:'20px'}}>
              <div class="card-body">
                <div>
                  <span className="fw-bold" style={{fontSize:'25px'}}>Indian v/s Australia</span>
                  <span className="float-end"><FontAwesomeIcon icon={faThumbsUp} size="lg" color="darkblue"/></span>
                 </div>
                <p class="card-text" style={{marginTop:'10px'}}>Think about it - this cricket series was akin to therapy. Laying our childhood trauma up top, working with it slowly and surely over two m...</p>
                <div class="float-start"><span style={{color:'skyblue'}}>thought</span> by anujgosalia</div>
                <div class="float-end">January 21</div>
                </div>
            </div>
            <div class="card" style={{margin:'20px'}}>
              <div class="card-body">
              <div>
                  <span className="fw-bold" style={{fontSize:'25px'}}>Write To Build</span>
                  <span className="float-end"><FontAwesomeIcon icon={faThumbsUp} size="lg" color="darkblue"/></span>
                </div>
                <p class="card-text" style={{marginTop:'10px'}}>Writing is the first step to create:
                <ul>
                  <li>stories</li>
                  <li>products</li>
                  <li>companies</li>
                </ul>
                </p>
                <div class="float-start"><span style={{color:'skyblue'}}>thought</span> by anujgosalia</div>
                <div class="float-end">November 18</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
