import React from 'react';
//IndexRoute: shown for paths defined by a parent but not the children
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
	</Route>
);