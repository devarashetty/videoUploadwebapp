import React from 'react';

import { FlowRouter } from 'meteor/kadira:flow-router';

import MainLayout from '../../ui/layouts/MainLayout';

import HomeContainer from '../../ui/containers/HomeContainer';

import  {mount, withOptions} from 'react-mounter';

import Main from '../../ui/components/signin'

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, {
      content: <HomeContainer />
    });
  }
});

