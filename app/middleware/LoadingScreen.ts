import { injectable } from "inversify";
import { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import AxiosHttpMiddlewareInterface from "varie/lib/http/AxiosHttpMiddlewareInterface";

@injectable()
export default class Loading implements AxiosHttpMiddlewareInterface {
  private timeoutSet = false;
  private spinnerTimeout = null;
  private requestsCounter = 0;
  private spinnerId = "app-spinner";

  public request(config: AxiosRequestConfig) {
    if (this.timeoutSet === false) {
      this.spinnerTimeout = setTimeout(() => {
        this._turnOnSpinner();
      }, 1500);
      this.timeoutSet = true;
    }

    this.requestsCounter++;

    return config;
  }

  public response(response: AxiosResponse) {
    if (--this.requestsCounter === 0) {
      this._turnOffSpinner();
    }

    return response;
  }

  public responseError(error: AxiosError) {
    if (--this.requestsCounter === 0) {
      this._turnOffSpinner();
    }
    return Promise.reject(error);
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
