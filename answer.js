import inquirer from "inquirer";
import customerCart from "./customerCart.js";
import { addMoreItemsQuestions, confirmCartQuestions } from "./questions.js";

// this controls what we do with answers we got from the users

export default async function answer(question) {
  const cart = await (async function input(question) {
    // the below lines is where we update the customer's cart based on the input (answers) they provide
    const answers = await inquirer.prompt(question);
    const item = {};

    if (!answers.interest) return "Thanks for contacting Us";

    item.items = answers.products.name;
    item.qty = answers.amount;
    item.subtotal = answers.products.costInNaira * answers.amount;
    item.interest = answers.interest;
    // we use this if block to recursively call this function this done so that user can add more items to the cart
    if (answers.moreItems) {
      await input(addMoreItemsQuestions);
      // We use the below details of each item is added to the cart, if the user clicks yes
      customerCart.push(item);
    } else {
      customerCart.push(item);
    }

    return customerCart;
  })(question);

  if (!cart[0].interest) {
    console.log("Thanks for contacting us");
    return;
  }

  const totalPrice = cart.map((a) => a.subtotal).reduce((a, b) => a + b);
  cart.push({ totalPrice });

  console.log(cart);
  await ask(confirmCartQuestions, totalPrice);
  // We display this cart to the user for confirmation
  console.log(cart);
}

async function ask(questions, totalPrice) {
  const answers = await inquirer.prompt(questions);

  if (answers.amountPaid < totalPrice) {
    ask(questions, totalPrice);
  }
  console.log("Thanks for patronizing Us");
}
