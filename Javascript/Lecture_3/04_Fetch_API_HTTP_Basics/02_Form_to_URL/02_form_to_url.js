const form = document.getElementById("userForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault(); // prevent page reload

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );

        const result = await response.json();

        console.log("Response from server:", result);
        alert("User created successfully!");

        form.reset();
    } catch (error) {
        console.error("Error:", error);
    }
});
