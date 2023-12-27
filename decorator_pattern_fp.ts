class Widget {
  constructor() {
    console.log("Building new Widget...");
  }
}

type WidgetFactory = () => Widget;

export const makeWidget = () => new Widget();

export const singletonDecorator = (factory: WidgetFactory) => {
  let instance: Widget;

  return () => {
    if (!instance) {
      instance = factory();
    }

    return instance;
  };
};

const loggingDecorator = (factory: WidgetFactory) => {
  return () => {
    console.log("Widget created");
    return factory();
  };
};

const factoryWithLogger = loggingDecorator(makeWidget);

factoryWithLogger();
factoryWithLogger();
factoryWithLogger();
