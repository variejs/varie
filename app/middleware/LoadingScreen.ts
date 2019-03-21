import { injectable } from "inversify";
import HttpMiddlewareInterface from "varie/lib/http/interfaces/HttpMiddlewareInterface";

@injectable()
export default class Loading implements HttpMiddlewareInterface {
  private requestsCounter = 0;
  private $timeoutDelay = 1250;
  private spinnerTimeout = null;
  private spinnerId = "app-spinner";

  public request(config) {
    if (!this.spinnerTimeout) {
      this.spinnerTimeout = setTimeout(() => {
        this._turnOnSpinner();
      }, this.$timeoutDelay);
    }

    this.requestsCounter++;

    return config;
  }

  public response(response) {
    if (--this.requestsCounter === 0) {
      this._turnOffSpinner();
    }

    return response;
  }

  public responseError(error) {
    if (--this.requestsCounter === 0) {
      this._turnOffSpinner();
    }
    return error;
  }

  private _turnOnSpinner() {
    let spinnerElement = this._getSpinnerElement();

    if (!spinnerElement) {
      let spinner = document.createElement("div");
      spinner.id = this.spinnerId;
      spinner.classList.add("sk-container");

      let cube = document.createElement("div");
      cube.classList.add("sk-folding-cube");
      for (let i = 1; i <= 4; i++) {
        let cubePart = document.createElement("div");
        cubePart.classList.add(`sk-cube`);
        cubePart.classList.add(`sk-cube${i}`);
        cube.appendChild(cubePart);
      }
      spinner.appendChild(cube);

      document.body.appendChild(spinner);
    }
  }

  private _getSpinnerElement() {
    return document.getElementById(this.spinnerId);
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
