export class Address {
  streetnumber: number;
  apartment: string;
  streetname: string;
  city: string;
  province: string;
  postalcode: string;
  country: string;
  constructor(args?) {
    if (args) {
      this.streetnumber = args.streetnumber;
      this.streetname = args.streetname;
      this.city = args.city;
      this.province = args.province;
      this.postalcode = args.postalcode;
      this.country = args.country;
    } else {
      this.streetnumber = null;
      this.streetname = '';
      this.city = args.city;
      this.province = '';
      this.postalcode = '';
      this.country = '';

    }

  }

}
