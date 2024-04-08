document.addEventListener('DOMContentLoaded', function() {
    // Array of employee objects
    const employees = [
        { name: 'Stephen Christy', position: 'President/C.E.O', imageUrl: 'Steve.jpg', department: 'President', bio: 'Stephen Christy has evolved through the Construction and Civil Engineering Industry into the President/ CEO of Sustainable Energy Professionals Inc. In the fast paced world of Large Scale Solar Developments Stephen Christy and his team of dedicated land acquisition professionals offer unsurpassed service and results.' },
        { name: 'Dan Ruggeri', position: 'Acquisition Specialist', imageUrl: 'DanWebPic.jpg', department: 'Specialists', bio: 'Graduated SUNY Albany in 2000 with a BA in Psychology and a minor in Business, Dan has extensive experience in real estate from his time as a broker in the State of New York. Dan has been a part of the Sustainable team from day 1 and has assisted in sales of over a billion dollars in completed projects' },
        { name: 'Jonathan DesVergnes', position: 'Acquisition Specialist', imageUrl: 'John.jpg', department: 'Specialists',bio: 'Johnathan proudley served his country with 4+ Years in the United States Coast Guard while serving he learned IT Support and how to map major projects for Sustainable Energy Professionals through google earth.'},
        { name: 'Nicole Christy', position: 'Executive Assistant', imageUrl: 'Nicole.jpg', department: 'Specialists', bio: 'Nicole Christy handles all day to day scheduling as well as any in office tasks, Nicole shows up everyday with a will to work and a smile on her face.' },
        // Add more employee objects as needed
    ];

    // Iterate over the employees array and create card elements dynamically for each department
    employees.forEach(employee => {
        // Create card element
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
            <div class="card">
                <img src="${employee.imageUrl}" class="card-img-top employee-image ${employee.department === 'President' ? 'president-image' : 'specialist-image'}" alt="${employee.name}">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <p class="card-text">${employee.position}</p>
                    <p class="card-bio">${employee.bio}</p>
                </div>
            </div>
        `;

        // Get the container where employee cards will be appended based on the department
        const departmentCardsContainer = document.getElementById(employee.department + '-cards');
        // Ensure the departmentCardsContainer exists before proceeding
        if (departmentCardsContainer) {
            // Append card to the department container
            departmentCardsContainer.appendChild(card);
        } else {
            console.error(`Department container with ID '${employee.department}-cards' not found.`);
        }
    });
});
