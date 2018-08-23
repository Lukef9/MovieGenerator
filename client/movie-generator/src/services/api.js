const BE_URL = 'http://localhost:3001';

export async function fetchMovies() {
  try {
    const movies = await fetch(`${BE_URL}/movies`);
    return movies.json();
  } catch (e) {
    throw (e);
  }
}

export async function fetchReviews() {
  try {
    const reviews = await fetch(`${BE_URL}/reviews`);
    return reviews.json();
  } catch (e) {
    throw (e);
  }
}

export async function saveReview(review) {
  try {
    const opts = {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const reviewData = await fetch(`${BE_URL}/reviews`, opts);
    return reviewData.json();
  } catch (e) {
    throw (e);
  }
}

export async function updateReview(review) {
  try {
    const opts = {
      method: 'PUT',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const reviewData = await fetch(`${BE_URL}/reviews/${review.review_id}`, opts);
    return reviewData.json();
  } catch (e) {
    throw (e);
  }
}

export async function destroyReview(id) {
  try {
    const opts = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const review = await fetch(`${BE_URL}/reviews/${id}`, opts);
    return review;
  } catch (e) {
    throw (e);
  }
}

export async function registerUser(user) {
  try {
    const opts = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const userToken = await fetch(`${BE_URL}/auth/register`, opts);
    return userToken.json();
  } catch (e) {
    throw (e);
  }
}

export async function login(user) {
  try {
    const opts = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const userToken = await fetch(`${BE_URL}/auth/login`, opts);
    return userToken.json();
  } catch (e) {
    throw (e);
  }
}
