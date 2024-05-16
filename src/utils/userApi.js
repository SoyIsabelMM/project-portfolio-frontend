import { baseUrl } from './constant';

export const fetchProfile = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}/users/${userId}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error fetching profile data');
    }
  } catch (err) {
    console.error('Error', err);
    throw err;
  }
};

export const updateUser = async (userDataToUpdate, token) => {
  const url = `${baseUrl}/users`;

  try {
    const {
      _id,
      firstName,
      lastName,
      country,
      birthDate,
      token,
      ...userDataToSend
    } = userDataToUpdate;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userDataToSend),
    });

    console.log(response, 'Hola soy api');

    if (!response.ok) {
      throw new Error('Error al actualizar la información del usuario');
    }

    return await response.json();
  } catch (err) {
    console.error('Error al actualizar la información del usuario:', err);
    throw err;
  }
};
