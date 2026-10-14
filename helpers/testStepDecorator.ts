import { test } from '@playwright/test';

/**
 * This function will gave to us the exacty method that brokes our test adding the tag @step
 * @param target 
 * @param context 
 * @returns 
 */
export function step(target: Function, context: ClassMethodDecoratorContext) {
  return function replacementMethod(this: any, ...args: any) {
    const name = this.constructor.name + '.' + (context.name as string);
    return test.step(name, async () => {
      return await target.call(this, ...args);
    });
  };
}
