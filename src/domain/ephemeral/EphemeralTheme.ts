import { Model } from "@vlcn.io/model";
import { IID_of } from "../../id";
import { Theme } from "../schema";

export default class EphemeralTheme extends Model<Theme> {
  static defaultThemeId = 1n as IID_of<EphemeralTheme>;
  get id(): IID_of<Theme> {
    return this.data.id;
  }
  get name(): string | undefined {
    return this.data.name;
  }
  get bg_colorset(): string | undefined {
    return this.data.bg_colorset;
  }
  get fg_colorset(): string | undefined {
    return this.data.fg_colorset;
  }
  get fontset(): string | undefined {
    return this.data.fontset;
  }
  get surface_color(): string | undefined {
    return this.data.surface_color;
  }
  get slide_color(): string | undefined {
    return this.data.slide_color;
  }
  get font_color(): string | undefined {
    return this.data.font_color;
  }

  set<K extends keyof Theme>(k: K, v: Theme[K]): void {
    this.update({
      [k]: v,
    });
  }
}
