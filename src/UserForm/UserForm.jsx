const UserForm = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "white",
            border: "0.1px solid gray",
            borderRadius: "10px"
          }}
        >
          <select
            name="city"
            id="city"
            style={{
              padding: "10px",
              fontSize: "18px",
              borderRadius: "10px",
              border: "none"
            }}
          >
            <option value="Lucknow">📍Lucknow</option>
            <option value="Varanasi">📍Varansi</option>
            <option value="Siddharthnagar">📍Siddharthnagar</option>
            <option value="Basti">📍Basti</option>
            <option value="Delhi">📍Delhi</option>
          </select>
          <input
            type="text"
            style={{
              padding: "20px",
              fontSize: "18px",
              width: "360px",
              border: "none",
              borderRadius: "10px"
            }}
            placeholder="|    🔍 Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
    </>
  );
};
export default UserForm;
