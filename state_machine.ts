type TextProcessingMode = "Text" | "Marker" | "Code";

class TextProcessor {
  private mode: TextProcessingMode;
  private result: Array<string>;
  private codeSample: Array<string>;

  constructor() {
    this.result = [];
    this.codeSample = [];
    this.mode = "Text";
  }

  processText(lines: Array<string>) {
    for (const line of lines) {
      this.processTextLine(line);
    }

    return this.result;
  }

  processLine(line: string) {
    switch (this.mode) {
      case "Text":
        this.processTextLine(line);
        break;
      case "Marker":
        this.processMarkerLine(line);
        break;
      case "Code":
        this.processCodeLine(line);
        break;
    }
  }

  processTextLine(line: string) {
    this.result.push(line);

    if (line.startsWith("<!--")) {
      this.loadCodeSample(line);

      this.mode = "Marker";
    }
  }

  processMarkerLine(line: string) {
    this.result.push(line);

    if (line.startsWith("```ts")) {
      this.result = this.result.concat(this.codeSample);

      this.mode = "Code";
    }
  }

  processCodeLine(line: string) {
    if (line.startsWith("```")) {
      this.result.push(line);
      this.mode = "Text";
    }
  }

  loadCodeSample(line: string) {
    // Load a code sample from disk based on the marker
  }
}
