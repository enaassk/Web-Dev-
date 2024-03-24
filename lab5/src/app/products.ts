export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  photo: string;
  rating: number;
  category: string;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'IPhone XR',
    price: 216974,
    description: 'Apple iPhone Xr is the epitome of beauty and intelligence.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h29/63943986774046.jpg?format=preview-large',
    rating: 5,
    category: 'Smart-Techno',
    like: 0
  },
  {
    id: 2,
    name: 'IPhone 13 Mini',
    price: 414050,
    description: 'Apple iPhone 13 mini has a 5.4-inch Super Retina XDR display that features incredibly high pixel density—photos, videos, and text look amazingly clear.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-512gb-zelenyi-104184124/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h76/64946073468958.jpg?format=preview-large',
    rating: 4,
    category: 'Smart-Techno',
    like: 0
  },
  {
    id: 3,
    name: 'IPhone SE',
    price: 233995,
    description: 'Apple iPhone SE 2022 classic design with powerful hardware. Thanks to the 4.7-inch Retina HD display, the smartphone will easily fit even in your pocket.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium',
    rating : 3,
    category: 'Smart-Techno',
    like: 0
  },
  {
    id: 4,
    name: 'IPhone 15 Pro Max',
    price: 619410,
    description: 'Apple iPhone 15 Pro Max is a super-durable flagship made of titanium.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    rating: 4,
    category: 'Smart-Techno',
    like: 0
  },
  {
    id: 5,
    name: 'Phone 15 Pro',
    price: 549372,
    description: 'Apple iPhone 15 Pro Max is a super-durable flagship made of titanium.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-belyi-114790416/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h21/84557784645662.jpg?format=preview-large',
    rating: 4,
    category: 'Smart-Techno',
    like: 0
  },
  {
    id: 6,
    name: 'Phone 15',
    price: 382411,
    description: 'A great phone with one of the best cameras',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-dual-sim-rozovyi-113933635/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h52/84205863469086.png?format=preview-large',
    rating: 5,
    category: 'Smart-Techno',
    like: 0
  },
  {
    id: 7,
    name: 'MacBook Air 13 M1',
    price: 415785,
    description: 'Small chip. A huge breakthrough. The first chip designed specifically for the Mac.',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=preview-large',
    rating: 5,
    category: 'Laptop',
    like: 0

  },
  {
    id: 8,
    name: 'MacBook Air 13 M2',
    price: 549990,
    description: 'Small chip. A huge breakthrough. The first chip designed specifically for the Mac.',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=preview-large',
    rating: 5,
    category: 'Laptop',
    like: 0
  },
  {
    id: 9,
    name: 'MacBook Pro 16',
    price: 1449950,
    description: 'Small chip. A huge breakthrough. The first chip designed specifically for the Mac.',
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-mnw93-seryi-108645788/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/heb/68378829062174.jpg?format=preview-large',
    rating: 5,
    category: 'Laptop',
    like: 0
  },
  {
    id: 10,
    name: 'MacBook Pro 14',
    price: 979318,
    description: 'Small chip. A huge breakthrough. The first chip designed specifically for the Mac.',
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-mphe3-seryi-108645925/?c=750000000',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h95/68379275755550.jpg?format=preview-large',
    rating: 5,
    category: 'Laptop',
    like: 0
  },
  {
    id: 16,
    name: 'Laptop ASUS X515EA-BQ1189W 90NB0TY1-M25390 grey',
    price: 900,
    description: 'A very convenient and good laptop for work.',
    url: 'https://kaspi.kz/shop/p/asus-x515ea-bq1189w-90nb0ty1-m25390-seryi-105321625/?c=750000000#!/item',
    rating: 4,
    photo:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/hca/51563452956702/asus-asus-x515ea-i3-1115g4-8gb-256ssd-15-6-win11-x515ea-bq1189w-x515ea-bq1189w-seryj-105321625-1.jpg',
    category: 'Laptop',
    like: 0
  },
  {
    id: 12,
    name: 'Cooking Chief KENWOOD',
    price: 649990,
    description: 'no need to cook',
    url: 'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hc8/33543472480286/kenwood-kcl95-004si-cooking-chef-xl-serebristyj-100883789-1-Container.jpg',
    rating: 5,
    category: "House",
    like: 0
  },
  {
    id: 13,
    name: 'LUXVISAGE Lip Volumizer Hot Vanilla Lip Gloss Brown 304 Caramel',
    price: 20,
    description: 'Lip gloss plumper LIP volumizer hot vanilla plumper creates a temporary effect of increasing the volume of the lips.',
    url: 'https://kaspi.kz/shop/p/luxvisage-lip-volumizer-hot-vanilla-blesk-dlja-gub-korichnevyi-304-caramel-102827970/?c=750000000#!/item',
    rating: 4,
    photo:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/h4f/47076161454110/luxvisage-blesk-dla-uvelicenia-ob-ema-gub-304-caramel-102827970-1.jpg',
    category: "Cosmetics",
    like: 0
  },
   {
    id: 14,
    name: 'Samsung DV90T8240SX/LP Drying Machine Black',
    price: 950,
    description:
        'Dry things easier and more efficiently with the intelligent AI panel. Personalized drying cycles remember your preferences and display relevant information.',
    url: 'https://kaspi.kz/shop/p/samsung-dv90t8240sx-lp-chernyi-101247218/?c=750000000#!/item',
    rating: 3,
    photo:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hca/33713306042398/samsung-dv90t8240sx-lp-cernyj-101247218-1.jpg',
    category: 'House',
    like: 0
  },
  {
    id: 15,
    name: 'Dyson V8 Motorhead Vacuum Cleaner Silver',
    price: 70,
    description: 'Silver vertical comfortable cleaner',
    url: 'https://kaspi.kz/shop/p/dyson-v8-motorhead-serebristyi-100403973/?c=750000000#!/item',
    rating: 5,
    photo:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h62/32379949121566/dyson-v8-motorhead-serebristyj-100403973-1.jpg',
    category: 'House',
    like: 0
  },
  {
    id: 13,
    name: 'Dishwasher Bosch SMS44DI01T silver',
    price: 70,
    description: 'Let it wash your dishes instead of you',
    url: 'https://kaspi.kz/shop/p/bosch-sms44di01t-serebristyi-103948041/?c=750000000#!/item',
    rating: 5,
    photo:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/ha1/49097882075166/bosch-sms44di01t-serebristyj-103948041-1.jpg',
    category: 'House',
    like: 0
  },


  {
    id: 16,
    name: 'LUXVISAGE Dragon Glass 3D Volume Lip Gloss Transparent Transparent',
    price: 900,
    description:
        'Mirror glossy gloss visually increases the volume of the lips, makes them fuller and moisturized.',
    url: 'https://kaspi.kz/shop/p/luxvisage-dragon-glass-3d-volume-blesk-dlja-gub-prozrachnyi-prozrachnyi-103377724/?c=750000000#!/item',
    rating: 2,
    photo:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h40/48133471731742/prozracnyj-blesk-dla-gub-dragon-glass-3d-volume-103377724-3.jpg',
    category: 'Cosmetics',
    like: 0
  },
  {
    id: 17,
    name: 'The Ordinary Niacinamide 10%+Zinc 1% Serum 30 ml',
    price: 40,
    description:
        'From the first applications, the result is visible. Dries inflammation.',
    url: 'https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/?c=750000000#!/item',
    rating: 5,
    photo:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h46/33287291764766/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-3.jpg',
    category: 'Cosmetics',
    like: 0
  },
  {
    id: 18,
    name: 'Dr.Ceuracle Pro Balance Biotics Moisturizer Cream 100 ml',
    price: 190,
    description:
        'This moisturizer has ingredients identical to the skin that mimic skin secretions, moisturizes the skin, and also has the function of retaining moisture.',
    url: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-biotics-moisturizer-krem-100-ml-100675870/?c=750000000#!/item',
    rating: 3,
    photo:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h5e/49917534175262/dr-ceuracle-krem-dla-lica-pro-balance-biotics-moisturizer-100-ml-100675870-2.jpg',
    category: 'Cosmetics',
    like: 0
  },
  {
    id: 19,
    name: 'MEDI-PEEL Luxury 24K Gold Ampoules Serum 100 ml',
    price: 20,
    description:
        'The product tightens the skin and strengthens the contours of the face, has a lifting effect and increases the elasticity of the skin.',
    url: 'https://kaspi.kz/shop/p/medi-peel-luxury-24k-gold-ampoule-syvorotka-100-ml-100375778/?c=750000000#!/item',
    rating: 5,
    photo:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h03/49884106752030/medi-peel-luxury-24k-gold-ampoule-syvorotka-100-ml-100375778-2.jpg',
    category: 'Cosmetics',
    like: 0
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/