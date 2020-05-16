import React,{Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state={
		Avatar: [], 
		searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
	 	.then(response => response.json())
  		.then(json =>{this.setState({Avatar:json})})
  	}

	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
		}

	render(){
		const{Avatar,searchfield}=this.state;
		const filterAvatar=Avatar.filter(eachAvatar=>{
		return eachAvatar.name.toLowerCase().includes(searchfield.toLowerCase())
		})
	return !Avatar.length ?
		<h1 className='tc'>loading...</h1> :
	(
		<div className='tc'>
			<h1 className='f1 pa0 br-pill '>ROBOLY</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<ErrorBoundary>
			<CardList Avatar={filterAvatar}/>
			</ErrorBoundary>
			</Scroll>
		</div>

		);
}
}
export default App;