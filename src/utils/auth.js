import { baseUrl } from './constant';

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return response.json();
  } catch (err) {
    console.error('Ocurrio un error en el login', err);
    throw err;
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return response.json();
  } catch (err) {
    console.error('Ocurrio un error en el registro', err);
    throw err;
  }
};
