const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 20 },
  ];

  function continueWithEmail() {

    users.sort((a, b) => a.age - b.age);

  
    let names = "";
    users.forEach((user) => {
      names += user.name + "\n";
    });
    window.alert(names);
  }

  function continueWithMobile() {
    const name = "your name";
    window.alert(`Thank you for choosing mobile, ${name}`);
  }