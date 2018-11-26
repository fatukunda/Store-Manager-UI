const jsdom = require('jsdom')
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body>
<div class="login-form">
            <form action="submit" id="form-login">
                <input type="text" id="username" placeholder="Username"/>
                <input type="password" id="password" placeholder="Password"/>
                <button id="login-btn">Log In</button>
            </form>
        </div>
</body></html>`);
global.window = dom.window;
global.document = dom.window.document;

global.navigator = {
  userAgent: 'node.js'
};
const index = require('../../dist/index')


describe('Testing the login functionality', ()=>{
    it('should login in admin', (done)=>{
      const username = document.getElementById('username');
      const password = document.getElementById('password');
      expect(username).not.toBeNull;
      expect(password).not.toBeNull;
      const data = {access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1N…NzIn0.Hoqwudkrg1YpPkDeoxweGUBFCueGbPAAMPQ-a1t0c_U", user_type: "admin"}
      spyOn(index, "login").and.returnValue(Promise.resolve(data))

      index.login()
        .then((result) => {
          expect(index.loginInfo).toHaveBeenCalled()
          expect(result).toEqual(data)
          done();
        })
      
      
    })
  
  })