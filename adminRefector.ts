
// diy

interface User {
  uuid: string;
  name: string;
  phone: string;
  email: string;
  roleId: Number;
  createdAt: number;
}

type EditingUser = User;

// i keep the EditingUser
// then define something similar to  User  but not the same
// I define those schemas on yup : those two are different
// Edit form values
interface EditUserForm {
  name: string;
  phone: string;
  email: string;
  roleIdString: string;
}

interface CreatUserForm {
  name: string;
  phone: string;
  email: string;
  roleIdString: string;
  password: string;
}


// Trick the type to make sure after initialize with some val , a is exist
// 但是這方法要assign，再看看
// 看起來無效
let a: null | User
if(true) {
  a = a!
}


createMutate({user, password} : {user: 部分User, password: string});
editMutate(user);


// 新增，user is 部分User， User without createdAt 跟 uuid
const res = await http.post(`/users`, { user, password });
// 修改，user is User 沒問題
const res = await http.put(`/users/${uuid}`, { user });

type UserEditingPayload = User;

interface UserCreatingPayload {
  name: string;
  phone: string;
  email: string;
  roleId: Number;
}