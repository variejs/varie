import ConfigInterface from "varie/lib/config/ConfigInterface";
import ApplicationInterface from "varie/lib/foundation/ApplicationInterface";

/*
|--------------------------------------------------------------------------
| App Globals
|--------------------------------------------------------------------------
| We have a few globals that the framework sets by default
|
*/

declare global {
  const $config: ConfigInterface;
  const $app: ApplicationInterface;

  type AnyClass = { new (): any };
}
