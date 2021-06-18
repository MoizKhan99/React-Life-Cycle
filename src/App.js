
import './App.css';
import { Component } from 'react';


// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       count : 0,
//       data : []
//     }
//     console.log("Constructor")
//   }
//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps")
//     return{
//       count : 5
//     }
//   }
  
//   componentDidMount(){
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then(response => response.json())
//   .then(data =>{
//     this.setState({
//       data : data
//     })
//   }
//   )
//   .catch(error => console.log(error))
//   }
//   render(){
//     console.log('Render')
//     return(
//       <div className='App'>
//         {this.state.data.map((v,i)=>{
//           return(
//           <h2>{v.title}</h2>
//           )
//         })}
//       </div>
//     )
//   }
// }

                                             //getDerivedStateFromProps

import Child from './child'

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       count : 0,
//     }
//     console.log("Constructor")
//   }
//   // static getDerivedStateFromProps(props , state){
//   //   console.log("getDerivedStateFromProps" , state)
//   //   return null
//   // }

//   render(){

//     return(
//       <div style={{textAlign : 'center'}}>
        // <Child count={this.state.count}/>
//         {/* <h1>{this.state.count}</h1> */}
//         <button onClick={()=> this.setState({count : this.state.count+1})}>Increment</button>
//         <button onClick={()=> this.setState({count : this.state.count-1})}>Decrement</button>
//       </div>
//     )
//   }
// }

                                 //shouldComponentUpdate

// class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       count : 0,
//     }
//   }

//   shouldComponentUpdate(){
//     // return false
//     if(this.state.count <5){
//       return true
//       }
//       else{
//       return false
//       }
//     }
//   render(){

//     return(
//       <div style={{textAlign : 'center'}}>
//         <h1>{this.state.count}</h1>
//         <button onClick={()=> this.setState({count : this.state.count+1})}>Increment</button>
//         <button onClick={()=> this.setState({count : this.state.count-1})}>Decrement</button>
//       </div>
//     )
//   }
// }

                                 //ComponentShouldUpdate

//   class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       count : 0,
//     }
//   }

//   getSnapshotBeforeUpdate(preProps , preState){
//     console.log("getSnapshotBeforeUpdate", preState)
//     return 10
//   }
//   componentDidUpdate(preProps , preState , snapShot){
//     console.log(snapShot)
//   }
//   render(){

//     return(
//       <div style={{textAlign : 'center'}}>
//         <h1>{this.state.count}</h1>
//         <button onClick={()=> this.setState({count : this.state.count+1})}>Increment</button>
//         <button onClick={()=> this.setState({count : this.state.count-1})}>Decrement</button>
//       </div>
//     )
//   }
// }

                                     //Component will unmount

  class App extends Component{
  constructor(){
    super()
    this.state = {
      count : 0,
    }
  }

  render(){

    return(
      <div style={{textAlign : 'center'}}>
        {/* <h1>{this.state.count}</h1> */}
        {this.state.count < 5 && <Child count={this.state.count}/>}
        <button onClick={()=> this.setState({count : this.state.count+1})}>Increment</button>
        <button onClick={()=> this.setState({count : this.state.count-1})}>Decrement</button>
      </div>
    )
  }
}


export default App;
