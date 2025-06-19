const gitHubUsername = process.argv[2];


if (!gitHubUsername) {
  console.error('Please provide a GitHub username as an argument.');
  process.exit(1);
}

try {
    const getUserData = await gitHubService.getUserData(gitHubUsername);
    return displayUserData(getUserData);
    
} catch (error) {
    
    console.error('An error occurred:', error.message);
    process.exit(1);
}
