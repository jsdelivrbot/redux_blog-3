import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	//a lifecycle method - only called when the element is about to be mounted on the DOM
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
			<div className='text-xs-right'>
				<Link to='/posts/new' className='btn btn-primary'>
					Add a Post
				</Link>
			</div>
				List of Blog Posts
			</div>
		);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);