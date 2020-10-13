import React from 'react';
import axios from 'axios';


import './App.css';

class App extends React.Component {

  state = {
    title: '',
    author: '',
    type: '',
    pages: 0,
    volume: 0,
    method: '',
    participants: '',
    year: 2020,
    field_1: 'title',
    field_2: 'any',
    field_3: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };


  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      author: this.state.author,
      type: this.state.type,
      pages: this.state.pages,
      volume: this.state.volume,
      method: this.state.method,
      participants: this.state.participants,
      year: this.state.year
    };
    
    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        //this.getBlogPost();
        alert("Success!");
      })
      .catch(() => {
        console.log('Internal server error');
      });
  };

  search = (event) => {
    event.preventDefault();
    axios.get('/api/search'.concat('/',this.state.field_1,'/',this.state.field_2,'/',this.state.field_3))
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });

        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };


  findall = (event) => {
    event.preventDefault();
    this.getBlogPost();
  };


  resetUserInputs = () => {
    this.setState({
      title: '',
      author: '',
      type: '',
      pages: 0,
      volume: 0,
      method: '',
      participants: '',
      year: 0
    });
  };


  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <p>{post.title}</p>
        <p>{post.author}</p>
        <p>{post.type}</p>
        <p>{post.pages}</p>
        <p>{post.volume}</p>
        <p>{post.method}</p>
        <p>{post.participants}</p>
        <p>{post.year}</p>
      </div>
    ));
  };


  render() {

    console.log('State: ', this.state);

    //JSX
    return(

      <div className="app">
        <h2>snack Submission</h2>
        
        <form onSubmit={this.submit}>
          
          <div className="form-input">
            <input 
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="author"
              placeholder="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="type"
              placeholder="type"
              value={this.state.type}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="pages"
              placeholder="pages"
              value={this.state.pages}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="volume"
              placeholder="volume"
              value={this.state.volume}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="method"
              placeholder="method"
              value={this.state.method}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="participants"
              placeholder="participants"
              value={this.state.participants}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="year"
              placeholder="year"
              value={this.state.year}
              onChange={this.handleChange}
            />
          </div>

          <button>Submit</button>
        </form>



        <form onSubmit={this.search}>
          
          <div className="form-input">
            <label for="field_1">Choose a type for search:</label>
            <select id="field_1" name="field_1" type="field_1" value={this.state.field_1} onChange={this.handleChange}>
              <option value="title">title</option>
              <option value="author">author</option>
              <option value="type">type</option>
              <option value="pages">pages</option>
              <option value="volume">volume</option>
              <option value="method">method</option>
              <option value="participants">participants</option>
              <option value="year">year</option>

            </select>
            
          </div>

          <div className="form-input">
          <label for="field_2">Choose operator for search:</label>
            <select id="field_2" name="field_2" type="field_2" value={this.state.field_2} onChange={this.handleChange}>
              <option value="any">any</option>
              <option value="contains">contains</option>
              <option value="is">is</option>
              <option value="greater">greater</option>
              <option value="smaller">smaller</option>

            </select>
          </div>

          <div className="form-input">
            <input 
              type="field_3"
              name="field_3"
              placeholder="information here"
              value={this.state.field_3}
              onChange={this.handleChange}
            />
          </div>

          <button>search</button>
        </form>


        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>

      </div>
    );
  };
}


export default App;