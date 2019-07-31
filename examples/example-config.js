class ExampleConfig {
  constructor() {
    this.users = [
      {username: 'Public', password: null},
      {username: 'alice@authcov.io', password: 'password'},
      {username: 'bob@authcov.io', password: 'password'},
      {username: 'celine@authcov.io', password: 'password'}
    ];
    this.authorisationHeaders = ['authorization'];
    this.baseUrl = 'http://localhost';
    this.saveResponses = false;
    this.buttonXPath = 'button';
  }

  async loginFunction(tab, username, password){
    console.log(`Logging in as ${username}...`);
    await tab.goto('http://localhost/login');
    await tab.waitForSelector('input[name=email]');
    await tab.waitForSelector('input[name=password]');
    await tab.waitFor(1000);

    await tab.type('input[name=email]', username);
    await tab.type('input[name=password]', password);

    await tab.tap('#login-button')
    await tab.waitFor(1000);

    return;
  }

  ignoreApiRequest(url, method) {
    if(url.includes('http://localhost/sockjs-node')){
      return true;
    }

    return false;
  }

  ignoreButton(outerHTML) {
    if(outerHTML.includes('submit') || outerHTML.includes('Save')) {
      return true;
    }

    return false;
  }

  //TODO: Add authorised checking function here
}

module.exports = ExampleConfig;
