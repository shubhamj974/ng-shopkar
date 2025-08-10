export interface CategoryItem {
  id: number;
  label: string;
  imageUrl: string;
  link: string;
  subcategories?: {
    id: number;
    label: string;
    link: string;
    children: Array<any>;
    showDropdown: boolean;
  }[];
  showDropdown?: boolean;
}

export const CATEGORY_MENU: CategoryItem[] = [
  {
    id: 10,
    label: '',
    imageUrl: ' ',
    link: '',
    subcategories: [],
    showDropdown: false,
  },
  {
    id: 2,
    label: 'Minutes',
    imageUrl:
      'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/a22a213ca6221b65.png?q=100',
    link: '/flipkart-minutes-store',
    showDropdown: false,
  },
  {
    id: 3,
    label: 'Mobiles & Tablets',
    imageUrl:
      'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100',
    link: '',
    subcategories: [],
    showDropdown: false,
  },
  {
    id: 1,
    label: 'Fashion',
    imageUrl:
      'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100',
    link: '/fashion',
    subcategories: [
      {
        id: 1,
        label: "Men's Top Wear",
        link: '/fashion/men',
        children: [
          { id: 1, label: 'T-Shirts', link: '/fashion/men/tshirts' },
          { id: 2, label: 'Shirts', link: '/fashion/men/shirts' },
        ],
        showDropdown: false,
      },
      {
        id: 2,
        label: "Men's Bottom Wear",
        link: '/fashion/women',
        children: [],
        showDropdown: false,
      },
      {
        id: 3,
        label: 'Women Ethnic',
        link: '/fashion/women',
        children: [],
        showDropdown: false,
      },
    ],
    showDropdown: false,
  },
  {
    id: 4,
    label: 'Electronics',
    imageUrl:
      'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100',
    link: '',
    showDropdown: false,
    subcategories: [],
  },
  {
    id: 5,
    label: 'Home & Furniture',
    imageUrl:
      'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100',
    link: '',
    subcategories: [],
    showDropdown: false,
  },
  {
    id: 6,
    label: 'TVs & Appliances',
    imageUrl:
      'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100',
    link: '',
    subcategories: [],
    showDropdown: false,
  },
  {
    id: 7,
    label: 'Flight Bookings',
    imageUrl:
      'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100',
    link: '',
    subcategories: [],
    showDropdown: false,
  },
  {
    id: 8,
    label: 'Beauty, Food...',
    imageUrl:
      'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100',
    link: '',
    subcategories: [],
    showDropdown: false,
  },
  {
    id: 9,
    label: 'Grocery',
    imageUrl:
      'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100',
    link: '',
    subcategories: [],
    showDropdown: false,
  },
  {
    id: 11,
    label: '',
    imageUrl: ' ',
    link: '',
    subcategories: [],
    showDropdown: false,
  },
];
