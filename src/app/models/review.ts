import construct = Reflect.construct;

export class Review {
  // region attribute
  author: number;
  rating: number;
  title: string;
  body: string;
  date: Date;
  // endregion

  constructor(args?) {
    if (args) {
      this.author = args.author;
      this.rating = args.rating;
      this.title = args.title;
      this.body = args.body;
      this.date = args.date;
    } else {
      this.author = null;
      this.rating = null;
      this.title = '';
      this.body = '';
      this.date = null;
    }
  }
}

