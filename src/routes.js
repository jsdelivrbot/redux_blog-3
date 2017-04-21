import React from 'react';
//IndexRoute: shown for paths defined by a parent but not the children
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path='posts/new' component={PostsNew} />
	</Route>
);