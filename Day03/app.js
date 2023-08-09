function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const users = [
  {
    id: 1,
    firstName: "Candy",
    lastName: "Wang",
    description: "前端工程師",
    avatar: "https://i.pravatar.cc/300?img=31",
  },
  {
    id: 2,
    firstName: "Josephine",
    lastName: "James",
    description: "UI / UX 設計師",
    avatar: "https://i.pravatar.cc/300?img=32",
  },
  {
    id: 3,
    firstName: "Glen",
    lastName: "Castillo",
    description: "後端工程師",
    avatar: "https://i.pravatar.cc/300?img=33",
  },
];

// 練習區塊
const userList = (
  <ul className="list">
    {users.map((users) => (
      <li>
        <div className="card">
          <img src={users.avatar} alt="photo"></img>
          <div className="content">
            <h3>
              <b>{formatName(users)}</b>
            </h3>
            <p>{users.description}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
// 區塊結束

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(userList);
