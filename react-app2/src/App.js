import React,{Component} from 'react';

class Subject extends Component{
  render(){
    return (
      <header>
          <h1><a href="" 
                  onClick={
                    function(_event){
                      _event.preventDefault();
                      {this.props.onChangePage()}
                    }.bind(this)
                  }>{this.props.title}</a></h1>
          {this.props.subtitle}
      </header>
    )
    }
  }

class TOC extends Component{
  render(){
    var tags=[];
    var con= this.props.data;
    var i=0;
    while(i<con.length){
      tags.push(<li key={con[i].id}><a href="" >{con[i].title}</a></li>)
      i=i+1
    }
    return (
      <nav>
        <ol>
          {tags}  
        </ol>
      </nav>
    )
  }
}
class Contents extends Component{
  render(){
    return (
      <article>
      <h2>{this.props.title}</h2>
        {this.props.subtitle}
      </article>
    )
  }
}
class App extends Component{

  state={
    contents:[{id:1, title:'HTML', desc:'HTML is...'},
              {id:2, title:'CSS', desc:'CSS is...'}],
    mode:'read' 
    }
  
  render(){
    var _atitle,_adesc=''
    if (this.state.mode==='welcome'){
        _atitle="Web"
        _adesc='Welcome'
    }else if(this.state.mode==='read'){
        _atitle="HTML"
        _adesc="HTML is"
    }
    
    return (
      <div className="App">
          <Subject title="World wide Web" subtitle="Welcome"
            onChangePage={function(){this.setState({mode:'welcome'})}.bind(this)}></Subject>
          
          <TOC data={this.state.contents}></TOC>
          <Contents title={_atitle} subtitle={_adesc}></Contents>
      </div>
    );
  }
}


export default App;
