import anime from 'animejs'
const ScrollMagic = require('scrollmagic');



function Skills() {
    const controller = new ScrollMagic.Controller();
    
    new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0.8, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
      })
        .on("progress", (scroll:object) => {
            anime({
                targets: '.language-icons',
                opacity:'1',
                easing:'easeInOutQuad',
              });
            var tl = anime.timeline({
                easing: 'linear'
              });
              
              tl.add({
                targets: '#progress-php',
                width: '80%',
                easing: 'linear',
              },)
              .add({
                targets: '#progress-js',
                width: '75%',
                easing: 'linear',
              },"-=500")
              .add({
                targets: '#progress-ruby',
                width: '50%',
                easing: 'linear',
              },"-=500")
              .add({
                targets: '#progress-unity',
                width: '72%',
                easing: 'linear',
              },"-=500")
              .add({
                targets: '#progress-react',
                width: '83%',
                easing: 'linear',
              },"-=500")
            
        })
        .addIndicators()
        .addTo(controller);
    return (
        <section id="about" className="page-section">
        <div className="container">
         
                <div className="text-content text-center">
                    <h2><b>My skills</b></h2>
                </div>
         
            <canvas className="secondbackground"></canvas>
            <div className="row">
                <div className="col-xs-2 text-center"><img src="img/php.png" className="language-icons"/></div>
                <div className="col-xs-10 progress">
                <div id="progress-php" className="progress-bar" role="progressbar" style={{width:0}} aria-valuenow={25}
                        aria-valuemin={0} aria-valuemax={100}></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 text-center"><img src="./img/js.png" className="language-icons"/></div>
                <div className="col-xs-10 progress">
                    <div id="progress-js" className="progress-bar" role="progressbar" style={{width: 0}} ></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 text-center"><img src="./img/ruby.png" className="language-icons"/></div>
                <div className="col-xs-10 progress">
                    <div id="progress-ruby" className="progress-bar" role="progressbar" style={{width: 0}} ></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 text-center"><img src="./img/unity.png" className="language-icons"/></div>
                <div className="col-xs-10 progress">
                    <div id="progress-unity" className="progress-bar" role="progressbar" style={{width: 0}} ></div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-xs-2 text-center"><img src="./img/react.png" className="language-icons"/></div>
                <div className="col-xs-10 progress">
                    <div id="progress-react" className="progress-bar" role="progressbar" style={{width: 0}}></div>
                </div>
            </div>
            
        </div>
    </section>
    )
}
export default Skills;