'use strict';

process.env.STORAGE = 'mongo';

const jwt = require('jsonwebtoken');

const { server } = require('../../.../src/app.js');
const supergoose = require('../../supergoose.js');

const mokRequest = supergoose.server(server);

let users ={
  admin: {username: 'admin', password: 'password1', role: 'admin'},
  editor: {username: 'editor', password: 'password2', role: 'editor'},
  user: {username: 'user', password: 'password3', role: 'user'},
 
}

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Auth Router', ()=> {
  //For admin, editor, user, etc
  // describe.each(Object.keys(users).map(role => [role]))(
  //   `Users with role '%s'`,
  //   (role) => {
  //     it('fails'), () ={
  //       throw 'Error';
  //     });

    }
  )
  
//})