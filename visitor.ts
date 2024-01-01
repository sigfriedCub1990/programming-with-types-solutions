interface Visitor {
  visitParagraph(paragraph: Paragraph): void;
  visitPicture(picture: Picture): void;
  vistTable(table: Table): void;
}

class Renderer implements Visitor {
  visitParagraph(paragraph: Paragraph): void {
    console.log("Renderer: I render a paragraph");
  }

  visitPicture(picture: Picture): void {
    console.log("Renderer: I render a picture");
  }

  vistTable(table: Table): void {
    console.log("Renderer: I render a table");
  }
}

class ScreenReader implements Visitor {
  visitParagraph(paragraph: Paragraph): void {
    console.log("ScreenReader: I read a paragraph");
  }

  visitPicture(picture: Picture): void {
    console.log("ScreenReader: I describe a picture");
  }

  vistTable(table: Table): void {
    console.log("ScreenReader: I describe a table");
  }
}

interface IDocument {
  accept(visitor: Visitor): void;
}

class Paragraph implements IDocument {
  accept(visitor: Visitor): void {
    visitor.visitParagraph(this);
  }
}
class Picture implements IDocument {
  accept(visitor: Visitor): void {
    visitor.visitPicture(this);
  }
}
class Table implements IDocument {
  accept(visitor: Visitor): void {
    visitor.vistTable(this);
  }
}

const renderer = new Renderer();
const screenReader = new ScreenReader();

const elements = [new Paragraph(), new Picture()];

for (const element of elements) {
  element.accept(renderer);
  element.accept(screenReader);
  console.log("=====");
}
