import {
  Application,
  DefaultTheme,
  Reflection,
  DeclarationReflection,
} from "typedoc";

function toStyleClass(str: string): string {
  return str
    .replace(/(\w)([A-Z])/g, (_m, m1, m2) => m1 + "-" + m2)
    .toLowerCase();
}

export class MethodTagFilterTheme extends DefaultTheme {
  getReflectionClasses(reflection: DeclarationReflection) {
    const classes = super.getReflectionClasses(reflection).split(" ");

    const filters = this.application.options.getValue(
      "visibilityFilters"
    ) as Record<string, boolean>;

    for (const key of Object.keys(filters)) {
      if (key.startsWith("@")) {
        if (key !== "@deprecated") {
          const className = toStyleClass(`tsd-is-${key.substring(1)}`);
          if (classes.includes(className)) continue;

          const hasTag = (ref: Reflection) =>
            ref.comment?.hasModifier(key as `@${string}`) ||
            ref.comment?.getTag(key as `@${string}`);
          const hasTagInSelf = hasTag(reflection);
          const hasTagInAllSignatures =
            !!reflection.signatures?.length &&
            reflection.signatures?.every((sig) => hasTag(sig));
          if (hasTagInSelf || hasTagInAllSignatures) {
            classes.push(className);
          }
        }
      }
    }

    return classes.join(" ");
  }
}

export function load(app: Application) {
  app.renderer.defineTheme("method-tag-filter", MethodTagFilterTheme);
}
