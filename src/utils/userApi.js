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

export const updateUser = async (userData, token) => {
  const url = `${baseUrl}/users`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
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

export const updateUserImage = async (formData, token, target) => {
  const url = `${baseUrl}/users/${target}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error updating user image');
    }

    return await response.json();
  } catch (err) {
    console.error('Error updating user image:', err);
    throw err;
  }
};

export const createPortfolio = async (title, description, token) => {
  const url = `${baseUrl}/portfolios/`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    return response.json();
  } catch (err) {
    console.error('Error create portfolio:', err);
  }
};

export const uploadPortfolioImage = async (
  formData,
  portfolioId,
  index,
  token
) => {
  const url = `${baseUrl}/portfolios/${portfolioId}/images/${index}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error uploading portfolio image', index);
    }

    return await response.json();
  } catch (err) {
    console.error('Error uploading portfolio image:', index, err);
    throw err;
  }
};
