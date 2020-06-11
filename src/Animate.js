import React from 'react';

class Animate extends React.Component {
    state = {
      person: 0,
      dy: 5,
      ball: 10,
      dx: 50
    };

    componentDidMount() {
      this.ticker = setInterval(() => {
        this.tick();
      }, 30);
      this.ticker = setInterval(() => {
        this.ballTick();
      }, 20);
      };

    componentDidUpdate(prevProps, prevState) {
      if (prevState.person > 200) {
        this.setState({
          dy: -5,
          person: 200, 
        });
      }
      if (prevState.person < 50) {
        console.log(prevState.person);
        this.setState({
          dy: 5,
          person: 50
        })
      }
      if (prevState.ball > 400) {
        this.setState({
          dx: -5,
          ball: 400,
        })
      }
      if (prevState.ball < 150 ) {
        this.setState({
          dx: 5,
          ball: 150,
        })
      }
    }

    tick () {
      const { person, dy } = this.state;
      const newPerson = person + dy;
      this.setState({
        person: newPerson,
      });
    }

    ballTick () {
      const { ball, dx } = this.state;
      const newBall = ball + dx;
      this.setState({
        ball: newBall,
      })
    }

    render () {
      const { person, ball } = this.state;
      const rp = person % 255
      const gp = (person * 1.3) % 255
      const bp = (person * 2.3) % 255
      const rb = ball % 255
      const gb = (ball * 1.7) % 255
      const bb = (ball * 2.1) % 255
      const rgbp = `rgb(${rp}, ${gp}, ${bp})`
      const rgbb = `rgb(${rb}, ${gb}, ${bb})`
    return( 
      <div  >
         <div style={{...personHead, top: person}}></div>
        <div style={{...personBody, top: person, background: rgbp}}></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{...trippin, left: ( 500 + ball), background: rgbb }}></div>
        <div style={{...trampoline}} ></div>
      </div>
    );
  }
}

const pHeight = 100;
const pWidth = 35;
const ballSize = 40;
const trippin = {
  position:"relative",
  // margin: `auto 0px auto 0px`,
  // background: "blue",
  borderRadius: "100%",
  height: `${ballSize}px`,
  width: `${ballSize}px`,
}
const personBody= {
  position: "relative",
  borderRadius: "25%",
  width: `${pWidth}px`,
  height: `${pHeight}px`,
  // background: "purple",
  margin: `0px auto 0px auto`,
}
const personHead = {
 position: "relative",
  borderRadius: `100%`,
  width: "35px",
  height: "35px",
  background: "tan",
  margin: `0px auto 0px auto`


}
const trampoline = {
  position: "relative",
  background: "black",
  width: "500px",
  height: "20px",
  margin: `0px auto 0px auto`,
 
}
export default Animate; 