async function fetchData() {
    let inputText = document.getElementById("inputtext").value;
    let response = await fetch(`https://api.github.com/users/${inputText}`);
    let data = await response.json();
    console.log(data);
    const img1 = document
      .querySelector("img")
      .setAttribute("src", data.avatar_url);
  
    let name = (document.getElementById("name").innerText = data.name);
    let names = (document.getElementById("name-2").innerText = data.login);
    let date = (document.getElementById("date").innerText = data.created_at);
    let repos = data.public_repos;
    let followers = data.followers;
    let following = data.following;
  
    let location = data.location;
    let blog = data.blog;
    let twitter = data.twitter_username;
    let company = data.company;
    console.log(repos);
  
    document.getElementById("followers-tab").innerHTML = `
          <div class="div-4">
              <div>
                  <span>repos:</span>
                  <span id="repos">${repos}</span>
              </div>
              <div>
                  <span>followers:</span>
                  <span id="followers">${followers}</span>
              </div>
              <div>
                  <span>following:</span>
                  <span id="following">${following}</span>
              </div>
            </div>
          
          `;
  
    let foot = (document.getElementById("footer").innerHTML = `
                <div class="footer-container">
                <div class="footer-list">
                    <div>
                        <span class="material-symbols-outlined">
                            location_on
                        </span>
                        <h4>${location}</h4>
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            link
                        </span>
                        <h4>${blog}</h4>
                    </div>
                </div>
                <div class="footer-list">
                    <div>
                        <img src="./assets/twitter.svg" alt="" class="img1">
                        <h4>${twitter}</h4>
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            apartment
                        </span>
                        <h4>${company}</h4>
                    </div>
                </div>
            </div>
          `);
  }
  document.getElementById("btn2").addEventListener("click", fetchData);
  