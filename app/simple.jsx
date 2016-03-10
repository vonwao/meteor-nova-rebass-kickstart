import {mount} from 'react-mounter';

const Comp = () => (
  <div>
    <b> App: </b>
    <a href="/">Home</a> |
    <a href="/new-post">New Post</a>
  </div>
);

FlowRouter.route('/simple', {
  name: 'app',
  action() {    
    mount(Comp);
  }
});

