import { interfaces } from "inversify";
import Container = interfaces.Container;
import ConfigInterface from "varie/lib/config/ConfigInterface";

/*
|--------------------------------------------------------------------------
| App Globals
|--------------------------------------------------------------------------
| We have a few globals that the framework sets by default
|
*/

declare global {
  const $container: Container;
  const $config: ConfigInterface;
}
