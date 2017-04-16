import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

//matches '/' route to the App component
export default (
	<Route path="/" component={App} />
)
