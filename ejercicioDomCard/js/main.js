let users = [];

function addUser() {
  const name = document.getElementById("name").value;
  const picSource = document.getElementById("picSource").value;
  const location = document.getElementById("location").value;
  const aboutYou = document.getElementById("aboutYou").value;
  const github = document.getElementById("github").value;
  const linkedin = document.getElementById("linkedin").value;
  const twitter = document.getElementById("twitter").value;
  const instagram = document.getElementById("instagram").value;

  if (name && picSource && location && aboutYou) {
    let user = {
      name: name,
      picSource: picSource,
      location: location,
      aboutYou: aboutYou,
    };

    if (github) user.github = github;
    if (linkedin) user.linkedin = linkedin;
    if (twitter) user.twitter = twitter;
    if (instagram) user.instagram = instagram;

    users.push(user);
    console.log(users);
  } else {
    alert("Please fill in all required fields.");
  }
}
