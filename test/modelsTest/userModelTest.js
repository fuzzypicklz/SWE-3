const assert = require('chai').assert;
const userModel = require('../../models/userModel');

describe('userModel', function(){
   it('user model should return hello', function(){
      assert.equal(userModel(), 'hello');
   });
});
