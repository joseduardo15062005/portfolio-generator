const printProfileData = (profileDataArr) => {
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

const profileDataArgs = process.argv.slice(2, process.argv.length);

printProfileData(profileDataArgs);
