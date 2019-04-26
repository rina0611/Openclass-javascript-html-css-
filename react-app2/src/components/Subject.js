import React,{Component} from 'react';


class Subject extends Component{
    shouldComponentUpdate(prevProps,prevState){
        console.log(prevProps);
        return false;
    }
    render(){
      console.log('Subject render');
      return (
        <header>
          <h1><a onClick={
            function(_event){
              _event.preventDefault();
              this.props.onChangePage();
            }.bind(this)
          } href="/">{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      )
    }
  }

  export default Subject;