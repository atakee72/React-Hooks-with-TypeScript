import useFetchData from "../customHooks/useFetchData";
import { User } from "../interfaces/interfaces";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function CustomHookComponent() {
  const { data, done } = useFetchData<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div
      style={{
        fontSize: "0.75rem",
        display: "flex",
        gap: "3px",
      }}
    >
      {done &&
        data!.map((user, i) => (
          <div
            style={{
              fontSize: "0.75rem",
              display: "flex",
              flexDirection: "column",
              border: "1px solid blue",
              padding: "3px",
            }}
            key={i}
          >
            <p style={{ fontWeight: "bold" }}>User Info:</p>
            <p>
              <strong>Id</strong>: {user.id}{" "}
            </p>
            <p>
              <strong>Name</strong>: {user.name}{" "}
            </p>
            <p>
              <strong>Username</strong>: {user.username}{" "}
            </p>
            <p>
              <strong>Email</strong>: {user.email}{" "}
            </p>
            <p>
              <strong>City</strong>: {user.address.city}{" "}
            </p>
            <p>
              <strong>Catch phrase</strong>: {user.company.catchPhrase}{" "}
            </p>
            <p>
              <strong>Phone</strong>: {user.phone}{" "}
            </p>
            <div>
              <strong>Map location:</strong>: {Number(user.address.geo.lat)} -{" "}
              {Number(user.address.geo.lng)}
              {/* <MapContainer style={{ height: "400px" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={[
                    Number(user!.address.geo.lat),
                    Number(user!.address.geo.lng),
                  ]}
                >
                  <Popup>A pretty CSS3 popup.</Popup>
                </Marker>
              </MapContainer> */}
            </div>
          </div>
        ))}
    </div>
  );
}

export default CustomHookComponent;
