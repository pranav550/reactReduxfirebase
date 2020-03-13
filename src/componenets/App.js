import React, { Component } from 'react';
// import { database } from '../firebase';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNotes } from '../actions/notesAction';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      notes: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    // database.on("value", snapshot => {
    //   this.setState({
    //     notes: snapshot.val()
    //   })
    // });

    this.props.getNotes();
  }

  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <div key="key">
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </div>
      )
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    console.log(note)
    // database.push(note)
    this.props.saveNotes(note)
    this.setState({
      title: '',
      body: ''
    })

  }

  render() {
    return (
      <div className="col-sm-6 offset-sm-3">
        <div className="container-fluid">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text"
                name="title"
                value={this.state.title}
                placeholder="title"
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <textarea type="text"
                name="body"
                value={this.state.body}
                placeholder="body"
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
            <button className="btn btn-primary btn-block">Save</button>
          </form>
          {this.renderNotes()}
        </div>

      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes, saveNotes })(App);