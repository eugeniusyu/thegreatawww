import React from 'react';
import {Route} from 'react-router';
import {
    App,
    Home,
    Projects,
    Project,
    About,
    Contact,
    NotFound,
  } from 'containers';

const staticData = {
  Projects: {
    alice: {
      title: 'alice title',
      description: 'alice description',
      metadata: {
        icons: [],
        link: 'alice link'
      }
    }
  }
};

export default (store) => {
  return (
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/projects/:name" component={Project} data={staticData.Projects}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
