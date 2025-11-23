class DateHelper {
  getTime(date: Date): String {
    return `${date.getHours()}:${date.getMinutes()}`;
  }
}

export default new DateHelper();
