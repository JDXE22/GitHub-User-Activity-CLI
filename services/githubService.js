export class GitHubService {
  constructor() {
    this.baseUrl = "https://api.github.com";
  }

  getUserData = async (username) => {
    try {
      const response = await fetch(`${this.baseUrl}/users/${username}/events`);
      return await response.json();
    } catch (error) {
      console.error(
        "Error fetching user data from the service:",
        error.message
      );
      throw error;
    }
  };
}
