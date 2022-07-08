const linksSocialMedia = {
  github: "dsouloficial",
  youtube: "Dsoulificial",
  facebook: "DenilsonBernardo",
  instagram: "dsoul_oficial",
  twitter: "dsouloficial"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
      
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
    
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url) 
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url 
    UserImage.src = data.avatar_url
    
  })
}
getGitHubProfileInfos()


