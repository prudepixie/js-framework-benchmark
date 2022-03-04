import { Behavior, Binding, ExecutionContext, TargetedHTMLDirective } from "@microsoft/fast-element";

export class OneTimeViewBinding implements Behavior {
  private binding: Binding;

  constructor(directive: OneTimeDirective, private target: Node) { 
    this.binding = directive.binding;
  }

  bind(source: unknown, context: ExecutionContext): void {
    this.updateTarget(this.binding(source, context));
  }

  unbind(): void { }

  updateTarget(value: any): void {
    if (value === null || value === undefined) {
      value = "";
    }

    if (value.create) {

    } else {
        const view = (this.target as any).$fastView;

        if (view !== void 0 && view.isComposed) {

        }

        this.target.textContent = value;
    }
  }
}

class OneTimeDirective extends TargetedHTMLDirective {
  targetName: string | undefined;

  constructor(public readonly binding: Binding) {
    super();
  }

  createBehavior(target: Node): Behavior {
    return new OneTimeViewBinding(this, target);
  }

  public targetAtContent(): void {}
}

export function oneTime(binding: Binding) {
  return new OneTimeDirective(binding);
}