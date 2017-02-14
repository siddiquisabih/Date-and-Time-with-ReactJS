import React, { Component } from 'react';
class clock extends Component {
constructor(props){
super(props)
this.launchClock()
this.state = {
  date : 
    (new Date()).toLocaleString()

    

  
}

}

 launchClock() {
setInterval(() => {
console.log("Updating Clock")
this.setState({

date : (new Date()).toLocaleString()


})



},1000
)
}



render(){


console.log('rendering clock')
return <div> {this.state.date}</div>





}




}
// class clock extends React.Component {
// constructor(props) {
// super(props)
// this.launchClock() 
// this.state = {
// currentTime: (new Date()).toLocaleString() 
// }
// }
// launchClock() {
// setInterval(()=>{
// console.log('Updating time...')
// this.setState({
// currentTime: (new Date()).toLocaleString() 
// })
// }, 1000) 
// }
// render() {
// console.log('Rendering Clock...')
// return <div>{this.state.currentTime}</div> 
// }
// }



export default clock;