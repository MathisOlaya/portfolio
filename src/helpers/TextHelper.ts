class TextHelper {
  cutText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.slice(0, 25) + "...";
    }
    return text;
  }
}

export default new TextHelper();
