import {mount} from 'react-mounter';
//import Logo from './common/Logo.jsx';
import Layout from './demo/components/App.jsx';

const Comp = () => (
  <div>
    <b> App: </b>
    <a href="/">Home</a> |
    <a href="/new-post">New Post</a>
  </div>
);

FlowRouter.route('/app', {
  name: 'app',
  action() {
    mount(Layout);
  }
});



//import React from 'react';
//import {mount} from 'react-mounter';
//import Layout from './common/Layout.jsx';
//
//FlowRouter.route('/app', {
//  name: 'posts.list',
//  action(params, queryParams) {
//
//    mount(Layout)
//  }
//});