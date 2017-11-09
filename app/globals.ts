import { interfaces } from "inversify";
import Container = interfaces.Container;
import ConfigInterface from "@varie/config/ConfigInterface";

declare global {
  const $container: Container;
  const $config: ConfigInterface;
}
