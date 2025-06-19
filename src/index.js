import { GitHubService } from "../services/githubService.js";
import { Display } from "../utils/display.js";

const gitHubUsername = process.argv[2];

if (!gitHubUsername) {
  console.error("Please provide a GitHub username as an argument.");
  process.exit(1);
}

const gitHubService = new GitHubService();
const display = new Display();

(async () => {
  try {
    const getUserData = await gitHubService.getUserData(gitHubUsername);
    display.displayUserData(getUserData);
  } catch (error) {
    console.error("An error occurred:", error.message);
    process.exit(1);
  }
})();
