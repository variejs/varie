export default class Loading {
  private timeoutSet = false;
  private spinnerTimeout = null;
  private requestsCounter = 0;

  public request(config: object) {
    if (this.timeoutSet === false) {
      this.spinnerTimeout = setTimeout(() => {
        this._turnOnSpinner();
      }, 1500);
      this.timeoutSet = true;
    }

    this.requestsCounter++;

    return config;
  }

  public response(response: object) {
    if (--this.requestsCounter === 0) {
      this._turnOffSpinner();
    }

    return response;
  }

  public responseError(error) {
    if (--this.requestsCounter === 0) {
      this._turnOffSpinner();
    }
    return Promise.reject(error);
  }

  private _turnOnSpinner() {
    let spinnerElement = this._getSpinnerElement();

    if (!spinnerElement) {
      document.body.innerHTML +=
        '<div id="spinner" class="sk-container">' +
        '<div class="sk-folding-cube">' +
        '  <div class="sk-cube1 sk-cube"></div>' +
        '  <div class="sk-cube2 sk-cube"></div>' +
        '  <div class="sk-cube4 sk-cube"></div>' +
        '  <div class="sk-cube3 sk-cube"></div>' +
        "</div>" +
        "</div>";
    }
  }

  private _getSpinnerElement() {
    return document.getElementById("spinner");
  }
  private _turnOffSpinner() {
    clearTimeout(this.spinnerTimeout);
    this.spinnerTimeout = null;
    let spinnerElement = this._getSpinnerElement();
    if (spinnerElement) {
      spinnerElement.remove();
    }
  }
}
