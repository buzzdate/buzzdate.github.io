// script.js
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const bio = document.getElementById("bio").value;
    const gender = document.getElementById("gender").value;
    const height = document.getElementById("height").value;
    const languages = document.getElementById("languages").value;
    const location = document.getElementById("location").value; 
    const exercise = document.getElementById("exercise").value;
    const education = document.getElementById("education").value;
    const drinking = document.getElementById("drinking").value;
    const smoking = document.getElementById("smoking").value;
    const cannabis = document.getElementById("cannabis").value;
    const lookingFor = document.getElementById("lookingFor").value;
    const starSign = document.getElementById("starSign").value;
    const interest = document.getElementById("interest").value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    if (profilePicture) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const imgSrc = event.target.result;

            const profileHTML = `
            <div class="profile" id="profile">
                <div class="profile-info">
                    <img src="${imgSrc}" alt="Profile Picture" class="profile-picture">
                    <div class="profile-text">
                        <h2>${name}, ${age}</h2>
                        <p class="profile-bio"><strong>Bio:</strong> ${bio}</p>
                        <p><strong>Gender:</strong> ${gender}</p>
                        <p><strong>Height:</strong> ${height}</p>
                        <p><strong>Languages:</strong> ${languages}</p>
                        <p><strong>Location:</strong> ${location}</p>
                        <p><strong>Exercise:</strong> ${exercise}</p>
                        <p><strong>Education:</strong> ${education}</p>
                        <p><strong>Drinking:</strong> ${drinking}</p>
                        <p><strong>Smoking:</strong> ${smoking}</p>
                        <p><strong>Cannabis:</strong> ${cannabis}</p>
                        <p><strong>Looking for:</strong> ${lookingFor}</p>
                        <p><strong>Star sign:</strong> ${starSign}</p>
                        <p><strong>Interest:</strong> ${interest}</p>
                    </div>
                </div>
            </div>
        `;


            document.getElementById('result').innerHTML = profileHTML;

            // Wait for the profile to render
            setTimeout(() => {
                const profileElement = document.getElementById('profile');
                if (profileElement) {
                    html2canvas(profileElement).then(canvas => {
                        canvas.toBlob(function(blob) {
                            const link = document.createElement('a');
                            link.download = 'profile.png';
                            link.href = URL.createObjectURL(blob);
                            link.click();

                            // Clean up the URL object
                            URL.revokeObjectURL(link.href);
                        }, 'image/png');
                    }).catch(err => {
                        console.error('Error during canvas creation:', err);
                    });
                } else {
                    console.error('Profile element not found.');
                }
            }, 1000); // Adjust timeout if necessary
        };

        reader.onerror = function(event) {
            console.error('File could not be read: ' + event.target.error.code);
        };

        reader.readAsDataURL(profilePicture);
    } else {
        console.error('No profile picture uploaded.');
    }
});
