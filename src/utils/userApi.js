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

export const fetchProfiles = async (search) => {
  const url = new URL(`${baseUrl}/users/profiles`);
  if (search) {
    url.search = new URLSearchParams({ search }).toString();
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error fetching users profiles');
    }
  } catch (err) {
    console.error('Error', err);
    throw err;
  }
};

export const updateUser = async (
  firstName,
  lastName,
  country,
  resume,
  instagram,
  facebook,
  linkedin,
  about,
  hobbies,
  activities,
  happyPlaces,
  token
) => {
  const url = `${baseUrl}/users`;

  try {
    const userDataToUpdate = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      resume: resume,
      instagram: instagram,
      facebook: facebook,
      linkedin: linkedin,
      about: about,
      hobbies: hobbies,
      activities: activities,
      happyPlaces: happyPlaces,
    };

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userDataToUpdate),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar la información del usuario');
    }

    return await response.json();
  } catch (err) {
    console.error('Error al actualizar la información del usuario:', err);
    throw err;
  }
};

export const updateUserBanner = async (userId, banner, token) => {
  const url = `${baseUrl}/users/banner`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: userId,
        banner: banner,
      }),
    });

    if (!response.ok) {
      throw new Error('Error updating user banner');
    }

    return await response.json();
  } catch (err) {
    console.error('Error updating user banner:', err);
    throw err;
  }
};
