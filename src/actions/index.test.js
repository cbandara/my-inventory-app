import { registerUser, REGISTER } from './index';
// import {ADD_LIST, addList, ADD_CARD, addCard} from './index';

describe('registerUser', () => {
  it('Should create a user', () => {
    const user = { email: "user34567", password: "12345678" };
    const action = registerUser(user);
    expect(action.type).toEqual(REGISTER);
    expect(action.user).toEqual(user);
  });
});

// describe('addCard', () => {
//   it('Should return the action', () => {
//     const text = 'Card text';
//     const listIndex = 10;
//     const action = addCard(text, listIndex);
//     expect(action.type).toEqual(ADD_CARD);
//     expect(action.text).toEqual(text);
//     expect(action.listIndex).toEqual(listIndex);
//   });
// });