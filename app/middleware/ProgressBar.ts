import NProgress from 'nprogress';
export default class ProgressBar {
  private requestsCounter = 0;

  constructor() {
    NProgress.configure({ easing: 'ease', speed: 500 });
  }

  public request(config: object) {
    if(this.requestsCounter++ === 0) {
      NProgress.start()
    }
    return config;
  }

  public response(response: object) {
    if (--this.requestsCounter === 0) {
      NProgress.done()
    }
    return response;
  }

  public responseError(error) {
    if (--this.requestsCounter === 0) {
    }
    return Promise.reject(error);
  }
}
