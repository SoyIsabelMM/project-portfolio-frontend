const baseUrl = import.meta.env.VITE_API_URL;

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
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
};
