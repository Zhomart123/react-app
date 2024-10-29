import Header from "../components/header/Header";

const Home = () => {
    return (
            <>
                <Header/>
                <main className="section">
          <div className="container">
    
                  <ul className="content-list">
                      <li className="content-list__item">
                          <h1 className="title-2">Frontend</h1>
                          <p>JavaScript, ReactJS, HTML, CSS</p>
                      </li>
                      
                  </ul>
    
          </div>
                </main>
            </>
    );
}

export default Home;