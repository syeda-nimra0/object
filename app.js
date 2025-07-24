 const people = [
      { name: "Ali", age: 22, city: "Karachi", isStudent: true },
      { name: "Sara", age: 19, city: "Lahore", isStudent: true },
      { name: "Ahmed", age: 30, city: "Islamabad", isStudent: false },
      { name: "Zara", age: 25, city: "Quetta", isStudent: false },
      { name: "Usman", age: 18, city: "Peshawar", isStudent: true },
      { name: "Hira", age: 21, city: "Faisalabad", isStudent: true },
      { name: "Bilal", age: 27, city: "Multan", isStudent: false },
      { name: "Ayesha", age: 23, city: "Hyderabad", isStudent: false },
      { name: "Hamza", age: 26, city: "Sialkot", isStudent: true },
      { name: "Nida", age: 29, city: "Rawalpindi", isStudent: false },
      { name: "Fahad", age: 24, city: "Gujranwala", isStudent: true },
      { name: "Mariam", age: 20, city: "Sukkur", isStudent: true },
      { name: "Tariq", age: 33, city: "Bahawalpur", isStudent: false },
      { name: "Anum", age: 28, city: "Sahiwal", isStudent: false },
      { name: "Danish", age: 19, city: "Mardan", isStudent: true },
      { name: "Farah", age: 22, city: "Abbottabad", isStudent: true },
      { name: "Saad", age: 24, city: "Mirpur", isStudent: false },
      { name: "Iqra", age: 21, city: "Gilgit", isStudent: true },
      { name: "Owais", age: 31, city: "Muzaffarabad", isStudent: false },
      { name: "Fatima", age: 20, city: "Swat", isStudent: true },
      { name: "Rehan", age: 27, city: "Dadu", isStudent: false },
      { name: "Lubna", age: 23, city: "Gwadar", isStudent: false },
      { name: "Shahid", age: 34, city: "Larkana", isStudent: false },
      { name: "Neha", age: 22, city: "Turbat", isStudent: true },
      { name: "Junaid", age: 20, city: "Khairpur", isStudent: true },
      { name: "Bushra", age: 28, city: "Sadiqabad", isStudent: false },
      { name: "Kashif", age: 26, city: "Jhelum", isStudent: true },
      { name: "Mehwish", age: 24, city: "Mingora", isStudent: false },
      { name: "Noman", age: 30, city: "Vehari", isStudent: false },
      { name: "Hassan", age: 19, city: "Kasur", isStudent: true },
      { name: "Aqsa", age: 21, city: "Okara", isStudent: true },
      { name: "Salman", age: 29, city: "Nawabshah", isStudent: false },
      { name: "Asma", age: 25, city: "Chiniot", isStudent: true },
      { name: "Taha", age: 22, city: "Kotli", isStudent: false },
      { name: "Rabia", age: 20, city: "Thatta", isStudent: true },
      { name: "Imran", age: 32, city: "Mansehra", isStudent: false },
      { name: "Komal", age: 23, city: "Attock", isStudent: true },
      { name: "Naveed", age: 27, city: "Bannu", isStudent: false },
      { name: "Afshan", age: 21, city: "Hafizabad", isStudent: true },
      { name: "Zeeshan", age: 25, city: "Dera Ghazi Khan", isStudent: false },
      { name: "Huma", age: 19, city: "Tando Adam", isStudent: true },
      { name: "Talha", age: 22, city: "Chakwal", isStudent: true },
      { name: "Samina", age: 24, city: "Bhakkar", isStudent: false },
      { name: "Yasir", age: 26, city: "Pakpattan", isStudent: false },
      { name: "Nazish", age: 20, city: "Kohat", isStudent: true },
      { name: "Waqar", age: 23, city: "Mandi Bahauddin", isStudent: true },
      { name: "Sundas", age: 28, city: "Narowal", isStudent: false },
      { name: "Zubair", age: 31, city: "Jhang", isStudent: false },
      { name: "Hafsa", age: 21, city: "Shikarpur", isStudent: true }
    ];

    const tbody = document.querySelector("#peopleTable tbody");

    people.forEach((person, index) => {
      const tr = document.createElement("tr");
      tr.style.setProperty('--i', index + 1);
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
        <td>${person.isStudent ? "✅" : "❌"}</td>
      `;
      tbody.appendChild(tr);
    });