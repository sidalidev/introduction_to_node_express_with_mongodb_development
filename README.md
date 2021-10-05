## 📱‍ The Project: Delivecrous

### The app

Feel free to change the subject, instead of Food you can take Pokemons, Street Fighter caracters. Anything that can help you have fun with the project is welcomed ❤️

You're going to work on the **Backend** of the designed **UI**

#### Mockups

Go [here](https://www.figma.com/file/ryU2PDYNX8y1yFd2QWX96V/DeliveCROUS?node-id=0%3A1)

##### Prototype

Go [Here](https://www.figma.com/proto/ryU2PDYNX8y1yFd2QWX96V/DeliveCROUS?node-id=5%3A3&viewport=230%2C361%2C0.3616926670074463&scaling=scale-down)

#### Functionalities

##### Menu Screen

- List the available dishes
- I can select a dish, which will add it to my shopping cart

##### Dish

A dish should have at least the following properties - Name - Description - Price - Allergens Feel free to add any information that you think will be helpful.

##### Dish Details Screen

Should show the details of a Dish in one Screen, or a Modal.

##### Shopping Cart Screen

- Lists all selected Dishes
- The user can unselect a Dish, which will remove it from the screen

##### Success Screen

- Simple success screen to tell the user that everything went fine

### Backend (Your JOB)

- Route for fetching available **Dishes**. e.g: `GET /dishes`
- Route to fetch a specific **Dish**. e.g: `GET /dish/1`

- Route to add/remove a dish into the **Cart**. e.g: `PUT /cart with { id: 1, name: 'Kebab', price: 21 }` or `POST /cart/1` / `DELETE /cart/1`. See: [Subdocuments](https://mongoosejs.com/docs/subdocs.html) for help
- Route to list **Cart** Items. e.g: `GET /cart`

- Route to finalize my choice with my address.

- The Challenge
  - User sign-in with JSON Web Token
  - Fetching dishes that contains a text

**YOU DO NOT** need to handle the view part, only `JSON` is required here.

### Your Report

After choosing your **Group** and **Finished your project**, you'll have to write a report of max **10 pages** which covers:

- Your conception
- Pros & Cons of using **Node** and **Express**
- Explain what you did in your **code** and **why**
- A Conclusion

You can also add your **Postman** testing requests by exporting it: see [Exporting a Postman collection](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-collections)

## You must send me

- A link to your (ACCESSIBLE !) Github Repository
- to
  - Email: **sidbentifraouine@gmail.com**
  - Subject: **FISA 3**

**DATE_TO_BE_DEFINED is the DEADLINE ❌**
