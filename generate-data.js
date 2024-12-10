import { faker } from "@faker-js/faker";
import fs from "fs";

faker.location = { country: "VietNam" };
const randomCategories = (n) => {
  if (n <= 0) return [];
  const categoryList = [];
  for (let index = 0; index < n; index++) {
    const category = {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    categoryList.push(category);
  }
  return categoryList;
};

const randomProducts = (categories, n) => {
  if (categories.length == 0) return [];

  const productList = [];
  categories.forEach((category) => {
    for (let index = 0; index < n; index++) {
      const product = {
        categoryId: category.id,
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        color: faker.color.rgb(),
        price: faker.commerce.price(1, 100000),
        description: faker.lorem.paragraph(),
        image: faker.image.urlPicsumPhotos(400, 400),
        quantity: faker.number.int({ min: 1, max: 100 }),
        sold: faker.number.int({ min: 0, max: 100 }),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      productList.push(product);
    }
  });

  return productList;
};
// console.log(faker.string.uuid());
// console.log(faker.commerce.productName());
// console.log(faker.commerce.price());
// console.log(faker.commerce.department());
// console.log(faker.person.fullName());

const main = () => {
  const newImages = [
    "https://static.wixstatic.com/media/c837a6_0a6b6f919918476d9c579112fc64b5fe~mv2.jpg/v1/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0a6b6f919918476d9c579112fc64b5fe~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_46e62124f4fe4bfd8fa3061e0c815825~mv2.jpg/v1/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_46e62124f4fe4bfd8fa3061e0c815825~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_12bd9fd4c5f5452abbdf76f56512bec6~mv2.jpg/v1/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_12bd9fd4c5f5452abbdf76f56512bec6~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_748eb14417e049899f171bc21dd54995~mv2.jpg/v1/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_748eb14417e049899f171bc21dd54995~mv2.jpg",
    //body
    "https://static.wixstatic.com/media/c837a6_18b25862ad5c44a48fae2cb9b1fca635~mv2.jpg/v1/fill/w_515,h_515,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_18b25862ad5c44a48fae2cb9b1fca635~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_ac50ff82fef04861aef80706c7bc54c7~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_ac50ff82fef04861aef80706c7bc54c7~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_6184f9b7f44943fbb3abe9e55b704fbf~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_6184f9b7f44943fbb3abe9e55b704fbf~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_46e62124f4fe4bfd8fa3061e0c815825~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_46e62124f4fe4bfd8fa3061e0c815825~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_748eb14417e049899f171bc21dd54995~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_748eb14417e049899f171bc21dd54995~mv2.jpg",
    //home scents
    "https://static.wixstatic.com/media/c837a6_98cf3f42cb4c4d409ba452d677e022f9~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_98cf3f42cb4c4d409ba452d677e022f9~mv2.jpg",
    "https://static.wixstatic.com/media/84770f_1c0242e2e60441a3a9f3412b5e4ebc32~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_1c0242e2e60441a3a9f3412b5e4ebc32~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_3c0c11f2e9204d7c805b1922698fb602~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_3c0c11f2e9204d7c805b1922698fb602~mv2.jpg",
    "https://static.wixstatic.com/media/84770f_e926890b7203458eb3d1b6282878c5a4~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_e926890b7203458eb3d1b6282878c5a4~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_0a6b6f919918476d9c579112fc64b5fe~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0a6b6f919918476d9c579112fc64b5fe~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_12bd9fd4c5f5452abbdf76f56512bec6~mv2.jpg/v1/fill/w_330,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_12bd9fd4c5f5452abbdf76f56512bec6~mv2.jpg",
  ];
  const categories = randomCategories(3);
  console.log(categories);

  let productList = randomProducts(categories, 15);

  productList = productList.map((product, index) => {
    if (index < 4) {
      return {
        ...product,
        categoryId: 1, // Use category ID directly from the categories array
        image: newImages[index],
      };
    } else if (index >= 4 && index < 8) {
      return {
        ...product,
        categoryId: 2, // Use category ID directly from the categories array
        image: newImages[index],
      };
    } else if (index >= 8 && index < 15) {
      // Corrected range here
      return {
        ...product,
        categoryId: 3, // Use category ID directly from the categories array
        image: newImages[index],
      };
    } else {
      return {
        ...product,
      };
    }
  });

  console.log(productList);

  const newCategoryName = ["BEST SELLERS", "BODY", "HOME SCANTS"];
  const categorie = categories.map((category, index) => ({
    id: index + 1,
    name: newCategoryName[index],
    updatedAt: Date.now(),
  }));

  const db = {
    categories: categorie,
    products: productList,
    users: [],
    carts: [],
    orders: [],
  };

  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Đã lưu file vào thành công");
  });
};

main();
