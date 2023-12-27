type Nullable<T> = T | null;

class Widget {
  constructor() {
    console.log("Constructing new Widget...");
  }
}

interface IWidgetFactory {
  makeWidget(): Widget;
}

export class WidgetFactory implements IWidgetFactory {
  makeWidget() {
    return new Widget();
  }
}

export class SingletonDecorator implements IWidgetFactory {
  private factory: IWidgetFactory;
  private instance: Nullable<Widget> = null;

  constructor(factory: IWidgetFactory) {
    this.factory = factory;
  }

  makeWidget(): Widget {
    if (!this.instance) {
      this.instance = this.factory.makeWidget();
    }

    return this.instance;
  }
}

console.log("Normal Factory");
const factory = new WidgetFactory();
const w1 = factory.makeWidget();
const w2 = factory.makeWidget();

console.log();
console.log("Singleton");
const singleton = new SingletonDecorator(factory);
const w3 = singleton.makeWidget();
const w4 = singleton.makeWidget();
